import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NewConfesion } from '../../../../redux/Confesion/ConfesionTypes'
import insertConfesionAction from '../../../../redux/Confesion/insertConfesionAction'
import s from '../../Main.module.css'
import { State } from '../../../../redux/storeTypes'
import { getAllConfesion } from '../../../../service'

interface IProps {
   showModal: boolean,
   setShowModal: (arg0: boolean) => void

}

export default function NuevaConfesionModal(props: IProps) {

   const dispatch = useDispatch<any>()
   const [dataSelect, setDataSelect] = useState<Array<any>>([])
   const [selectDestinatary, setSelectDestinatary] = useState('')
   const [txtMensaje, setTxtMensaje] = useState('')
   const [isPublic, setIsPublic] = useState(true)
   const state = useSelector((state: State) => state)
   function handlerSave() {

      const destinataryId = dataSelect.find(data => data.username == selectDestinatary).id
      // console.log(destinataryId);

      const obj: NewConfesion = {
         id: state.user._id as string,
         confesion: {
            body: txtMensaje,
            date: new Date(),
            destinataryId,
            isPublic
         }
      }
      dispatch(insertConfesionAction(obj))
      props.setShowModal(false)
   }
   useEffect(() => {
      (async function () {

         const response = await getAllConfesion()
         const n = response.data.map(data => {
            return { username: data.username, id: data._id }
         })
         setSelectDestinatary(n[0] ? n[0].username : '')
         setDataSelect(n)
      })()
   }, [])

   return (
      <Modal centered
         show={props.showModal}
         onHide={() => props.setShowModal(false)}
      >
         <Modal.Header>
            <Modal.Title>Nueva Confesion de Amor</Modal.Title>
         </Modal.Header>
         <Modal.Body className='d-flex flex-column'>
            <div className={s['border-bottom']}>
               <strong><label>A Quien va Dirigido?</label></strong>
               <select value={selectDestinatary} onChange={e => setSelectDestinatary(e.currentTarget.value)}>
                  {dataSelect.map(data => (
                     <option key={data.id}>{data.username}</option>
                  ))}
               </select>
            </div>
            <div className={s['border-bottom'] + ' d-flex justify-content-between'}>
               <strong><label>Tu post sera: </label></strong>
               <div className='d-flex'>
                  <div>
                     <label>Publico</label>
                     <input type="radio" name='isPublic' checked={isPublic} onClick={() => setIsPublic(true)} />
                  </div>
                  <div>
                     <label>Privado</label>
                     <input type="radio" name='isPublic' checked={!isPublic} onClick={() => setIsPublic(false)} />
                  </div>
               </div>
            </div>
            <div className='d-flex flex-column justify-content-center  p-3'>
               <strong><label>Escribe tu mensaje</label></strong> <br />
               <textarea style={{ height: 90, padding: 10 }} value={txtMensaje}
                  onChange={e => setTxtMensaje(e.currentTarget.value)}
               ></textarea>
            </div>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="danger" onClick={() => props.setShowModal(false)}>
               Cerrar
            </Button>
            <Button variant="info" style={{ color: 'white' }} onClick={handlerSave}>
               Guardar
            </Button>
         </Modal.Footer>
      </Modal>
   )
}
