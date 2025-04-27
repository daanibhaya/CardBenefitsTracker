import React from "react";
import './Modal.css'

export const Modal = ({ closeModal, columns, cardEdit}) => {
    const handleSubmit = () => {
        closeModal()
    }
   
    return (
        <div className="modal-container" 
            onClick={(e) => {
                if(e.target.className === "modal-container") closeModal()
        }}>
            <div className="modal">
                <form>
                    <div>
                        <label for="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    {columns.map((column, index) => (
                        <div key={index}>
                            <label for={column.accessor}>{column.label}</label>
                            <input type="number" name={column.accessor} min={0} max={9} />
                        </div>
                    ))}
                </form>
                <button type="submit" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}