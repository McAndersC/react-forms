'use client'

import { useState, useEffect } from "react";


const Contacts = () => {

    const [contacts, setContacts] = useState([])

    useEffect( () => {

        fetch('/api/contact').then(response => response.json()).then( (contacts) => {
           
            setContacts(contacts)
        } )

    }, [setContacts])

    return (

    <div>
        <h1>CONTACTS</h1>
        {
            contacts.map( (contact, index) => {

                return (<div key={index}>{contact.name}</div>)

            })
        }

    </div>
    
    )


}

export default Contacts