
import { combineReducers, configureStore ,createSlice} from '@reduxjs/toolkit';

const initialState = {
    cart:[],
    products:[]

}

export const productSlice = createSlice({
    name:'product',
    initialState:initialState,
    reducers: {
        addProduct: (state,action) => {
            console.log(state.tasks)
            // console.log(action.payload, "==============payload")
            state.products.push(action.payload)
        },

        addProductToCart: (state,action) => {
            state.cart.push(action.payload)
        },
        removeProductFromCart: (state,action) => {
            state.cart = state.cart.filter ((product) => product.id !== action.payload.id)
        },

    }
})

export const productStore = configureStore({
    reducer: {
        product:productSlice.reducer
    }
})

export const {addProduct, removeProduct} = productSlice.actions