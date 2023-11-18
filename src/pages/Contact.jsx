import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleValidation = (e) => {
    if (e.target.name === 'email') {
      if (!validateEmail(e.target.value)) setErrorMessage('Invalid Email');
      else setErrorMessage('');
    } else {
      if (!e.target.value.length) setErrorMessage('Required Field');
      else setErrorMessage('');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setName('');
    setMessage('');
    setErrorMessage('Email Sent');
  };

  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust the height as needed
  };

  const formContainerStyles = {
    width: '50%',
    maxWidth: '400px', // Adjust the max-width as needed
  };

  return (
    <div style={containerStyles}>
      <div style={formContainerStyles}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={name}
              onChange={handleInputChange}
              onBlur={handleValidation}
              type="text"
              placeholder="First and Last Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={email}
              onChange={handleInputChange}
              onBlur={handleValidation}
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message here...</Form.Label>
            <Form.Control
              name="message"
              value={message}
              onChange={handleInputChange}
              onBlur={handleValidation}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button onClick={handleFormSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    </div>
  );
}
