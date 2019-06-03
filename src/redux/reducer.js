const initState = {
    count:0
}

const reducer=(state=initState,action)=>{
       switch (action.type){
           case 'INCRECE':
               return {
                count:state.count-action.count
               }
            case 'DECRECE':
                return {
                    count:state.count+action.count
                }
            default:
                return initState   
       }
}


export default reducer;