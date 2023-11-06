import { useState } from "react"
import ModalColorPick from "../ModalColorPick/ModalColorPick";

const ButtonColorPick = () => {

    const [buttonColor, setButtonColor] = useState('3d7c40');

    const [showModal, setShowModal] = useState(false);

    const handleColorChange = (color: string) => {
        setButtonColor(color);
    }

    const handleShowModal = () => {
        setShowModal(true);
    }

    return (
        <>
            <h2 style={{marginLeft:'25px', marginTop:'25px'}}>Tercer ejemplo</h2>
            <div className="mt-3 d-flex justify-content-center">
                <button className="btn btn-outline-secondary w-50" style={{color: 'black', backgroundColor: buttonColor}} onClick={handleShowModal}>Cambiar color</button>
            </div>
            {showModal && <ModalColorPick 
                show={showModal} 
                onHide={() => {setShowModal(false)}} 
                handleColorChange={handleColorChange}/>}
        </>
  )
}

export default ButtonColorPick