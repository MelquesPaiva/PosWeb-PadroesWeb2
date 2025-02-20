import { useState } from "react"
import { Button } from "../Button"
import { Form, FormContainer, FormContent, FormHeader } from "../Form"
import makeLogin from "../../modules/makeLogin"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const [userLogin, setUserLogin] = useState('')
    const [userPass, setUserPass] = useState('')
    const navigate = useNavigate()

    const handleUserLoginData = (event) => {
        setUserLogin(event.target.value)
    }

    const handleUserPassData = (event) => {
        setUserPass(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const userLogged = makeLogin(formData);
        if (userLogged !== false) {
            localStorage.setItem('userLogged', JSON.stringify(userLogged));
            navigate('/user/home')
            return
        }

        alert(`Não foi possível realizar o seu login`)
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

export const Logout = () => {
    if (window.confirm('Deseja realmente realizar o logout?')) {
        localStorage.removeItem('userLogged')
        window.location.href = '/login'
    }
}
