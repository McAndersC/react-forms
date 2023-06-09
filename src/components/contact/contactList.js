'use client'

import { useState, useEffect } from "react";


const ContactItem1 = ({contact}) => {

    return (
        <div>
            <h2>{contact.name}</h2>
            <div style={{color: 'red'}}>{contact.age}</div>
        </div>
    )

}

const ContactItem2 = ({contact}) => {

    return (
        <div>
            <h3>{contact.name}</h3>
            <div>{contact.age}</div>
        </div>
    )

}

const ContactList = ({view}) => {

    const [contacts, setContacts] = useState([])
    const [listViewMode, setListViewMode] = useState(view)

    useEffect( () => {

        fetch('/api/contact').then(response => response.json()).then( (result) => {
           
            setContacts(result)
        } )

    }, [setContacts])

    const switchView = () => {

        if(listViewMode === 'list') {

            setListViewMode('card')

        } 
        else
        {
            setListViewMode('list')
        }

    }
    
    return (
        <div>
            <h1 onClick={ () => switchView()}>TEST  {listViewMode}</h1>
            {

                contacts.map( (contact, index) => {

                    
                    return (
                        listViewMode === 'list' ? <ContactItem1 key={index} contact={contact} /> : <ContactItem2 key={index} contact={contact} />
                    )
                    
                    // return listViewMode === 'list' ? <ContactItem1 contact={contact} key={index} /> : <ContactItem2 contact={contact} key={index} />

                })
            
            }
        </div>
    )
}

export default ContactList