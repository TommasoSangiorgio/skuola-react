import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Users() {
    const users = [{
        dataField: 'id',
        text: 'Product ID',
        sort: true
    }, {
        dataField: 'name',
        text: 'Product Name',
        sort: true
    }, {
        dataField: 'price',
        text: 'Product Price'
    }];

    return (
        <div className="Users">
            <BootstrapTable keyField='id' data={products} columns={columns} />
        </div>
    );
}

export default Users;
