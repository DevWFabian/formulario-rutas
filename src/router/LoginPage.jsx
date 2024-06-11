import React from "react";
import FormExample from "../components/Form"
import InputInvoice from "../components/Input";
import object_props_login_input from "../data/props-login-input.json"
import { Card,Container,Row } from "react-bootstrap";
import logo from "../assets/logo_tutoria.png"
import styles from "./css/LogIn.module.css"
const LogIn =()=>{
  return (
    <Container className={styles.loginBackground}>
      <Row className="m-5" lg={2}>
      <Card style={{width:"20rem"}}>
        <Card.Body>
          <Card.Img variant="top" src={logo}/>
          <FormExample nameButton="Ingresar">
            <InputInvoice object={object_props_login_input}columns={1}></InputInvoice>
          </FormExample>
        </Card.Body>
      </Card>
      </Row>
    </Container>
  )
}
export default LogIn;