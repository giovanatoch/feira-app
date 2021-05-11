import React, {useState} from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';
 
const Legumes = () => {
  const [total, setTotal] = useState(0);

  const list = [
    {vegetable: 'Tomate 1kg', price: 5},
    {vegetable: 'Cebola 1kg', price: 6},
    {vegetable: 'Beterraba 1kg', price: 4},
    {vegetable: 'Pimentão 1kg', price: 9},
    {vegetable: 'Cenoura 1kg', price: 7},
  ]

  const ListRow = ({vegetable, price}) => {
    const onClick = () => {
      setTotal(price + total);
    }

    return(
      <tr>
        <td>{vegetable}</td>
        <td>R$ {price}</td>
        <td>
          <Button variant="outline-warning" onClick={onClick}>Adicionar</Button>
        </td>
      </tr>   
    )
  }

  return(
    <Row>
      <Col md={{span: 8, offset: 2}}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Legumes</th>
              <th>Preço</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {list.map((listinha) =>
              <ListRow vegetable={listinha.vegetable} price={listinha.price} />
            )}
          </tbody>
          <tr>
            <td colSpan={2}>
              Total:
            </td>
            <td>
              R$ {total}
            </td>
          </tr>
        </Table>
      </Col>
    </Row>
  )
}



export default Legumes;
