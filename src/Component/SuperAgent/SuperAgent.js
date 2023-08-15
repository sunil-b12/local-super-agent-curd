import React, { useContext, useState } from 'react';
import { SuperAgentContext } from '../Context/SuperAgentState';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddSuperAgent from './AddSuperAgent';
import { AiOutlineClose } from "react-icons/ai";
import UpdateSuperAgent from './UpdateSuperAgent';
const SuperAgent = () => {

    const { superAgent } = useContext(SuperAgentContext)
    const [addShow, setAddShow] = useState(false);
    const { deleteSuperAgent } = useContext(SuperAgentContext)
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [selectedAgentId, setSelectedAgentId] = useState(null);

    return (
        <>
            <div style={{ padding: "20px" }} className='container grid'>
                <h2 className='text-center mt-3'>Super Agent Data</h2>
                <div className="addButton my-5 d-flex justify-content-end">
                    <Button variant="primary" onClick={() => setAddShow(true)}>
                        Create Agent
                    </Button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            superAgent.map((agentData) => {
                                return <tr key={agentData.id}>
                                    <td>{agentData.name}</td>
                                    <td>{agentData.address}</td>
                                    <td>{agentData.email}</td>
                                    <td>{agentData.phone}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                setSelectedAgentId(agentData.id);
                                                handleShow();
                                            }}
                                            className="btn text-warning btn-act"
                                            data-toggle="modal"
                                        >
                                            <i className="material-icons">edit</i> {/* Use the correct class name */}
                                        </button>
                                        <button
                                            onClick={() => deleteSuperAgent(agentData.id)}
                                            className="btn text-danger btn-act"
                                            data-toggle="modal"
                                        >
                                            <i className="material-icons">delete</i> {/* Use the correct class name */}
                                        </button>
                                    </td>
                                </tr>

                            })
                        }
                    </tbody>
                </Table>
            </div>
            <div>
                <Modal
                    show={addShow}
                    onHide={() => setAddShow(false)}
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Create New Super Agent
                        </Modal.Title>
                        <button onClick={() => setAddShow(false)} className="uk-button bg-close-btn">
                            <AiOutlineClose uk-tooltip="Close" size="1.3rem" color="#fff" />
                        </button>
                    </Modal.Header>
                    <Modal.Body>
                        <AddSuperAgent onHide={() => setAddShow(false)} />
                    </Modal.Body>
                </Modal>

                <Modal show={show} onHide={handleClose} backdrop="static">
                    <Modal.Header>
                        <Modal.Title>
                            Edit Student
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <UpdateSuperAgent SuperAgent={superAgent} selectedAgentId={selectedAgentId} handleClose={handleClose} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div >
        </>
    );
};

export default SuperAgent;
