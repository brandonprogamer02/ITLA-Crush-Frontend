import React, { useState } from 'react'
import s from './Main.module.css'
import logoInicio from '../../resources/logo-inicio-registro.svg'
import exitIcon from '../../resources/salir.png'
import cruz from '../../resources/cruz.svg'
import ConfesionesContainer from './ConfesionesContainer/ConfesionesContainer'
import NuevaConfesionModal from './ConfesionesContainer/NuevaConfesionModal/NuevaConfesionModal'
import { setTokenLocalStorage } from '../../service'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { State } from '../../redux/storeTypes'


export default function Main() {
   const [showModal, setShowModal] = useState(false)
   const history = useHistory()
   const stateUser = useSelector((state: State) => state.user)
   function closeSession(){
      setTokenLocalStorage('NULL')
      history.push('/login')
   }

   const isInvitate = localStorage.getItem('token') == 'NULL' || !localStorage.getItem('token')

   return (
      <>
         <NuevaConfesionModal showModal={showModal} setShowModal={setShowModal} />
         <div className={s['main-container'] + ' row'} >
            <div className={s['logo-container'] + ' col-4'} >
               <div className={s['label-sesion-container']}>
                  <div className={s['label']}>
                     <label >Haz iniciado Sesion Como {isInvitate ? 'Invitado' : stateUser.username}</label>
                  </div>
                  <div>
                     <img src={exitIcon} alt="exit icon" onClick={closeSession}/>
                  </div>
               </div>
               <div>
                  <div className={s['div-logo']}>
                     <img src={logoInicio} alt="logo-inicio" width='90%' 
                        
                     />
                  </div>
               </div>
            </div>
            <div className={s['confesiones-container'] + ' col-6 h-100'}>
               <ConfesionesContainer />
            </div>
            <div className={s["button-container"] + ' col-2'}>
               <button
                  onClick={() => isInvitate ? alert('No puedes hacer declaraciones siendo invitado. Porfavor registrate '): setShowModal(true)}
               >
                  <img src={cruz} alt="cruz" />
               </button>
            </div>
         </div>
      </>

   )
}
