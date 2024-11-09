import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { removeCart } from "../../Redux/features/cartSlice";

export const Cart = () => {


    const dispatch=useDispatch();
    const cartData = useSelector((state: RootState) => state.cart);


    const removeFromCart = (id: number) => {
      dispatch(removeCart(id));
    }

    if(cartData.length===0){
        return(
            <div style={{textAlign:'center'}}>your cart is empty</div>
        )
    }

    const cartProducts = cartData.map((p: any) =>
        <Row key={p.id}>
            <Col  style={{ margin: '1rem' }}>
                <Card style={{ width: 'auto' }}>
                    <Card.Img variant="top" style={{ width: '8rem', height: '10rem', margin: 'auto' }} src={p.image} />
                    <Card.Body>
                        <Card.Title>{p.title}</Card.Title>
                        <Card.Text style={{ height: '5rem', overflow: 'hidden' }}>
                            {p.description}
                        </Card.Text>
                        <Button  onClick={() => removeFromCart(p.id)} variant="danger">Remove</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>);


    return (


        <Container fluid="md">

            {cartProducts}

        </Container>


    )
}

