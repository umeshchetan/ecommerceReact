// Adding items to cart
export const Add = (items) =>{
    return{
        type:"ADD_TO_CART",
        payload:items
    }
}

// Deleting items from cart
export const Del = (id) =>{
    return{
        type: "DELETE",
        payload:id
    }
}

export const Rmv_Dec = (items) =>{
    return{
        type: "RMV_DEC",
        payload: items
    }
}