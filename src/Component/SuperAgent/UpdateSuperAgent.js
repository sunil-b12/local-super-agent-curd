import { Button, Form } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { SuperAgentContext } from "../Context/SuperAgentState";
//this is functional component



const UpdateSuperAgent = ({ SuperAgent, selectedAgentId, handleClose }) => {
    const { updateSuperAgent } = useContext(SuperAgentContext);
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        // Fetch the agent's data using the selectedAgentId and populate the state
        const agentData = SuperAgent.find(agent => agent.id === selectedAgentId);
        if (agentData) {
            setName(agentData.name);
            setEmail(agentData.email);
            setAddress(agentData.address);
            setPhone(agentData.phone);
        }
    }, [selectedAgentId, SuperAgent]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedSuperAgent = { id: selectedAgentId, name, email, address, phone };
        updateSuperAgent(selectedAgentId, updatedSuperAgent);
    }


    return (
        <Form onSubmit={handleSubmit}>

            <div className="grid-column-03">
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Name *'
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        type='email'
                        placeholder='Email *'
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        as='textarea'
                        placeholder='Address *'
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        type='number'
                        placeholder='Phone *'
                        name="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        required>
                    </Form.Control>
                </Form.Group>
            </div>

            <Form.Group className="mt-4">
                <Button variant="success" type="submit" onClick={handleClose}>
                    Update Agent
                </Button>
            </Form.Group>
        </Form>
    )
}

export default UpdateSuperAgent;