import {
     Confesion, ConfesionActionsEnum, ConfesionDispatch,
     PopulateConfesionActionStarted, PopulateConfesionActionSuccess,
} from "./ConfesionTypes"
import { getAllConfesion } from '../../service'
import { State } from "../storeTypes"


const populateConfesionAction = () => (dispatch: ConfesionDispatch, getState: State) => {

     function onStart(): PopulateConfesionActionStarted {
          return {
               type: ConfesionActionsEnum.POPULATE_CONFESION_STARTED,
               payload: null
          }
     }

     function onSuccess(Confesions: Array<Confesion>): PopulateConfesionActionSuccess {
          return {
               type: ConfesionActionsEnum.POPULATE_CONFESION_SUCCESS,
               payload: Confesions
          }
     }

     dispatch(onStart())

     getAllConfesion()
          .then(response1 => {
               dispatch(onSuccess(response1.data))
          })
}

export default populateConfesionAction