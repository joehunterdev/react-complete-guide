import React, { useContext, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../../store/cart-context'
import './HeaderCartButton.css'

// function usePrevious(value) {
//     const ref = useRef();
//     useEffect(() => {
//       ref.current = value;
//     });
//     return ref.current;
//   }
const HeaderCartButton = (props) => {

    let [animation, setAnimation] = useState(false)

    const cartItems = useContext(CartContext);
    // const cartItemsRef = useRef(useContext(CartContext));

    const totalItems = cartItems.items.reduce((total, item) => total + item.amount, 0)
    // console.log(cartItems)

    const animateClass = `btn ${animation ? "btn btn-primary" : 'btn btn-warning'}`;
    const isShake = `${animation ? "" : 'shake'}`;

    useEffect(() => {

        setAnimation(false)

        if (cartItems === 0) {
            setAnimation(false)
            return
        }

        const timer = setTimeout(function () {

            setAnimation(true)

        }, 200);


        return () => {
            clearTimeout(timer);
        }


    }, [cartItems]);

 

    return (
        <span className={isShake}>
            <button type="button" className={animateClass} onClick={props.onClick}>
            <FontAwesomeIcon icon={faShoppingCart}  />
            <span className='mb-4'> {totalItems > 0 && totalItems + " Items"} </span>
        </button>
        </span>
    )
}

export default HeaderCartButton

