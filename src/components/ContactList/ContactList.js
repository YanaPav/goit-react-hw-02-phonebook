import React from "react";

export const ContactList = ({contacts}) => {
    return (
        <ul>
            {contacts.map(({name, number, id}) => {
                return <li key={id}>{name}: {number}</li>
            })}
        </ul>
    )
}
