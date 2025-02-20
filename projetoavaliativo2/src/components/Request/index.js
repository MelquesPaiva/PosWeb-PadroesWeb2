import { useEffect, useState } from "react";
import { RestaurantList } from "../../data/restaurants";
import { Form, FormContainer, FormContent, FormContentSelect, FormHeader } from "../Form";
import styled from "styled-components";
import { Button } from "../Button";

export const Request = ({ onRequestAdded: onRequestAdded }) => {
    const submitRequest = (e) => {
        e.preventDefault();
        const requestListData = localStorage.getItem('requestList');
        let requestList = JSON.parse(requestListData)
        if (requestList === null || requestList === undefined) {
            requestList = []
        }

        const formData = new FormData(e.target)
        const formEntries = Object.fromEntries(formData.entries())

        if (formEntries.description === '' || formEntries.restaurant === '') {
            alert('Informe os campos obrigatórios')
            return
        }

        let id = 1;
        if (requestList.length > 0) {
            id = requestList[requestList.length - 1].id
        }

        requestList.push({ restaurant: formEntries.restaurant, description: formEntries.description, id: id })
        localStorage.setItem('requestList', JSON.stringify(requestList))
        if (onRequestAdded) {
            onRequestAdded()
        }
        alert('Pedido feito com sucesso!')
    }

    return (
        <FormContainer>
            <FormHeader title="Pedido" subtitle="Realize seu pedido em um de nossos restaurantes" />
            <Form onSubmit={submitRequest}>
                <FormContentSelect name="restaurant" label="Restaurantes" options={RestaurantList.map(restaurant => restaurant.title)} />
                <FormContent name="description" label="Descrição" placeholder="Descreva o seu pedido" />
                <Button type="submit" bgColor="#dc2700">Pedir</Button>
            </Form>
        </FormContainer>
    )
}

const RequestListContainer = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const RequestListContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 1rem;
background-color: #000;
`

export const RequestList = () => {
    const [requestList, setRequestList] = useState([])

    const loadRequests = async () => {
        const requestList = await JSON.parse(localStorage.getItem('requestList')) || []
        setRequestList(requestList)
    }

    useEffect(() => {
        loadRequests();
        const handleListChange = () => {
            loadRequests();
        };

        window.addEventListener("storage", handleListChange);

        return () => window.removeEventListener("storage", handleListChange);
    }, []);

    return (
        <RequestListContainer>
            <h1>Lista de pedidos</h1>
            {requestList.map((request) => {
                <RequestListContent>
                    <h3>Restaurante: {request.restaurant} ({request.id})</h3>
                    <p>{request.description}</p>
                </RequestListContent>
            })}
        </RequestListContainer>
    )
}
