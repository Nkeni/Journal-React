import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { PostContext } from "../../PostContext";
import { NavLink } from "react-router-dom";

import "./posts.scss";

function Posts() {
  const { entry, setEntry } = useContext(PostContext);

  //& Deleting task function
  const deleteHandler = (todo) => {
    console.log(todo);
    const filtArr = entry.filter((item) => item.id !== todo.id);
    setEntry(filtArr);
  };

  // &Editing

  const editHandler = () => {
    console.log("hi");
  };

  return (
    <div className="lists">
      <h2>My journal entries</h2>
      <ListGroup>
        {entry &&
          entry.map((item) => (
            <ListGroup.Item
              variant="warning"
              key={item.id}
              className="listItem"
            >
              {/* {if there is task, then map through it} */}

              <p className="text">{item.text}</p>
              <p className="date"> Posted on {item.date}</p>
              <div className="buttons">
                <NavLink to={item.id}>
                  <Button onClick={editHandler} variant="outline-success">
                    Edit
                  </Button>{" "}
                </NavLink>
                <Button
                  onClick={() => deleteHandler(item)}
                  variant="outline-danger"
                >
                  Delete
                </Button>{" "}
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

export default Posts;
