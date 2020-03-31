
export default function reducer(state={},action){
    switch(action.type){
        case "HITTWO":
            return{
                ...state,
                userA:'Hello A',
                userB:'Hello B',
            }
        case "HITONE":
            return{
                ...state,
                userB:'Hello B only'
            }
            default:
                return state;   
    }

}