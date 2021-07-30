import React, { useEffect, useState } from 'react'
import s from './Login.module.css'
import logoInicio from '../../resources/logo-inicio-registro.svg'
import { Link, useHistory } from 'react-router-dom'
import { getTokenLocalStorage, loginByCredentials, loginVerifyToken, setTokenLocalStorage, } from '../../service'
import { useDispatch } from 'react-redux'
import insertUserAction from '../../redux/User/insertUserAction'
import payola from '../../resources/payola.svg'


export default function Login() {

   const [txtUsername, setTxtUsername] = useState('')
   const [txtPassword, setTxtPassword] = useState('')
   const history = useHistory()
   const dispath = useDispatch<any>()

   useEffect(() => {
      (async function () {
         const token = getTokenLocalStorage()
         if (token) {
            const response = await loginVerifyToken(token)

            const { firstname, lastname, password, username, _id } = response.data.data
            if (response.data.isAuth) {
               dispath(insertUserAction({
                  firstname, lastname, password, username, _id
               }))
               history.push('/main')
            }
         }
      })()
   }, [])
   async function handlerLogin() {

      try {
         const response = await loginByCredentials({
            password: txtPassword,
            username: txtUsername
         })
         const { firstname, lastname, password, username, _id } = response.data.data
         setTokenLocalStorage(response.data.token)
         dispath(insertUserAction({
            firstname, lastname, password, username, _id
         }))

         history.push('/main')
      } catch (error) {
         alert('Usuario o Contrasena Incorrectos')
      }
   }

   return (
      <>
         <div className={s['login-container']}>
            <div className={s['container-logo']}>
               <img src={logoInicio} alt="logo de inicio" width='100%' />
            </div>
            <div className={s['container-form']}>
               <h3>Inicio de Sesion</h3>
               <form>
                  <div>
                     <label>Nombre de Usuario</label>
                     <input type="text" value={txtUsername} onChange={e => setTxtUsername(e.currentTarget.value)} />
                  </div>
                  <div className=''>
                     <label>Contrasena</label>
                     <input type="text" value={txtPassword} onChange={e => setTxtPassword(e.currentTarget.value)} />
                  </div>
               </form>
               <div className={s['botton-div']}>
                  <div>
                     <Link to="/signin">
                        <label>
                           No Tienes Cuenta?
                        </label>
                     </Link>
                     <Link to="/main">
                        <label>
                           Ingresar como invitado
                        </label>
                     </Link>
                  </div>
                  <button onClick={handlerLogin}>Ingresar</button>
               </div>
            </div>
         </div>
         <img className={s["payola"]} src={payola} alt="payola" width='350px' />
      </>
   )
}
