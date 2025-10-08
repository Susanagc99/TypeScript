import React from "react"
import { ToastContainer } from "react-toastify";
import { Button, Input, Switch } from "@heroui/react";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { MyContext } from "../context/Context";
import { notifications } from "../helpers/utils";

const userLogueado = {
    name: "david",
    role: "admin",
    isActive: true,
    date: 24 / 12 / 2025,
}

export default function Home() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const { setUserLogged, setIsActive, isActive, isSelected, setIsSelected } = useContext(MyContext);

    const router = useRouter();

    const handleClick = async () => {
        if (user === "david" && pass === "12345") {
            setUserLogged(userLogueado);
            notifications("Login exitoso", "success")
            router.push("/dashboard");
        }
    }

    return (
        <div className="login-container">
            <div className="login-box2">
                <div className="text-2xl font-semibold">Login</div>

                <label></label>
                <Input
                    label="User"
                    placeholder="Enter your user"
                    type="text"
                    onChange={(e) => {
                        setUser(e.target.value);
                    }}
                />

                <label></label>
                <Input
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    onChange={(e) => {
                        setPass(e.target.value);
                    }}
                />


                <Button onPress={handleClick}
                    className="bg-linear-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                    radius="full"
                >
                    Login
                </Button>

                {/* <Button
                    onPress={() => {
                        setIsActive(!isActive);
                    }}
                    className="mt-7"
                    color="primary"
                >
                    Login
                </Button> */}

                <Switch color="danger"
                    isSelected={isSelected} onValueChange={setIsSelected}>
                    Airplane mode
                </Switch>


            </div>
        </div>
    )
}
