'use client'

import { useState, useEffect } from "react";

const ContactItem1 = ({contact}) => {

    return (
        <div>
            <h1>{contact.name}</h1>
            <div>{contact.age}</div>
        </div>
    )

}

const ContactItem2 = ({contact}) => {

    return (
        <div>
            <h5>{contact.name}</h5>
            <div>{contact.age}</div>
        </div>
    )

}

const ContactList = ({view}) => {

    const [contacts, setContacts] = useState([])

    useEffect( () => {

        fetch('/api/contact').then(response => response.json()).then( (contacts) => {
           
            setContacts(contacts)
        } )

    }, [setContacts])
    
    return (
        <div>
            {contacts.map( (contact, index) => {

                return view === 'list' ? <ContactItem1 contact={contact} key={index} /> : <ContactItem2 contact={contact} key={index} />

            })}
        </div>
    )
}

export default ContactList