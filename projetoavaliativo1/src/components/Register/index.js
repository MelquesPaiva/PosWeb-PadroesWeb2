import { Button } from "../Button"
import { Form, FormContainer, FormContent, FormLabel } from "../Form"
import Input from "../Input"

function Register() {
    return (
        <FormContainer>
            <Form method="POST">
                <FormContent>
                    <FormLabel>Nome</FormLabel>
                    <Input type="text" name="name" placeholder="Digite o nome" />
                </FormContent>
                <FormContent>
                    <FormLabel>Data de Nascimento</FormLabel>
                    <Input type="date" name="birthday" placeholder="Digite seu aniversário"/>
                </FormContent>
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

export default Register
