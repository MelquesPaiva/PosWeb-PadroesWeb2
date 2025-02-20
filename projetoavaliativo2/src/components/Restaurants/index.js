import styled from "styled-components";
import { useState } from "react";
import { RestaurantList } from "../../data/restaurants";

const RestaurantContainer = styled.main`
    color: #FFF;
    text-align: center;
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
    background-color: #fff;

`

const RestaurantTitle = styled.h5`
    font-weight: bold;
    color: rgb(75 85 99);
    font-size: 2rem;
`

const RestaurantDescription = styled.p`
    color: rgb(75 85 99);
    font-size: 1rem;
    padding: 1rem;
    margin: 0 1rem;
`

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
