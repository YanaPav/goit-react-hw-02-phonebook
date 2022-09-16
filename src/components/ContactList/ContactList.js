import React from "react";

export const ContactList = ({contacts, handleClick}) => {
    return (
        <ul>
            {contacts.map(({name, number, id}) => {
                return <li key={id}>{name}: {number} <button type="button" onClick={() => handleClick(id)}>Delete</button></li>
            })}
        </ul>
    )
}
