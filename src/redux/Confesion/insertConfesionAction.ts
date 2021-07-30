import {
     Confesion, ConfesionActionsEnum, ConfesionDispatch,
     InsertConfesionActionSuccess, InsertConfesionActionStarted, NewConfesion
} from "./ConfesionTypes"
import { insertConfesion } from '../../service'
import { State } from "../storeTypes"
import populateConfesionAction from "./populateConfesionAction"


const insertConfesionAction = (Confesion: NewConfesion) => (dispatch: ConfesionDispatch, getState: State) => {

     function onStart(): InsertConfesionActionStarted {
          return {
               type: ConfesionActionsEnum.INSERT_CONFESION_STARTED,
               payload: null
          }
     }

     function onSuccess(Confesion: Confesion): InsertConfesionActionSuccess {
          return {
               type: ConfesionActionsEnum.INSERT_CONFESION_SUCCESS,
               payload: Confesion
          }
     }

     dispatch(onStart())

     insertConfesion(Confesion)
          .then(response1 => {
               dispatch(onSuccess(response1.data))
               let _dispatch:any = dispatch
               _dispatch(populateConfesionAction())
          })
}
export default insertConfesionAction
