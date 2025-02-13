import { Button } from "../Button"
import { Form, FormContainer, FormContent, FormHeader } from "../Form"

function Login() {
    return (
        <FormContainer>
            <FormHeader title="Login" subtitle="Realize seu login em nosso sistema!" />
            <Form method="POST">
                <FormContent labelName="E-mail" type="email" name="email" placeholder="Digite o e-mail"/>
                <FormContent labelName="Senha" type="password" name="pass" placeholder="Digite a senha"/>
                <Button type="submit" bgColor="#dc2700">Login</Button>
            </Form>
        </FormContainer>
    )
}

export default Login
