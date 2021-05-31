import React, { useState } from 'react';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';

function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submitUser = () => handleClose();


    const anno = (new Date()).getFullYear();
    const anni = Array.from(new Array(90), (val, index) => anno - index);
    const giorni = Array.from(new Array(31), (val, index) => index + 1);
    const mesi = Array.from(new Array(12), (val, index) => index + 1);
    const date = {
        giorni: giorni,
        mesi: mesi,
        anni: anni
    }



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
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Nome"
                                    aria-label="Nome"
                                    id="nome"
                                    aria-describedby="basic-addon1"
                                />
                                <FormControl
                                    placeholder="Cognome"
                                    aria-label="Cognome"
                                    id="cognome"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <label htmlFor="data">Data di nascita</label>
                            <InputGroup id="data" className="mb-3">
                                <FormControl className="form-control" id="giorno" as="select" custom>
                                    <option value="" disabled="disabled" selected>Giorno</option>
                                    {date.giorni.map(giorno => (
                                        <option>{giorno}</option>
                                    ))}
                                </FormControl>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>/</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="mese" className="form-control" as="select" custom>
                                    <option value="" disabled="disabled" selected>Mese</option>
                                    {date.mesi.map(mese => (
                                        <option>{mese}</option>
                                    ))}
                                </FormControl>
                                <InputGroup.Append>
                                    <InputGroup.Text>/</InputGroup.Text>
                                </InputGroup.Append>
                                <FormControl id="anno" className="form-control" as="select" custom>
                                    <option value="" disabled="disabled" selected>Anno</option>
                                    {date.anni.map(anno => (
                                        <option>{anno}</option>
                                    ))}
                                </FormControl>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Email"
                                    aria-label="email"
                                    aria-describedby="email"
                                    id="email"
                                    type="email"
                                />
                            </InputGroup>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={submitUser} variant="secondary">Annulla</Button>
                            <Button onClick={handleClose} variant="primary">Aggiungi utente</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </header>
        </div >
    );
}

export default Header;
