import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../../redux/storeTypes'
import Confesion from './Confesion/Confesion'
import s from './ConfesionesContainer.module.css'


export default function ConfesionesContainer() {
   const confesiones = useSelector((state: State) => state.confesiones)

   const isInvitate = localStorage.getItem('token') == 'NULL' || !localStorage.getItem('token')
   return (
      <div className={s['confesiones-container']}>
         <h2>Confesiones de Amor</h2>
         <div className={s['l'] + ' w-100'}>
            {confesiones.filter(confesion => confesion.confesions).map(confesion => (
               confesion.confesions.map(confesion1 => {
                  // esto es para no renderizar las declaraciones privadas al invitado
                  if (!confesion1.isPublic && isInvitate) {
                  } else {

                     return <Confesion confesion={{ ...confesion, confesions: [confesion1] }} />
                  }
               })
            ))}
         </div>
      </div>
   )
}
