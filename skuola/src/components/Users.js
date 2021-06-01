import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from 'react-bootstrap';

function Users() {
    // utenti 
    const users = JSON.parse(localStorage.getItem('users'));

    // colonne della tabella
    const columns = [{
        dataField: 'id',
        text: 'ID',
        sort: true
    }, {
        dataField: 'nome',
        text: 'Nome',
        sort: true
    }, {
        dataField: 'cognome',
        text: 'Cognome',
        sort: true
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: false
    },
    {
        dataField: 'dataNascita',
        text: 'Data di nascita',
        // this function sorts correctly by dates
        sortFunc: (a, b, order) => {
            if (order === "asc") {
                return a.localeCompare(
                    b,
                    navigator.languages[0] || navigator.language,
                    { numeric: true, ignorePunctuation: true }
                );
            } else if (order === "desc") {
                return b.localeCompare(
                    a,
                    navigator.languages[0] || navigator.language,
                    { numeric: true, ignorePunctuation: true }
                );
            }
        },
        sort: true
    }];
    return (
        <div className="Users">
            {users ? (
                <div class="col-12 table-container">
                    <span>{users.length} { users.length > 1 ? 'utenti' : 'utente' }</span>
                    <br/>
                    <BootstrapTable keyField='id' data={users} columns={columns} />
                </div>
            ) : (
                <div className="row">
                    <div className="col-12 text-center no-users">
                        Aggiungi un utente.
                    </div>
                </div>
            )}

        </div >
    );
}

export default Users;
