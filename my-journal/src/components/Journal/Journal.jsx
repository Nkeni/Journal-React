import {Form, FormControl,Button, Container,Row} from 'react-bootstrap';
import Posts from '../Posts/Posts.jsx';
import { useContext,useRef } from 'react';
import { PostContext } from '../../PostContext.jsx';
import { v4 as uuidv4 } from 'uuid';

import "./journal.scss"

function Journal() {

    const id = uuidv4()
console.log(id);
const inputValue = useRef()
const inputDate = useRef()



const{tasks,setTasks}=useContext(PostContext)

//^form preventDefault
const submitHandler=e=>{
    e.preventDefault()
    setTasks([{id,text:inputValue.current.value,date:inputDate.current.value},...tasks])
    console.log(setTasks);
    //^input will show on top

    inputValue.current.value=""
    inputDate.current.value=""
    //^making an input block empty after writing
}
  return (

    <Container className='wrapper'>
   
         <Row className='row1'>
         
             
             
                 <Form onSubmit={submitHandler} className='todo-form' required>
                 <h2>Create a post</h2>
                 {/* <Form.Label>Tasks</Form.Label> */}
                 <FormControl ref={inputValue} className='todo-input' type="text" placeholder="journal entry..." required/>
                 <FormControl  ref={inputDate} className="todo-date" type="date"  required/>
                 <Button type="submit" className='add' variant="success">Add</Button>{' '}
                 <Button  className='back'  variant="info">Back</Button>{' '}
                 </Form>
            
             </Row>

             <Row className='row2'>
            
              <Posts/>
           
              </Row>
</Container>
  )
}

export default Journal
