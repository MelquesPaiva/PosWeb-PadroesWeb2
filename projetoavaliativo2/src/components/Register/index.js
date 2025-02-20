import { useState } from "react";
import { Button } from "../Button"
import { Form, FormContainer, FormContent, FormContentRadio, FormHeader } from "../Form"
import { Paragraph } from "../TextData";
import createUser from "../../modules/addToUserList";

const RadioInputData = [
    { id: "men", label: "Masculino", value: "men", name: "gender" },
    { id: "women", label: "Feminino", value: "women", name: "gender" },
    { id: "other", label: "Outro", value: "other", name: "gender" },
];

function Register() {
    const successTextColor = '#233142'
    const dangerTextColor = '#f95959';

    const [userName, setUserName] = useState('')
    const [userBirth, setUserBirth] = useState('')
    const [userGender, setUserGender] = useState('')
    const [userLogin, setUserLogin] = useState('')
    const [userPass, setUserPass] = useState('')
    const [userWelcomeText, setUserWelcomeText] = useState('')
    const [userWelcomeColorText, setUserWelcomeColorText] = useState(successTextColor)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!requiredFieldsPopulated()) {
            setUserWelcomeText('Por favor, preencha todos os campos obrigatórios')
            setUserWelcomeColorText(dangerTextColor)
            return
        }

        const formData = new FormData(e.target)
        try {
            createUser(formData)
            setUserWelcomeColorText(successTextColor)
            setUserWelcomeText(`Olá! ${userName}!. Estamos felizes em te receber aqui. Seu e-mail para login é ${userLogin} e sua data de nascimento é ${userBirth}. Até mais vê`)
        } catch (e) {
            setUserWelcomeColorText(dangerTextColor)
            setUserWelcomeText(e.message)
        }
    }

    const handleUserData = (event) => {
        switch (event.target.name) {
            case "name":
                setUserName(event.target.value)
                break;
            case "birthday":
                setUserBirth(event.target.value)
                break;
            case "gender":
                setUserGender(event.target.value)
                break;
            case "email":
                setUserLogin(event.target.value)
                break;
            case "pass":
                setUserPass(event.target.value)
                break;
        }
    }

    const requiredFieldsPopulated = () => {
        return userName !== '' && userLogin !== '' && userPass !== '' && userBirth !== ''
    }

    return (
        <FormContainer>
            <FormHeader title="Cadastre-se" subtitle="Realize seu cadastro em nosso sistema!" />
            <Paragraph color={userWelcomeColorText}>{userWelcomeText}</Paragraph>
            <Form onSubmit={handleSubmit}>
                <FormContent labelName="Nome" type="text" name="name" placeholder="Digite o nome" inputChange={handleUserData}/>
                <FormContent labelName="Data de Nascimento" type="date" name="birthday" placeholder="Digite seu aniversário" inputChange={handleUserData}/>
                <FormContentRadio label="Sexo" radioList={RadioInputData} inputChange={handleUserData}/>
                <FormContent labelName="E-mail" type="email" name="email" placeholder="Digite o e-mail" inputChange={handleUserData}/>
                <FormContent labelName="Senha" type="password" name="pass" placeholder="Digite a senha" inputChange={handleUserData}/>
                <Button type="submit" bgColor="#dc2700">Cadastre-se</Button>
            </Form>
        </FormContainer>
    )
}

export default Register
