import { Button, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { SuperAgentContext } from "../Context/SuperAgentState";



const AddSuperAgent = ({ onHide }) => {

  // e get this addSTudent from student context
  const { addSuperAgent } = useContext(SuperAgentContext);
  //initial value for form element

  const [newSuperAgent, setNewSuperAgent] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  }); //initial state will be an object and the property of this object will be empty


  //catch the changes of form element
  const onInputChange = (e) => {
    setNewSuperAgent({ ...newSuperAgent, [e.target.name]: e.target.value })
  }
  const { name, email, address, phone } = newSuperAgent;

  const handleSubmit = (e) => {
    e.preventDefault()
    addSuperAgent(name, email, address, phone);
  }



  return (
    <Form onSubmit={handleSubmit} className="grid-column-03">

      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Name *'
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Control
          type='email'
          placeholder='Email *'
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          required>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Control
          as='textarea'
          placeholder='Address *'
          name="address"
          value={address}
          onChange={(e) => onInputChange(e)}
          required>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Control
          type='number'
          placeholder='Phone *'
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
          required>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Button variant="success" type="submit" onClick={onHide}>
          Add Agent
        </Button>
      </Form.Group>
    </Form>
  )
}

export default AddSuperAgent;