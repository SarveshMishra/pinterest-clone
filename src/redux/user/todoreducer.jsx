const initialState={
    list:[]
}
const todoreducer = (state=initialState,action) => {
  switch(action.type)
  {
      case "ADD_TODO":
         const {id,data}=action.payload;
         return{
            ...state,
            list:[
                ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
         }

        case "DELETE_TODO":
            const newLIst=state.list.filter((elem)=>elem.id!==action.id)
            return{
                ...state,
                list:newLIst
             }

        case "REMOVE_TODO":
            return{
                ...state,
                list:[]
             }
        
     default: return state
  }
}

export default todoreducer