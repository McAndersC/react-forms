'use client'

import ContactList from "@/components/contact/contactList"

const Page = () => {

    return (

        <div>
            <h1>CONTACTS</h1>
            <ContactList view={'list'}></ContactList>
            <ContactList view={'card'}></ContactList>
        </div>
    
    )


}

export default Page