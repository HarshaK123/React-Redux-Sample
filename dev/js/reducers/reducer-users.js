const initialState = 
    [
        {
            id: 1,
            first: "John",
            last: "Langer",
            age: 71,
            description: "developer"
        },
        {
            id: 2,
            first: "Dan",
            last: "Beso",
            age: 55,
            description: "Driver"
        },
        {
            id: 31,
            first: "Vanchika",
            last: "Koito",
            age: 38,
            description: "Tech"
        }
    ];


export default function(state=initialState, action) {
    switch(action.type){
        case "USER_DELETED":
            return state.filter(e => e !== action.payload);
            break;
        case "USER_UNDELETED":
            return [ ...state, action.payload];
            break;
    }

    return state;    
}