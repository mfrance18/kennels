import React from "react"
import "./Customer.css"

export const CustomerCard = ({customer, handleDeleteCustomer}) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <address>
            <div>100 Infinity Way</div>
        </address>
        <button onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
    </section>
)