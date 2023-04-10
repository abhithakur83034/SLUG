import React, { useEffect, useState } from "react";
import { navigate,useNavigate } from "react-router-dom";
export default  function Show(){
    const [blogdata,setBlogdata] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const url = 'http://localhost:5000/blogs';

        let promise = fetch(url)
        promise.then((response)=>{
            return response.json()
        }).then((data)=>{
            setBlogdata(data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

      let hDetail=(id,slug)=>{
        navigate('/'+slug+'/'+id)
      }

    return(
        <>
             <table className="table table-borderd">
                <tr>
                    <th>I'd</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Slug</th>
                    <th>Date</th>
                </tr>
                {blogdata.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td> {item.id} </td>
                            <td> {item.title} </td>
                            <td> {item.description} </td>
                            <td> {item.slug} </td>
                            <td> {item.date} </td>
                            <td> <button onClick={()=>{hDetail(item.id,item.slug)}}>SHOW DETAILS</button> </td>
                        </tr>
                    )
                })}
             </table>
        </>
    )
}