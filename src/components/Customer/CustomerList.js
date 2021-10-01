import React, { useState, useEffect } from 'react';
import { CustomerCard } from './CustomerCard';
import { getAllCustomers, deleteCustomer } from '../../modules/CustomerManager';

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        getAllCustomers().then(response => {
            setCustomers(response)
        })
    }

    const handleDeleteCustomer = id => {
        deleteCustomer(id)
        .then(() => getAllCustomers().then(setCustomers))
    }

    useEffect(()=> {
        getCustomers()
    }, [])

    return (
        <div className="container-cards">
            {customers.map(customer => <CustomerCard 
            key={customer.id} 
            customer={customer}
            handleDeleteCustomer={handleDeleteCustomer}/>)}
        </div>
    )
}