import React from "react";
import { Modal } from "../../components/modal/Modal";

const Dashboard = () => {

    const handleClose = () => {
        console.log("close");
    };

    const handleCancel = () => {
        console.log("cancel");
    };

    const handleSave = () => {
        console.log("save");
    };

    return (
        <>
        <div>
            <h1>Dashboard</h1>
        </div>

        <Modal 
        title="Modal prueba" 
        onClose={handleClose} 
        desc="descripción de la modal" 
        onCancel={handleCancel} 
        OnSave={handleSave}>
        </Modal>
        </>
    )
}

export default Dashboard;

//