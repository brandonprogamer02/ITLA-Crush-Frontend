import { Confesion, ConfesionActions, ConfesionActionsEnum } from
   './ConfesionTypes'

const initialState: Confesion[] = []

export default function ConfesionReducer(state = initialState, action: ConfesionActions) {

   const { POPULATE_CONFESION_STARTED, POPULATE_CONFESION_SUCCESS, INSERT_CONFESION_STARTED,
      INSERT_CONFESION_SUCCESS

   } = ConfesionActionsEnum
   switch (action.type) {
      case INSERT_CONFESION_STARTED:
         return state

      case INSERT_CONFESION_SUCCESS:
         return [...state, action.payload]
      case POPULATE_CONFESION_STARTED:
         return state

      case POPULATE_CONFESION_SUCCESS:
         return action.payload
      default: 
         return state
   }

}