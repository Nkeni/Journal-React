import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const PostContext = createContext(null);
//! null initial default state

const defaultEntry = JSON.parse(localStorage.getItem("allEntries")) || [];
//! converting the data back from setItem string, the array at the end helps to avoid an error that will show from mapping in the List component

function PostProvider({ children }) {
  const [entry, setEntry] = useState(defaultEntry);

  //^ Useeffect to show the tasks on a page
  useEffect(() => {
    localStorage.setItem("allEntries", JSON.stringify(entry));
  }, [entry]);
  return (
    <PostContext.Provider value={{ entry, setEntry }}>
      {children}
    </PostContext.Provider>
  );
}
export default PostProvider;
