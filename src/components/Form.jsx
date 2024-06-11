import {React, useState} from 'react';
import {Button,Form,Row} from 'react-bootstrap';
import InputInvoice from './Input'; 
import {  useNavigate} from 'react-router-dom'
// import validateHandler from "../services/validateFields"
// import {GetDataObject} from '../services/getData';


function FormExample({children,nameButton}) {
  const navigate = useNavigate()
  const handleSubmit=async(event)=>{
    event.preventDefault()
    const {elements} = event.currentTarget;
    const inputs = Array.from(elements).filter(item => item.tagName === 'INPUT');
    alert(`Bienvenido: ${inputs[0].value}`,null)
    navigate("/dashboard")
  }
  return (
    <Form noValidate validated={false} onSubmit={handleSubmit} >
      {children}
      <Row lg="1" className='justify-content-md-center'>
        <Row>
          <Button type="submit" className="mb-3" variant="primary">{nameButton}</Button>
        </Row>
      </Row>
    </Form>
  );
}

export default FormExample;