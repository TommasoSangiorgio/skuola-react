import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

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
                <BootstrapTable keyField='id' data={users} columns={columns} />
            ) : (
                < div>Aggiungi un utente</div>
            )}

        </div >
    );
}

export default Users;
