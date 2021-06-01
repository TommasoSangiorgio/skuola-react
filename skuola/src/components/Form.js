import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

export class Form extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.state = {};
    }

    inputCheck = (e) => {
        let filter = e.target.getAttribute('filter')
        e.target.value = e.target.value.replace(new RegExp(filter, 'g'), '')
        this.setState({ [e.target.name]: e.target.value })
    }

    isDate18orMoreYearsOld(day, month, year) {
        return new Date(year + 18, month - 1, day) <= new Date();
    }

    submitCheck = (e) => {

        const users = new Array;
        const usersStorage = JSON.parse(localStorage.getItem('users'));
        var checkEmail = '';
        if (usersStorage) {
            usersStorage.map((data) => (
                users.push(data)
            ));
            checkEmail = users.filter((e) => e.email === this.state.email);
        }

        const nascita = this.state.giorno + '/' + this.state.mese + '/' + this.state.anno;

        var from = nascita.split("/");
        var birthdateTimeStamp = new Date(from[2], from[1] - 1, from[0]);
        var cur = new Date();
        var diff = cur - birthdateTimeStamp;
        // This is the difference in milliseconds
        var currentAge = Math.floor(diff / 31557600000);
        // Divide by 1000*60*60*24*365.25

        if (!this.state.nome || !this.state.cognome) {
            alert("È vuoto");
            e.preventDefault();
        } else if (!this.state.email.match(/@./g)) {
            alert("Formato email errato.");
            e.preventDefault();
        } else if (checkEmail.length != 0) {
            alert('l\'email esiste già');
            e.preventDefault();
        } else if (currentAge < 18) {
            alert('Non hai 18 anni');
            e.preventDefault();
        } else {
            users.push({
                id: users.length + 1,
                nome: this.state.nome,
                cognome: this.state.cognome,
                dataNascita: nascita,
                email: this.state.email
            });
            localStorage.setItem('users', JSON.stringify(users));
        }
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