const Initial_State = {
    Cart_Data: []
}

export const cart_reducer = (state = Initial_State, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const IndexofItem = state.Cart_Data.findIndex((e) => e.id === action.payload.id);

            if (IndexofItem >= 0) {
                state.Cart_Data[IndexofItem].qnty += 1;
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    Cart_Data: [...state.Cart_Data, temp]
                }
            }

        case "DELETE":
            const data = state.Cart_Data.filter((elem) => elem.id !== action.payload)
            return {
                ...state,
                Cart_Data: data
            }

        case "RMV_DEC":
            const Indexitem_Dec = state.Cart_Data.findIndex((e) => e.id === action.payload.id)

            if (state.Cart_Data[Indexitem_Dec].qnty >= 1) {
                const dltItem = state.Cart_Data[Indexitem_Dec].qnty -= 1;
                return {
                    ...state,
                    Cart_Data: [...state.Cart_Data]
                }
            } else if (state.Cart_Data[Indexitem_Dec].qnty === 1) {
                const data = state.Cart_Data.filter((elem) => elem.id !== action.payload.id)
                return {
                    ...state,
                    Cart_Data: data
                }
            }
        default:
            return state;
    }
}
