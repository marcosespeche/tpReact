import { useState } from "react"
import AlertGenerator from "../AlertGenerator/AlertGenerator";

const AlertMessage = () => {

    const [inputValue, setInputValue] = useState('');

    const [message, setMessage] = useState('');

    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        if (inputValue.trim() != '') {
            setShowAlert(true);
            setMessage(inputValue);
        } else {
            setShowAlert(false);
        }
    }

    return (
    <>
            <h2 style={{marginLeft:'25px', marginTop:'25px'}}>Segundo ejemplo</h2>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <input type="text" className="form-control w-75 mt-3" value={inputValue} onChange={(e)=> {setInputValue(e.target.value)}} placeholder="Ingrese un string"/>
                <button type="button" className="btn btn-light mt-3 w-50" onClick={handleClick}>Enviar</button>
                {showAlert && <AlertGenerator message={message}/>}
            </div>
            
    </>
  );
}

export default AlertMessage