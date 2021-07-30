import React, { useState } from 'react'
import s from './signin.module.css'
import logoInicio from '../../resources/logo-inicio-registro.svg'
import payola from '../../resources/payola.svg'
import { Link, useHistory } from 'react-router-dom'
import { setTokenLocalStorage, signin } from '../../service'
import insertUserAction from '../../redux/User/insertUserAction'
import { useDispatch } from 'react-redux'


export default function Signin() {
   const [txtFirstname, setTxtFirsname] = useState('')
   const [txtLastname, setTxtLastname] = useState('')
   const [txtUsername, setTxtUsername] = useState('')
   const [txtPassword, setTxtPassword] = useState('')
   const dispath = useDispatch<any>()
   const history = useHistory()

   async function handlerSign() {
      try {
         const response = await signin({
            username: txtUsername,
            lastname: txtLastname,
            password: txtPassword,
            firstname: txtFirstname
         })
         const { firstname, lastname, password, username, _id } = response.data.data
         setTokenLocalStorage(response.data.token)
         dispath(insertUserAction({
            firstname, lastname, password, username, _id
         }))

         history.push('/main')
      } catch (error) {
         console.log(error)
         alert('Hubo un error en el proceso de registracion')
      }


   }
   return (
      <>
         <div className={s['sigin-container']}>
            <div className={s['container-logo']}>
               <img src={logoInicio} alt="logo de inicio" width='100%' />
            </div>
            <div className={s['container-form']}>
               <h3>Registro</h3>
               <form>
                  <div>
                     <label>Nombre de Usuario</label>
                     <input type="text" value={txtUsername} onChange={e => setTxtUsername(e.currentTarget.value)} />
                  </div>
                  <div className=''>
                     <label>Contrasena</label>
                     <input type="text" value={txtPassword} onChange={e => setTxtPassword(e.currentTarget.value)} />
                  </div>
                  <div>
                     <label>Nombre</label>
                     <input type="text" value={txtFirstname} onChange={e => setTxtFirsname(e.currentTarget.value)} />
                  </div>
                  <div>
                     <label>Apellido</label>
                     <input type="text" value={txtLastname} onChange={e => setTxtLastname(e.currentTarget.value)} />
                  </div>
               </form>
               <div className={s['botton-div']}>
                  <div>
                     <Link to="/login">
                        <label>
                           Ya tienes una cuenta?

                        </label>
                     </Link>
                     <Link to="/main">
                        <label>
                           Ingresar como invitado

                        </label>
                     </Link>
                  </div>
                  <button onClick={handlerSign}>Registrarme</button>
               </div>
            </div>
         </div>
         <img className={s["payola"] + ' '} src={payola} alt="payola" width='350px' />
      </>
   )
}
