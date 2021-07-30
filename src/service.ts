import { AxiosResponse } from "axios";
import axiosClient from "./axiosClient";
import { ApiReponse, Confesion, NewConfesion } from "./redux/Confesion/ConfesionTypes";

export interface ILoginByCredentials {
   username: string,
   password: string
}

export interface ISignin {
   username: string,
   password: string,
   firstname: string,
   lastname: string
}

export interface IApiAuth {
   token: string,
   isAuth: boolean,
   data: Confesion
}

export async function loginByCredentials(input: ILoginByCredentials): Promise<ApiReponse<IApiAuth>> {
   const response: AxiosResponse<ApiReponse<IApiAuth>> =
      await axiosClient.post('/log/credentials', input)
   return response.data

}

export async function loginVerifyToken(token: string): Promise<ApiReponse<IApiAuth>> {
   const response: AxiosResponse<ApiReponse<IApiAuth>> =
      await axiosClient.post('/log/token', {token})
   return response.data

}

export async function getAllConfesion(): Promise<ApiReponse<Confesion[]>> {
   const response: AxiosResponse<ApiReponse<Confesion[]>> = await axiosClient.get('/confesion')
   return response.data

}

export async function insertConfesion(confesion: NewConfesion): Promise<ApiReponse<Confesion>> {
   const response: AxiosResponse<ApiReponse<Confesion>> =
      await axiosClient.post('/confesion', confesion)
   return response.data

}

export function setTokenLocalStorage(token: string){
   localStorage.setItem('token',token)
}

export function getTokenLocalStorage(){
   return localStorage.getItem('token') 
}

export async function signin(input: ISignin): Promise<ApiReponse<IApiAuth>> {
   const response: AxiosResponse<ApiReponse<IApiAuth>> =
      await axiosClient.post('/sign', input)
   return response.data

}