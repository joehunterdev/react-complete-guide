import { createSlice } from '@reduxjs/toolkit'

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


export const cartActions = cartSlice.actions;

export default cartSlice.reducer

