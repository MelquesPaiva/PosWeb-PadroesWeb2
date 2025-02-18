import { useState } from "react"
import { Button } from "../Button"
import { Form, FormContainer, FormContent, FormHeader } from "../Form"

function Login() {
    const [userLogin, setUserLogin] = useState('')
    const [userPass, setUserPass] = useState('')

    const handleUserLoginData = (event) => {
        setUserLogin(event.target.value)
    }

    const handleUserPassData = (event) => {
        setUserPass(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Olá ${userLogin}. Seu login foi realizado com sucesso`)

        setUserLogin('')
        setUserPass('')
    }

    return (
        <FormContainer>
            <FormHeader title="Login" subtitle="Realize seu login em nosso sistema!" />
            <Form onSubmit={handleSubmit}>
                <FormContent labelName="E-mail" type="email" name="email" placeholder="Digite o e-mail" inputChange={handleUserLoginData} inputValue={userLogin}/>
                <FormContent labelName="Senha" type="password" name="pass" placeholder="Digite a senha" inputChange={handleUserPassData} inputValue={userPass}/>
                <Button type="submit" bgColor="#dc2700" disabled={userLogin === '' || userPass === ''}>Login</Button>
            </Form>
        </FormContainer>
    )
}

export default Login
