import { JSX, useState } from "react";
import { MyContext, UserLog } from "./Context";

interface props {
    children: JSX.Element | JSX.Element[];
}

export const Provider = ({ children }: props) => {
    const [userLogged, setUserLogged] = useState<UserLog>({} as UserLog)
    const [isActive, setIsActive] = useState(false)
    const [isSelected, setIsSelected] = useState(true)

    return (
        
        <MyContext.Provider
            value={{
                userLogged,
                setUserLogged,
                isActive,
                setIsActive,
                isSelected,
                setIsSelected,
            }}
        >
            {children}
        </MyContext.Provider>

    );
};