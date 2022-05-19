import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <>
      <label htmlFor='contactPicker'>Select a Contact</label>
      <select name='contactPicker' onChange={onChange}>
        <option defaultValue='none'>none</option>
        {contacts.map((con, i) => <option value={con.name} key={i}>{con.name}</option>) }
      </select>
    </>
  );
};
