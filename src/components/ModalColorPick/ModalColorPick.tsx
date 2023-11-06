/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

type ModalColorPickProps = {
    show: boolean;
    onHide: () => void;
    handleColorChange: (color: string) => void;
}

const ModalColorPick = ({show, onHide, handleColorChange}: ModalColorPickProps) => {

    const [selectedColor, setSelectedColor] = useState('#FFF');

    const handleColorPickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    }

    const handleAcceptClick = () => {
        handleColorChange(selectedColor);
        onHide;
    }

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Cambio de color</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form.Label htmlFor="exampleColorInput">Selecciona un color</Form.Label>
                <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#FFF"
                    title="Elije tu Color"
                    onChange={handleColorPickerChange}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleAcceptClick}>
                    Aceptar
                </Button>
            </Modal.Footer>
        </Modal>

  )
}

export default ModalColorPick