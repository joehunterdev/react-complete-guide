import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faEuroSign, faMoneyBill, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useInput from "../../hooks/use-input";
import { Button, Form, ListGroup } from "react-bootstrap"
import useHttp from "../../hooks/use-http";

const CheckoutForm = ({ cartItems, totalAmount }) => {

    const [isSubmited, setIsSubmited] = useState(false)
    // const { reset: reset } = useInput(/^([^0-9]*)$/i)
    const { isLoading, error, sendRequest: processOrder } = useHttp();   // destructure as object
    const [orderData, setOrderData] = useState({})

    const {
        value: fullName,
        isValid: fullNameIsValid,
        isTouched: fullNameIsTouched,
        valueChangeHandler: fullNameChangeHandler,
        valueBlurHandler: fullNameBlurHandler,
        reset: resetFullName } = useInput(/^([^0-9]*)$/i)

    //= useInput(value => value.trim() !== '')
    const {
        value: mobile,
        isValid: mobileIsValid,
        isTouched: mobileIsTouched,
        valueChangeHandler: mobileChangeHandler,
        valueBlurHandler: mobileBlurHandler,
        reset: resetMobile } = useInput(/^(\+\d{1,3}[- ]?)?\d{10}$/)

    const {
        value: addressOne,
        isValid: addressOneIsValid,
        isTouched: addressOneIsTouched,
        valueChangeHandler: addressOneChangeHandler,
        valueBlurHandler: addressOneBlurHandler,
        reset: resetAddressOne } = useInput(/^[#.0-9a-zA-Z\s,-]+$/)

    const {
        value: addressTwo,
        isValid: addressTwoIsValid,
        isTouched: addressTwoIsTouched,
        valueChangeHandler: addressTwoChangeHandler,
        valueBlurHandler: addressTwoBlurHandler,
        reset: resetAddressTwo } = useInput(/^[#.0-9a-zA-Z\s,-]+$/)

    // const {
    //     value: email,
    //     isValid: emailIsValid,
    //     isTouched: emailIsTouched,
    //     valueChangeHandler: emailChangeHandler,
    //     valueBlurHandler: emailBlurHandler,
    //     reset:resetEmail } = useInput(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)


    let formIsValid = false

    if (fullNameIsValid && addressOneIsValid && mobileIsValid) {

        formIsValid = true

    }


    const submitHandler = (event) => {
        event.preventDefault();

        if (!fullNameIsValid || !addressOneIsValid || !mobileIsValid) {

            formIsValid = false

        }

        if (formIsValid) {
            formIsValid = true;
            let initProcessOrder = [{
                name: fullName,
                mobile: mobile,
                addressOne: addressOne,
                addressTwo: addressTwo,
                order: [{
                    total: totalAmount,
                    cartItems: orderData
                }]
            
            }]
            processOrderHandler(initProcessOrder)
            setIsSubmited(true);
 

        }

        resetFullName()
        resetMobile()
        resetAddressOne()
        resetAddressTwo()
    }




    // const processOrder = (taskText, taskData) => {
    //     const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    //     const createdTask = { id: generatedId, text: taskText };

    //     props.onAddTask(createdTask);
    // };

    const processOrderHandler = async (orderData) => {
        processOrder(
            {
                url: process.env.REACT_APP_FIREBASE_ORDERS_URL,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: orderData,
            },
            processOrder.bind(null, orderData) // here we are passing to an internal function task text so it doesnt get lost
        );
    };


    // className="text-muted d-none"
    return (

        <Form className="row mt-3">
            <Form.Group controlId="fullName" className="col-lg-6 col-md-6 col-sm-6 pb-3" >
                <Form.Label>Name {fullNameIsTouched}</Form.Label>
                <Form.Control type="text" placeholder="You Fullname"
                    onBlur={fullNameBlurHandler}
                    value={fullName}
                    onChange={fullNameChangeHandler}
                    className={!fullNameIsValid && fullNameIsTouched ? 'is-invalid' : fullNameIsTouched && 'is-valid'} />

            </Form.Group>
            <Form.Group controlId="mobile" className="col-lg-6 col-md-6 col-sm-6  pb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="numner" placeholder="600900900" onBlur={mobileBlurHandler}
                    onChange={mobileChangeHandler}
                    value={mobile}
                    className={!mobileIsValid && mobileIsTouched ? 'is-invalid' : mobileIsTouched && 'is-valid'} />

            </Form.Group>
            <Form.Group controlId="addressOne" className="col-lg-12 col-md-12 col-sm-12  pb-3">
                <Form.Label>Address Line 1:</Form.Label>
                <Form.Control type="text" placeholder="30 FleetStreet" onBlur={addressOneBlurHandler}
                    onChange={addressOneChangeHandler}
                    value={addressOne}
                    className={!addressOneIsValid && addressOneIsTouched ? 'is-invalid' : addressOneIsTouched && 'is-valid'} />

            </Form.Group>
            <Form.Group controlId="addressTwo" className="col-lg-12 col-md-12 col-sm-12  pb-3">
                <Form.Label>Address Line 2:</Form.Label>
                <Form.Control type="text" placeholder="London Uk" onBlur={addressTwoBlurHandler}
                    onChange={addressTwoChangeHandler}
                    value={addressTwo}
                    className={!addressTwoIsValid && addressTwoIsTouched ? 'is-invalid' : addressTwoIsTouched && 'is-valid'} />

            </Form.Group>
            <Form.Group controlId="orderInfo" className="bg-light bg-gradient p-3 rounded">
                <Form.Label>Order Summary:
                </Form.Label>
                <Form.Control type="hidden" name="orderData" />
                <ListGroup className="mb-4">
                    {cartItems.map((cartItem) => {
                        return <ListGroup.Item key={cartItem.id} className="list-group-item">{cartItem.name} -   <span className="badge float-end text-bg-info text-white">x{cartItem.amount}</span></ListGroup.Item>
                    })}
                </ListGroup>
            </Form.Group>
            <Form.Group className="col-lg-12 col-md-12 col-sm-12 pb-3 pull-right bg-light bg-gradient">
                <h5 className="text-default" >Total: <FontAwesomeIcon icon={faMoneyBillAlt} color="gold"></FontAwesomeIcon> {totalAmount.toFixed(2)} </h5>
            </Form.Group>

            <Form.Group className="col-lg-12 col-md-12 col-sm-12 pb-3 bg-light bg-gradient">
                <Button variant="primary col-lg-12 col-md-12 col-sm-12 pb-3" onClick={submitHandler} type="submit">Submit</Button>
            </Form.Group>
        </Form>
    )

}

export default CheckoutForm