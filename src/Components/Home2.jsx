import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { allTopics } from "../info/action"
import { Navbar } from "./Navbar"
import "./Home2.css"
// import { Home1 } from "./Home1"

const Home2 = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        fetch("http://localhost:8000/ALL_TOPICS")
        .then((res) => res.json())
        .then((res) => dispatch(allTopics(res)))
        .catch((err) => console.log(err))
    }, [])

    const data = useSelector((state) => state.allTopic);
    console.log(data);

    const {id, name} = data
     
    return( 
       
    <div> 
        <Navbar/>
        <h1>All Lesson</h1>    
         
        <div className="home2">{data.map((item) => {
            return (<div className="home21">
               <img src = {item.profile_img} alt = "" height={"60%"} width = {"100%"}/>
                    <div>
                         <h2>{item.title}</h2> 
                    </div>
                    <div>
                        <h3>{item.name}</h3> 
                    </div>
                    <div>
                        <h3>{item.role}</h3>
                    </div>
            </div>)
        })}</div>

    </div>)
}

export { Home2 }