import React, { useState, useEffect } from 'react';
import { CustomerCard } from './CustomerCard';
import { getAllCustomers, deleteCustomer } from '../../modules/CustomerManager';
import { useHistory } from 'react-router';

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    const history = useHistory()

    const getCustomers = () => {
        getAllCustomers().then(response => {
            setCustomers(response)
        })
    }

    const handleDeleteCustomer = id => {
        deleteCustomer(id)
            .then(() => getAllCustomers().then(setCustomers))
    }

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {history.push("/customers/create")}}>
                    Add Customer
                </button>
            </section>

            <div className="container-cards">
                {customers.map(customer => <CustomerCard
                    key={customer.id}
                    customer={customer}
                    handleDeleteCustomer={handleDeleteCustomer} />)}
            </div>

        </>
    )
}