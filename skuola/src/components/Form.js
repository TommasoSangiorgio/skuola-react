import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

export class Form extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.state = {
            users: [{
                nome: '',
                cognome: '',
                email: '',
                dataNascita: ''
            }]
        };
    }

    inputCheck = (e) => {
        let filter = e.target.getAttribute('filter')
        e.target.value = e.target.value.replace(new RegExp(filter, 'g'), '')
        this.setState({ [e.target.name]: e.target.value })
    }

    submitCheck = () => {
        if (!this.state.nome || !this.state.cognome) {
            alert("È vuoto")
        } else if (!this.state.email.match(/@./g)) {
            alert("Formato email errato.")
        } else {
            const users = [];
            this.setState(prevState => ({
                arr: [...users, ...newArr]
            }));

            localStorage.setItem('', JSON.stringify(this.state));
        }
    }



    resetForm = () => {
        this.setState({
            nome: '',
            cognome: '',
            email: '',
            dataNascita: ''
        })
    }
    render() {
        // dynamic GG/MM/AAAA select
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
            <form id="userData" onSubmit={this.handleSubmit}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Nome"
                        aria-label="Nome"
                        id="nome"
                        name="nome"
                        aria-describedby="basic-addon1"
                        onChange={this.inputCheck}
                    />
                    <FormControl
                        placeholder="Cognome"
                        aria-label="Cognome"
                        id="cognome"
                        name="cognome"
                        aria-describedby="basic-addon1"
                        onChange={this.inputCheck}
                    />
                </InputGroup>
                <label htmlFor="data">Data di nascita</label>
                <InputGroup id="data" className="mb-3">
                    <FormControl className="form-control" name="giorno" id="giorno" as="select" custom onChange={this.inputCheck}>
                        <option value="" disabled="disabled" selected>Giorno</option>
                        {date.giorni.map(giorno => (
                            <option value={giorno}>{giorno}</option>
                        ))}
                    </FormControl>
                    <InputGroup.Prepend>
                        <InputGroup.Text>/</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl name="mese" id="mese" className="form-control" as="select" custom onChange={this.inputCheck}>
                        <option value="" disabled="disabled" selected>Mese</option>
                        {date.mesi.map(mese => (
                            <option value={mese}>{mese}</option>
                        ))}
                    </FormControl>
                    <InputGroup.Append>
                        <InputGroup.Text>/</InputGroup.Text>
                    </InputGroup.Append>
                    <FormControl id="anno" name="anno" className="form-control" as="select" custom onChange={this.inputCheck}>
                        <option value="" disabled="disabled" selected>Anno</option>
                        {date.anni.map(anno => (
                            <option value={anno}>{anno}</option>
                        ))}
                    </FormControl>
                </InputGroup >
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Email"
                        name="email"
                        aria-label="email"
                        aria-describedby="email"
                        id="email"
                        type="email"
                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                    />
                </InputGroup>
                <Button type="submit" variant="primary" onClick={this.submitCheck}> Aggiungi utente</Button>
            </form >
        )
    }

}

export default Form;