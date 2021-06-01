import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from './Form';

function Header() {

    // modal 

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //localStorage.clear();
    return (
        <div className="Header">
            <header className="App-header">
                <div className="container">
                    <div className="row">
                    <div className="col-9" style={{ padding: "0px" }}>
                        <h1>Gestione Utenti</h1>
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <Button onClick={handleShow}>Aggiungi utente +</Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Aggiungi un utente</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Form />
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button onClick={handleClose} variant="secondary">Annulla</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
                </div>
            </header>
        </div >
    );
}

export default Header;
