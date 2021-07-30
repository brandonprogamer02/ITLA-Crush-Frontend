


export interface User {
   username: string,
   firstname: string,
   password?: string,
   lastname: string,
   _id?: string
}

export type UserDispatch = (arg0: UserActions) => void


export enum UserActionsEnum {
     INSERT_USER_SUCCESS = 'INSERT_USER_SUCCESS',
     INSERT_USER_STARTED = 'INSERT_USER_STARTED',

}
// ---------------------------------------------------------------
export type InsertUserActionSuccess = {
     type: UserActionsEnum.INSERT_USER_SUCCESS,
     payload: User
}
export type InsertUserActionStarted = {
     type: UserActionsEnum.INSERT_USER_STARTED,
     payload: null
}

export type UserActions = (
     InsertUserActionSuccess | InsertUserActionStarted 
)