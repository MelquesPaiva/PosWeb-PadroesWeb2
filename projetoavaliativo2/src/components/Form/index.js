import styled from "styled-components";
import { Title } from "../TextData";
import Input from "../Input";

const FormContentSection = styled.section`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 10px;
`

const FormParagraph = styled.p`
font-weight: bold;
color: #545454;
`

const FormHeaderSection = styled.section`
text-align: center;
`

const RadioInputContent = styled.div`
display: flex;
flex-direction: row;
`

export const FormContainer = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 1rem;
background-color: #fff;
margin-bottom: 15px;
border-radius: 20px;
`

export const FormLabel = styled.label`
font-size: 15px;
font-weight: bold;
margin-bottom: 5px;
`

export const FormRadioFields = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
gap: 15px;
`

export const FormHeader = ({ title, subtitle }) => {
    return (
        <FormHeaderSection>
            <Title fontSize="24px">{title}</Title>
            <FormParagraph>{subtitle}</FormParagraph>
        </FormHeaderSection>
    );
}

export const FormContent = ({labelName, type, name, placeholder, inputChange, inputValue}) => {
    return (
        <FormContentSection>
            <FormLabel htmlFor={name}>{labelName}</FormLabel>
            <Input type={type} name={name} placeholder={placeholder} inputChange={inputChange} inputValue={inputValue}/>
        </FormContentSection>
    );
}

export const FormContentRadio = ({label, radioList}) => {
    return (
        <FormContentSection>
            <FormLabel>{label}</FormLabel>
            <FormRadioFields>
                { radioList.map((radio) => {
                    return (
                        <RadioInputContent key={radio.id}>
                            <FormLabel htmlFor={radio.id}>{radio.label}</FormLabel>
                            <Input id={radio.id} type="radio" name={radio.name}></Input>
                        </RadioInputContent>
                    );
                }) }
            </FormRadioFields>
        </FormContentSection>
    )
}
