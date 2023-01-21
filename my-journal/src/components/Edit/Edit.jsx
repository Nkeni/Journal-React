import { useRef } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../PostContext";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Row, FormControl } from "react-bootstrap";
import "./edit.scss";

function Edit() {
  //& This comes from the route
  const { id } = useParams();
  console.log(id);

  //! useRef is used to get input value, onChange as well
  const inputValue = useRef();

  const { entry, setEntry } = useContext(PostContext);

  //^ finding the item we want to edit

  const findTheEntry = entry.find((item) => item.id === id);
  console.log(findTheEntry);

  const navigate = useNavigate();

  const confirmHandler = () => {
    if (!inputValue.current.value) {
      alert("Please select what to edit");
    } else {
      const editedEntry = entry.map((item) =>
        item.id === id ? { ...item, text: inputValue.current.value } : item
      );
      setEntry(editedEntry);
      navigate("/journal");
    }
  };

  return (
    <div className="edit">
      <Row>
        <FormControl
          ref={inputValue}
          className="todo-input"
          type="text"
          defaultValue={findTheEntry.text}
        />
        {/* <input type="text" ref={inputValue} defaultValue={findTheEntry.text} /> */}
        {/* required works only in bootstrap */}
        <div className="edit-stuff">
          <NavLink to="/journal">
            <button className="confirm" onClick={confirmHandler}>
              confirm
            </button>
          </NavLink>
          <NavLink to="/journal">
            <button className="cancel">cancel</button>
          </NavLink>
        </div>
      </Row>
    </div>
  );
}

export default Edit;
