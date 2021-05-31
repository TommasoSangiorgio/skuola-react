import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <p>Campi</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary">Chiudi</Button>
                            <Button variant="primary">Aggiungi utente</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </header>
        </div>
    );
}

export default Header;
