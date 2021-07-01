export const usersReducer=(state=[],action)=>{
    if(action.type==="SAVE_USER"){
        return[...state,action.payload];
    }
    return state;
}