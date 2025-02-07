import React, {useState} from 'react'
import './example.css'
const Modal = () => {
    const [showModal, setShowModal] = useState(false)

    const getModal = (e) => {
        e.preventDefault()
        setShowModal(!showModal)
    }
    return (
        <div>
            <button className='exampleModalBtn' onClick={getModal}>Modal</button>
            {showModal && <div className='moveMyExampleModal'>
                <h1>This is a Modal</h1>
                
                </div>}
        </div>
    )
}
export default Modal