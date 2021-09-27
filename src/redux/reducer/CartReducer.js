const initState = {
products:[]
}

const CartReducer = (state = initState, action) => {
    switch(action.type){

        case 'ADD_TO_CART':
            return {
                ...state,
                products: [...state.products, action.payload] 
            }
        default: 
        return {
            ...state    
         }
    }

}
export default CartReducer;