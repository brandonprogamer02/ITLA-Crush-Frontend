import React from 'react'
import s from './Confesion.module.css'
import img from '../../../../resources/m.png'
import imgHear from '../../../../resources/heart.jpg'
import { Confesion as ConfesionType } from '../../../../redux/Confesion/ConfesionTypes'
import { useSelector } from 'react-redux'
import { State } from '../../../../redux/storeTypes'

interface IProps {
   confesion: ConfesionType
}

export default function Confesion(props: IProps) {
   const confesiones = useSelector((state: State) => state.confesiones)

   function getDestinatary(destinataryId: string) {
      const f = confesiones.find(confesion => confesion._id == destinataryId)
      return f
   }

   return (
      <div className={s['confesion-container']} key={props.confesion._id}>
         <div className={s['cabezera-container']}>
            <label>Mensaje de: </label>
            <label>{props.confesion.username}</label>
         </div>
         <div className={s['body-container']}>
            <div className={s['div1']}>
               <p>
                  {props.confesion.confesions[0].body}
               </p>
               <div className={s['div2']}>
                  <img src={props.confesion.confesions[0].isPublic ? imgHear : img} alt="" width='70px' />
               </div>
            </div>
            <div className={s['footer-container']}>
               <div>
                  <label>Para:</label>
                  <label>{getDestinatary(props.confesion.confesions[0].destinataryId)?.username}</label>
               </div>
            </div>
         </div>
      </div>
   )
}
