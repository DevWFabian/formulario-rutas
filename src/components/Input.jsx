import {React} from "react";
import {Col,Form,Row} from 'react-bootstrap';

const InputInvoice =({object,columns})=>{
  if(object){
    object = Object.values(object)
    columns = columns === 0 ? 1: columns
    const row = object.reduce((result, item, index) => {
      if (index % columns === 0) result.push([]);
      result[result.length - 1].push(item);
      return result;
    }, []);
    return row.map((row,rowIndex)=>(
      <Row  lg={row.length >= 2 ?row.length:1} sm={1} key={rowIndex}>
        {
          row.map((field)=>(
            <Form.Group as={Col} className="mb-3" controlId={field.input.id} key={field.input.id}>
              {field.label?(<Form.Label >{field.label.text}</Form.Label>):""}
              <Form.Control
              name ={field.input.name}
              required
              type={field.input.type}
              placeholder={field.input.placeholder}
              />
            </Form.Group>
          ))
        }
      </Row>
    ))
  }
  
  
  
}
export default InputInvoice;