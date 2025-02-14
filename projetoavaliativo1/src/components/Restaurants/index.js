import styled from "styled-components";
import { useState } from "react";

const RestaurantContainer = styled.main`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;
`

const Input = styled.input`
    border: 1px solid #dfdfdf;
    padding: 20px 140px;
    border-radius: 50px;
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;

    &:not([type="radio"]) {
        width: 200px;
    }

    &::placeholder {
        color: #a9a9a9;
        font-size: 16px;
    }
`

const RestaurantListContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 2rem;
    margin: 1rem;
`

const RestaurantData = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #c1c1c1;
    border-radius: 10px;
    max-width: 33.3333333333333%;
    background-color: #233142;

`

const RestaurantTitle = styled.h5`
    font-weight: bold;
    color: #FFF;
    font-size: 2rem;
`

const RestaurantDescription = styled.p`
    color: #FFF;
    font-size: 1rem;
`

const RestaurantList = [
    {title: "Maria da Lenha", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {title: "João de Barro", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {title: "Brasa Brasileira", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {title: "Nakaya", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {title: "Open Spice", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {title: "Fire Burger", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {title: "Brooklyn", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {title: "Rei do Beirute", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {title: "Fogo de Chão", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {title: "Burger King", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {title: "MC Donalds", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
    {title: "Sabor do Sul", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"},
];

export const RestaurantContent = ()  => {
    const [restaurantResult, setRestaurantResult] = useState(RestaurantList)

    return (
        <RestaurantContainer>
            <Input placeholder="Digite o restaurante" type="text" name="restaurant" onChange={(event)  => {
                const value = event.target.value
                if (value === '') {
                    setRestaurantResult(RestaurantList)
                    return
                }

                const restaurantFound = restaurantResult.filter((restaurant) => restaurant.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
                setRestaurantResult(restaurantFound)
            }}/>
            <RestaurantListContainer>
                {restaurantResult.map((restaurant) => {
                    return (
                        <RestaurantData key={restaurant.title}>
                            <RestaurantTitle>{restaurant.title}</RestaurantTitle>
                            <RestaurantDescription>{restaurant.description}</RestaurantDescription>
                        </RestaurantData>
                    );
                })}
            </RestaurantListContainer>
        </RestaurantContainer>
    );
}
