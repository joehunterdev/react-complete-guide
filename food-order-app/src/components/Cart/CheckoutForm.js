import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faEuroSign, faMoneyBill, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";

import { Button, Form, ListGroup } from "react-bootstrap"
const CheckoutForm = ({ cartItems, totalAmount }) => {

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event)
    }

    return (
       
        <Form className="row mt-3">
            <Form.Group controlId="name" className="col-lg-6 col-md-6 col-sm-6 pb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Your name" />
                <Form.Text className="text-muted d-none">
                    Warning
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="mobile" className="col-lg-6 col-md-6 col-sm-6  pb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="mobile" placeholder="600900900" />
                <Form.Text className="text-muted d-none">
                    Warning
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="addressOne" className="col-lg-12 col-md-12 col-sm-12  pb-3">
                <Form.Label>Address Line 1:</Form.Label>
                <Form.Control type="addressOne" placeholder="600900900" />
                <Form.Text className="text-muted d-none">
                    Warning
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="addressTwo" className="col-lg-12 col-md-12 col-sm-12  pb-3">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control type="addressTwo" placeholder="600900900" />
                <Form.Text className="text-muted d-none">
                    Warning
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="order-info">
                <Form.Label>Order Summary:
                </Form.Label>
                <Form.Control type="hidden" name="orderItems" value={[]} />
                <ListGroup className="mb-4">
                    {cartItems.map((cartItem) => {
                        return <ListGroup.Item>{cartItem.name} - x{cartItem.amount}</ListGroup.Item>
                    })}
                </ListGroup>
            </Form.Group>
            <Form.Group className="col-lg-12 col-md-12 col-sm-12 pb-3 pull-right">
                <h5 className="text-default" >Total: <FontAwesomeIcon icon={faMoneyBillAlt} color="gold"></FontAwesomeIcon> {totalAmount.toFixed(2)} </h5>
            </Form.Group>
            
            <Form.Group className="col-lg-12 col-md-12 col-sm-12 pb-3">
                <Button variant="primary col-lg-12 col-md-12 col-sm-12 pb-3" onClick={submitHandler} type="submit">Submit</Button>
            </Form.Group>
        </Form>
    )

}

export default CheckoutForm