import { Button } from "@heroui/react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { XCircleIcon as XCircleIconSolid } from "@heroicons/react/24/solid";
import React, { useState } from "react";

interface ModalProps {
    title: string;
    onClose: () => void;
    children: React.ReactNode;
    desc?: string;
    onCancel?: () => void;
    OnSave?: () => void;
    isOpen: boolean;
}


export const Modal = ({
    title,
    onClose,
    children,
    desc,
    onCancel,
    OnSave,
    isOpen
}: ModalProps) => {
    
    const [isHovered, setIsHovered] = useState(false);

    // const handleClose = () => {
    //     onClose();
    // };


    if (!isOpen) return null;

    return (
        <>
            {/* {isOpen && ( */}

            <div className="modalContainer_overlay">
                <div className="modalContainer">
                    <header className="modalContainer_header">
                        <h2>{title}</h2>
                        <div>
                            {isHovered ? (
                                <XCircleIconSolid 
                                    className="w-8 h-8 close-button cursor-pointer" 
                                    onClick={onClose}
                                    onMouseLeave={() => setIsHovered(false)}
                                />
                            ) : (
                                <XCircleIcon 
                                    className="w-8 h-8 close-button cursor-pointer" 
                                    onClick={onClose}
                                    onMouseEnter={() => setIsHovered(true)}
                                />
                            )}
                        </div>
                    </header>

                    <div className="modalContainer_children">
                        {children}
                    </div>

                    <footer className="modalContainer_footer">
                        <div>
                            {desc}
                        </div>
                        <div className="modalContainer_buttons">
                            <Button color="default" radius="lg" variant="ghost" onClick={onCancel}>Cancel</Button>
                            <Button color="default" radius="lg" variant="ghost" onClick={OnSave}>Save</Button>
                        </div>
                    </footer>
                </div>
            </div>
            {/* )} */}
        </>
    );
};