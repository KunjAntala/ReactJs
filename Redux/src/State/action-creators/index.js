import { type } from "@testing-library/user-event/dist/type"

export const depositMoney = (amount) => {
      return (dispatch) =>{

            dispatch({
            type:'deposit',
            payload : amount
      })
      }

}

export const WithdrawMoney = (amount) => {
      console.log(amount);
      
      return (dispatch) =>{

            dispatch({
            type:'withdraw',
            payload : amount
      })
      }
      
}