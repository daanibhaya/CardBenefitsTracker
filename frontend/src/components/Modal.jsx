import React from "react";
import './Modal.css'

export const Modal = ({ closeModal }) => {
    return (
        <div className="modal-container" 
            onClick={(e) => {
                if(e.target.className === "modal-container") closeModal()
        }}>
            <div className="modal">
                <form action=""></form>
                <button type="submit">Save</button>
            </div>
        </div>
    )
}