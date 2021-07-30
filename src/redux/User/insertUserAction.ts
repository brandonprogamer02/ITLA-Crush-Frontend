import {
     User, UserActionsEnum, UserDispatch,
     InsertUserActionSuccess, InsertUserActionStarted,
} from "../User/UserTypes"
// import { insertUser } from '../../service'
import { State } from "../storeTypes"


const insertUserAction = (user: User) => (dispatch: UserDispatch, getState: State) => {

     function onStart(): InsertUserActionStarted {
          return {
               type: UserActionsEnum.INSERT_USER_STARTED,
               payload: null
          }
     }

     function onSuccess(user: User): InsertUserActionSuccess {
          return {
               type: UserActionsEnum.INSERT_USER_SUCCESS,
               payload: user
          }
     }

     dispatch(onStart())
     dispatch(onSuccess(user))

}
export default insertUserAction
