import styled from "styled-components"
import { Button } from "../Button"
import { Form, FormContainer, FormContent, FormHeader, FormLabel, FormParagraph } from "../Form"
import Input from "../Input"
import { Title } from "../TextData"

function Login() {
    return (
        <FormContainer>
            <FormHeader>
                <Title>Login</Title>
                <FormParagraph>Realize seu login em nosso sistema!</FormParagraph>
            </FormHeader>
            <Form method="POST">
                <FormContent>
                    <FormLabel>E-mail</FormLabel>
                    <Input type="email" name="email" placeholder="Digite o e-mail" />
                </FormContent>
                <FormContent>
                    <FormLabel>Senha</FormLabel>
                    <Input type="password" name="password" placeholder="Digite a senha" />
                </FormContent>
                <Button type="submit" bgColor="#dc2700">Login</Button>
            </Form>
        </FormContainer>
    )
}

export default Login
