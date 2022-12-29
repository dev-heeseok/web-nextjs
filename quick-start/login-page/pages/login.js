import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// import { Button } from 'bootstrap';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("onClick Submit");

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify()
      })

    } catch(error) {
      console.error(error);
    }

  }

  const handleChangeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }
  const handleChangePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' placeholder='Enter email' onChange={handleChangeEmail} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' onChange={handleChangePassword} />
      </Form.Group>

      <Button type='submit'>Submit</Button>
    </Form>
  )
}
