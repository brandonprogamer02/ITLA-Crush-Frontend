import { User, UserActions, UserActionsEnum } from
   './UserTypes'

const initialState: User = {
   firstname:'',
   lastname: '',
   username: '',
   _id: '',
   password: ''
}

export default function UserReducer(state = initialState, action: UserActions) {

   const { INSERT_USER_STARTED,
      INSERT_USER_SUCCESS

   } = UserActionsEnum
   switch (action.type) {
      case INSERT_USER_STARTED:
         return state

      case INSERT_USER_SUCCESS:
         return action.payload

      default: 
         return state
   }

}