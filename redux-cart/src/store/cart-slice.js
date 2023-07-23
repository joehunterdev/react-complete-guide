import { createSlice } from '@reduxjs/toolkit'
import { uiActions } from './ui-slice';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {

        replaceCart(state, action) {
            // state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },

        updateCart(state, action) {

            //if no data return nothing
            if (Number.isNaN(action.payload)) return;

            const isItemInCart = state.items.find(
                (t) => t.id === action.payload.id
            );

            if (isItemInCart) {
                state.items = state.items.map((t) =>
                    t.id === action.payload.id
                        ? { ...t, quantity: t.quantity += action.payload.quantity }
                        : t
                );
            } else {
                state.items = [...state.items, { ...action.payload, quantity: 1 }];
            }
        },

        deleteFromCart: (state, action) => {
            if (Number.isNaN(action.payload)) return;
            state.items = state.items.filter(
                items => items.id !== action.payload.id
            );
        },

        deleteAllFromCart: (state, action) => {
            if (Number.isNaN(action.payload)) return;
            state.items = [];
        },
    },


});

//Thunk
//outside of slice
export const sendCartData = (cart) => {

    //recieves dispatch as an argrument
    return async (dispatch) => {
        //here we can now do things first ! 
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        )

        const sendRequest = async () => {
            const response = await fetch(
                process.env.REACT_APP_FIREBASE_PUT_URL,
                {
                    method: 'PUT',
                    body: JSON.stringify(cart),
                }
            );

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        };

        try {
            await sendRequest();

            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!',
                })
            );
        }
    };
}




export const cartActions = cartSlice.actions;

export default cartSlice.reducer

