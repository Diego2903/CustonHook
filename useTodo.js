import { useEffect, useReducer} from "react"
import { todoReducer } from "../08-useReduce/todoReducer"

const initialState = [

];


const init = () => {

    return JSON.parse(localStorage.getItem("todos")) || [];

}


export const useTodo = () => {
    // todos  : Tareas por realizar
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)
  

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));


    }, [todos])


    const handleNewTodo = (todo) => {

        const action = {
            type: "[TODO] add todo",
            payload: todo,
        }


        dispatch(action);

    }
    const handleDeleteTodo = (id) => {

        dispatch({
            type: "[TODO] Remove todo",
            payload: id
        }

        )

    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: "[TODO] Toggle todo",
            payload: id
        }
        )
    }
    
    


    return {

        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount : todos.length,
        pendingTodosCount : todos.filter( todo => !todo.done).length,
    }
}