import {Form, FormControl,Button, Container,Row,Col} from 'react-bootstrap';
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

    <Container className='container'>
   
         <Row className='row'>
         
             <Col className='posts' xl="4">
             
                 <Form onSubmit={submitHandler} className='todo-form' required>
                 <h2>Create a post</h2>
                 {/* <Form.Label>Tasks</Form.Label> */}
                 <FormControl ref={inputValue} className='todo-input' type="text" placeholder="write something..." required/>
                 <FormControl  ref={inputDate} type="date" placeholder="day" required/>
                 <Button type="submit" className='add' variant="success">Add</Button>{' '}
                 <Button  className='back'  variant="info">Back</Button>{' '}
                 </Form>
             </Col>
             
<Col className='lists' xl="7">

    <Posts/></Col>
        
         </Row>
</Container>
  )
}

export default Journal
