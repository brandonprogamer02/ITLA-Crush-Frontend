
export interface ApiReponse<T> {
     data: T,
     error: {
          message: string,
          errorCode: number
     }
}

export interface NewConfesion {
     id: string,
     confesion:
     {
          isPublic: boolean,
          destinataryId: string,
          body: string,
          date: Date
     }
}


export interface Confesion {
     _id?: string,
     username: string,
     password: string,
     firstname: string,
     lastname: string,
     confesions: [{
          isPublic: boolean,
          destinataryId: string,
          body: string,
          date: Date
     }]
}

export type ConfesionDispatch = (arg0: ConfesionActions) => void


export enum ConfesionActionsEnum {
     INSERT_CONFESION_SUCCESS = 'INSERT_CONFESION_SUCCESS',
     INSERT_CONFESION_STARTED = 'INSERT_CONFESION_STARTED',
     // -----------------------------------------------------------
     POPULATE_CONFESION_SUCCESS = 'POPULATE_CONFESION_SUCCESS',
     POPULATE_CONFESION_STARTED = 'POPULATE_CONFESION_STARTED'
}
// ---------------------------------------------------------------

export type InsertConfesionActionSuccess = {
     type: ConfesionActionsEnum.INSERT_CONFESION_SUCCESS,
     payload: Confesion
}
export type InsertConfesionActionStarted = {
     type: ConfesionActionsEnum.INSERT_CONFESION_STARTED,
     payload: null
}
// ---------------------------------------------------------

export type PopulateConfesionActionSuccess = {
     type: ConfesionActionsEnum.POPULATE_CONFESION_SUCCESS,
     payload: Array<Confesion>
}

export type PopulateConfesionActionStarted = {
     type: ConfesionActionsEnum.POPULATE_CONFESION_STARTED,
     payload: null
}


export type ConfesionActions = (
     InsertConfesionActionSuccess | InsertConfesionActionStarted |
     PopulateConfesionActionSuccess | PopulateConfesionActionStarted
)