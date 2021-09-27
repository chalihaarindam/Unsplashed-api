import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { setPhoto, selectPhoto } from './photoSlice';
import { setResult, selectResult } from './resultSlice';
import{ setHead , emptyHead, selectHead, setTitle} from './headSlice';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { increment ,selectCount,reset} from './features/counter/counterSlice';
import axios from 'axios';
import './Login.css';
import Gallery from './Gallery.js';


function Login() {
    const dispatch = useDispatch();
   
    const photo = useSelector(selectPhoto);
    const result = useSelector(selectResult);
    const count = useSelector(selectCount);
    const head = useSelector(selectHead);


    const handleChange = e => {
        dispatch(setPhoto({...photo,[e.target.name]: e.target.value}));
    }

    const handleSubmit = e => {
        
        console.log(photo.photo);
        const url = "https://api.unsplash.com/search/photos/?page=1&per_page=30&client_id=riHZvs9f4XeSAJHCo_8HCWl19eZb0PY81ixEbRWLULY&query="+photo.photo;
        axios.get(url)
            .then((response) =>{
                console.log(response);
                const res = response.data.results;
                const val = response.data.total;
                const temp = photo.photo;
                dispatch(setResult({...result,result: res}));
                dispatch(setHead({...head,val}));  
                dispatch(setTitle({...head,temp}));
                dispatch(reset());
            });  
      }

    const handleMore = () => {
        dispatch(increment());
      }




    return (
        <div className="login">
            <div className="container">
                <div className="row">
                     <div className="col-10 ">
                        <input className="search_bar" onChange={handleChange} type="text" name="photo" placeholder="Search for photos"/>
                     </div>
                    <div className="col-2">
                        <button className="btn btn-dark search" onClick={handleSubmit}  type="submit">
                        <i className="fa fa-search icon fa-2x" aria-hidden="true"></i>
                        </button>
                  </div>
                </div>
            </div> 
            <br></br>
            <div className="container">
                <div className="row">
                <div className="col-7  lo" align="left">
                         <p className="line_one">{head.title}</p>
                         {head.value ? <p className="line_two">{head.value} Images have been found.</p> : <p></p>}
                     </div>
                </div>
            </div> 
            
            <div className="container">
                <div className="row">
                     <div className="home_row" align="center">
                            {result.result.slice(0, count).map((photo)=>{
                                 return <Gallery image={photo.urls.small} />
                             })}
                     </div>
                </div>
            </div> 
             
           

           {head.value ? <button onClick={handleMore}  type="submit" className="btn btn-dark load">Load More</button> : <h1></h1>}
        </div>
    );
}

export default Login;
