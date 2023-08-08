const initialState = {
    count: 0,
    data:[]
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Increment":
            return {
                ...state, count: state.count + 1
            }
        case "Decrement":
                return {
                    ...state, count: state.count - 1
                }
        case "GetProducts":
            return{
                ...state, data : action.payload
            }
        default:
                   return state;
}
}
export default Reducer;