import styled from "styled-components"
import { Button } from "../Button"
import { Form, FormContainer, FormContent, FormContentRadio, FormHeader } from "../Form"

const RadioInputData = [
    {id: "men", label: "Masculino", name: "gender"},
    {id: "women", label: "Feminino", name: "gender"},
    {id: "other", label: "Outro", name: "gender"},
];

function Register() {
    return (
        <FormContainer>
            <FormHeader title="Cadastre-se" subtitle="Realize seu cadastro em nosso sistema!"/>
            <Form method="POST">
                <FormContent labelName="Nome" type="text" name="name" placeholder="Digite o nome"/>
                <FormContent labelName="Data de Nascimento" type="date" name="birthday" placeholder="Digite seu aniversário"/>
                <FormContentRadio label="Sexo" radioList={RadioInputData} />
                <FormContent labelName="E-mail" type="email" name="email" placeholder="Digite o e-mail"/>
                <FormContent labelName="Senha" type="password" name="pass" placeholder="Digite a senha"/>
                <Button type="submit" bgColor="#dc2700">Login</Button>
            </Form>
        </FormContainer>
    )
}

export default Register
