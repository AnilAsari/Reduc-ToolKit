
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getProducts } from '../../Redux/features/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StatusCode } from '../../utils/enum/enumApiStatus';
import { addCart } from '../../Redux/features/cartSlice';




const Product = () => {
    const dispatch = useDispatch<any>();
    const { data,status } = useSelector((state: RootState) => state.product)

    useEffect(() => {
        dispatch(getProducts());
    },[])


    const addToCart=(product:any)=>{
       dispatch(addCart(product));
    }



    if(status===StatusCode.Loading){
        return(<div><p>Loading......</p></div>)
    }

    const productGroup = data.map((p: any) =>
        <Col key={p.id} style={{ margin: '1rem' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ width: '8rem', height: '10rem', margin: 'auto' }} src={p.image} />
                <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text style={{ height: '5rem', overflow: 'hidden' }}>
                        {p.description}
                    </Card.Text>
                    <Button onClick={()=>addToCart(p)}  variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
        </Col>);


    return (


        <Container>
            <Row>
                {productGroup}
            </Row>
        </Container>


    )
}


export default Product




