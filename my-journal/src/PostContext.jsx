import { createContext } from "react";
import { useState } from "react";
import { useEffect } from 'react';

export const PostContext=createContext(null) 
//! null initial default state

const defaultTasks = JSON.parse(localStorage.getItem("allTasks")) || []
//! converting the data back from setItem string, the array at the end helps to avoid an error that will show from mapping in the List component

 function PostProvider({children}) {

    const[tasks,setTasks]=useState(defaultTasks)

    //^ Useeffect to show the tasks on a page
useEffect(()=>{
    localStorage.setItem("allTasks",JSON.stringify(tasks))
    },[tasks])
  return (
   <PostContext.Provider value={{tasks,setTasks}}>
    {children}
   </PostContext.Provider>
  )
}
export default PostProvider

