import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowDetails(){

    const [details,setDetalis]=useState({})

    const {id} = useParams()

    useEffect(()=>{
        const url = 'http://localhost:5000/blogs/'+id;

        let promise = fetch(url)
        promise.then((response)=>{
            return response.json()
        }).then((data)=>{
            setDetalis(data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])


    return(
        <>
          
           <div className="container">
            <div className="row">
                <div className="col-sm-3 bg-white"></div>
                <div className="col-sm-6 bg-light">
                <div className="card">
                <div className="card-title">
                    <h2>
                        
                        {details.title}
                    </h2>
                </div>
                <div className="card-body">
                    <p>
                           
                        {details.description}                        
                    </p>
                </div>
            </div>
                </div>
                <div className="col-sm-3 bg-white"></div>
            </div>
           </div>

        </>
    )
}