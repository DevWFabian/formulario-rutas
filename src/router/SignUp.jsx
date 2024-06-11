import FormExample from "../components/Form"
import InputInvoice from "../components/Input";
import object_props_SignUp_input from "../data/props-signup-input.json"
import { Card,Container,Row } from "react-bootstrap";
import logo from "../assets/logo_tutoria.png"
import styles from "./css/LogIn.module.css"

const SignUp =()=>{
  return (
    <Container className={styles.loginBackground}>
      <Row className="m-5" lg={1}>
      <Card style={{width:"30rem"}}>
        <Card.Body>
          <Card.Img variant="top" src={logo}/>
          <FormExample nameButton="Registrarse">
            <InputInvoice object={object_props_SignUp_input}columns={2}></InputInvoice>
          </FormExample>
        </Card.Body>
      </Card>
      </Row>
    </Container>
  )
}
export default SignUp;