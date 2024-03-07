    const initState={
        filters:{
            search:'',
            status:'All',
            priority :[],
        },
        todoList:[]
    }

    const rootReducer = (state = initState ,action)=>{
        console.log("action",action)
        switch (action.type){
            case 'todoList/addTodo':
                return {...state,
                    todoList:[...state.todoList,
                        action.payload
                    ]}
            case 'filters/searchFilterChange':
                let result ={
                    ...state,
                    filters: {
                        ...state.filters,
                        search: action.payload,
                    },
                }
                console.log("result",result);
                return result;
            default:
                return state;

        }
    }
    export default rootReducer;