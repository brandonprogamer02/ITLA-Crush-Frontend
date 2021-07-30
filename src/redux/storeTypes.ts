import { CombinedState, createStore, Reducer } from "redux";
import { Confesion } from "./Confesion/ConfesionTypes";
import { User } from "./User/UserTypes";



export interface State {
     confesiones: Confesion[],
     user: User

}


export type CombineReducer = CombinedState<State>

