import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useContext} from 'react';
import { PostContext } from '../../PostContext';

import "./posts.scss"


function Posts() {
    const {tasks,setTasks}=useContext(PostContext)

 //& Deleting task function
 const deleteHandler=(todo)=>{
console.log(todo);   
    const filtArr = tasks.filter(item=>item.id !==todo.id)
    setTasks(filtArr)
    }
  return (
    <div className='lists'>
        <h2>List of Posts</h2>
        <ListGroup>
{tasks && tasks.map(item =><ListGroup.Item variant="warning" key={item.id}className='listItem'>
    {/* {if there is task, then map through it} */}
        
            <p>{item.text}</p>
            <p className='date'> Posted on {item.date}</p>
      <div>
          <Button variant="outline-success">Edit</Button>{' '}
          <Button onClick={()=>deleteHandler(item)} variant="outline-danger">Delete</Button>{' '}
      </div>
      </ListGroup.Item>)}
        </ListGroup>
      
      
    </div>
  )
}

export default Posts
