import { useReducer, useState } from "react"

const useInput = (validateInput) => {
    const initialInputState = {value:'',isTouch:false}
    const inputStateReducer = (state,action) => {
        if(action.type === 'INPUT'){
            return {value:action.value,isTouch:state.isTouch}
        }
        else if(action.type === 'TOUCH'){
            return {isTouch:action.value,value:state.value}
        }
        else if(action.type === 'RESTE'){
            return initialInputState
        }
        return initialInputState
    }
    const [inputState,dispatch] = useReducer(initialInputState,inputStateReducer)
    // const [input,setInput] = useState('')
    // const [inputTouch,setInputTouch] = useState(false)
    const inputIsValid = validateInput(inputState.value)
    const inputIsInValid = !inputIsValid && inputState.isTouch

    const changeHandler = (event) => {
        dispatch({type:'INPUT',value:event.target.value})
        // setInput(event.target.value)
    }

    const blurHandler = (event) => {
        dispatch({type:'TOUCH',value:true})
        // setInputTouch(true)
    }

    const reset = () => {
        dispatch({type:'RESET'})
        // setInput('')
        // setInputTouch(false)
    }

   return {input:inputState.value,inputIsValid,inputIsInValid,changeHandler,blurHandler,reset}
}
export default useInput