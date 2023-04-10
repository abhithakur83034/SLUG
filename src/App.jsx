import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Create from "./Create";
import Show from "./Show";
import ShowDetails from "./ShowDetails";

export default function App(){
    return(
        <>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Create/> } />
                <Route path="/Show" element={ <Show/> } />
                <Route path="/:slug/:id" element={ <ShowDetails/> } />
            </Routes>
          </BrowserRouter>
        </>
    )
}