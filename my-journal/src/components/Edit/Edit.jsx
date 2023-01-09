import { useRef } from "react"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { PostContext } from "../../PostContext"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./edit.scss"

function Edit() {

    //& This comes from the route
    const {id} = useParams()
    console.log(id)

    //! useRef is used to get input value, onChange as well
    const inputValue = useRef()

    const{tasks,setTasks}=useContext(PostContext)

    //^ finding the item we want to edit

    const findTheTask = tasks.find(item=>item.id===id)
    console.log(findTheTask);

    const navigate= useNavigate()

    const confirmHandler=()=>{
        if(!inputValue.current.value){
            alert("Please select what to edit")
        }
        else{

const editedTask=tasks.map(item=>item.id ===id?{...item,text:inputValue.current.value}:item)
setTasks(editedTask)
navigate("/journal")
    }
}

  return (
    <div>
      <input type="text" ref={inputValue} defaultValue={findTheTask.text}/>
{/* required works only in bootstrap */}
      <div>
        <NavLink to="/journal"><button onClick={confirmHandler} >confirm</button></NavLink>
        <NavLink to="/journal"><button>cancel</button></NavLink>
      </div>
    </div>
  )
}

export default Edit