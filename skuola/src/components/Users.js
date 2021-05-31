import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

function Users() {
    // utenti 
    const users = [{
        id: '1112',
        nome: 'Paolo',
        cognome: 'Rossi',
        email: 'Paolo@it.com',
        dataNascita: '21/06/1999'

    },
    {
        id: '4333',
        nome: 'Fabiola',
        cognome: 'Carini',
        email: 'fabiola@test.com',
        dataNascita: '22/06/1999'

    },
    {
        id: '1344',
        nome: 'Anna',
        cognome: 'Verdi',
        email: 'Anna@it.com',
        dataNascita: '23/12/1995'

    },
    {
        id: '1322',
        nome: 'Giovani',
        cognome: 'Antoni',
        email: 'antoni@it.com',
        dataNascita: '28/10/1943'

    }];

    // colonne della tabella
    const columns = [{
        dataField: 'id',
        text: 'Product ID',
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
            <BootstrapTable keyField='id' data={users} columns={columns} />
        </div>
    );
}

export default Users;
