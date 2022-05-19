import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Full Name</label>
      <input
        placeholder='First Last'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        name='name'
        id='nameInput'
      />
      <label htmlFor='phone'>Phone Number xxx-xxx-xxxx</label>
      <input
        placeholder='xxx-xxx-xxxx'
        type='text'
        value={phone}
        pattern='^[2-9]\d{2}-\d{3}-\d{4}$'
        onChange={(e) => setPhone(e.target.value)}
        name='phone'
        id='phoneInput'
      />
      <label htmlFor='email'>Email Address</label>
      <input
        placeholder='xxxxx@email.com'
        type='text'
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        name='email'
        id='emailInput'
      />
      <button type='submit'>Add Contact</button>
    </form>
  );
};
