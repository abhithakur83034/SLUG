import React, { useState } from "react";
import { Link } from "react-router-dom";
import Show from "./Show";

export default function Create(){
        const [title,setTitle] = useState('')
        const [description,setDescription] = useState('')

    let hSubmit=(e)=>{
            e.preventDefault()

            let slug = title.split(" ").join('-')
            // console.log(slug)
            let date = new Date().toLocaleDateString()
            let newObj = {title,description,slug,date}

            const url ='http://localhost:5000/blogs'

            let promise = fetch(url,{
                headers :{
                    'Content-Type':'application/json'
                },
                method:"POST",
                body:JSON.stringify(newObj)
            })
            promise.then((response)=>{
                if(response.ok){
                        alert("Added Your Blog Successfully.....")
                }
            }).then((data)=>{
                setTitle('')
                setDescription('')
            }).catch((error)=>{
                console.log(error)
            })

    }


    return(
        <>
         <div className="container">
            <div className="row">
                <div className="col-sm-3 bg-white"></div>
                <div className="col-sm-6 bg-light">
                    <h1>Please Write here</h1>

                    <form onSubmit={hSubmit}>
                        TITLE : <input type="text" className="form-control" placeholder="Enter Your Title" 
                         onChange={(e)=>{setTitle(e.target.value)}} value={title}/>

                        DESCRIPTION : <textarea style={{resize:"none"}} className="form-control" placeholder="Enter Your Description"
                          onChange={(e)=>{setDescription(e.target.value)}} value={description}></textarea> <br />

                            <input type="submit" value="Save Blog" className="btn btn-outline-info" />
                            <div className="btn btn-outline-info">
                                <Link to="Show">Show Data</Link>
                            </div>

                    </form>


                </div>
                <div className="col-sm-3 bg-white"></div>
            </div>
         </div>
        </>
    )
}