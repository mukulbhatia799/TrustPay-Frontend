import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { WarningAtEnd } from "../components/WarningAtEnd"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io"
import logo from '../images/main-logo.png'

export function Signup() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [emailWarning, setEmailWarning] = useState("");
    return (
        <div className="bg-white h-full flex justify-center items-center">
            <div className="border-4 rounded-lg bg-white px-7 py-10 my-5 flex flex-col gap-4">
                <button onClick={() => {
                    navigate(-1);
                }}>{<IoIosArrowRoundBack size={30} />}</button>
                <img src={logo} alt="trust pay logo" width="400px" />
                <Heading text={"Sign Up"} />
                <SubHeading text={"Enter your information to create an account"} />
                <Input onChange={(e) => {
                    setFirstName(e.target.value);
                }} label={"First Name"} placeholder={"Mukul"} inputType={"text"} />
                <Input onChange={(e) => {
                    setLastName(e.target.value);
                }} label={"Last Name"} placeholder={"Bhatia"} />
                <Input onChange={(e) => {
                    setUsername(e.target.value);
                }} label={"Email"} placeholder={"mukulbhatia@example.com"} emailWarning={emailWarning}/>
                <Input onChange={(e) => {
                    setPassword(e.target.value);
                }} label={"Password"} />
                <Button onClick={async () => {
                    await axios.post("http://localhost:3000/api/v1/user/signup", {
                        firstName,
                        lastName,
                        username,
                        password
                    })
                        .then(response => {
                            setEmailWarning("");
                            console.log("message: ", response.data.message);
                            console.log("token: ", response.data.token);
                            localStorage.setItem("token", `Bearer ${response.data.token}`);
                            navigate('/dashboard');
                        })
                        .catch(error => {
                            setEmailWarning("Email already taken");
                            console.log("error occured: ", error.response.data.message);
                        })
                }} text="Sign Up" />
                <WarningAtEnd text="Already have an account?" to="/signin" linkText="login" />
            </div>
        </div>
    )
}