import CartActionTypes from './cart.types';

const INITIAL_STATE ={
    hidden:true,
    cartItems:[]
};

const cartReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                // return opposite of the state when toggled
                hidden: !state.hidden 
            };

        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:[...state.cartItems,action.payload]
            };
            default:
                return state;
    }
}


export default cartReducer;