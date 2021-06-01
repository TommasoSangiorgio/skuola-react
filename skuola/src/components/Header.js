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
            </header>
        </div >
    );
}

export default Header;
