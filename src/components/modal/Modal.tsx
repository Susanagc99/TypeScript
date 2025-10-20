import React from "react";

interface ModalProps {
    title: string;
    onClose: () => void;
    children: React.ReactNode;
    desc?: string;
    onCancel?: () => void;
    OnSave?: () => void;
}


export const Modal = ({ title, onClose, children, desc, onCancel, OnSave }: ModalProps) => {
    
    
    const handleClose = () => {
        onClose();
    };
    
    return (
        <>
        <div className="modalContainer">
            <header className="modalContainer_header">
                <h2>{title}</h2>
                <div>
                    <button onClick={handleClose}>
                        X
                    </button>
                </div>
            </header>

            <div className="modalContainer_children">
                {children}
                contenido del children
            </div>

            <footer className="modalContainer_footer">
                <div>
                    {desc}
                </div>
                <div className="modalContainer_buttons">
                    <button onClick={onCancel}>Cancel</button>
                    <button onClick={OnSave}>Save</button>
                </div>
            </footer>
        </div>
        </>
    )
}