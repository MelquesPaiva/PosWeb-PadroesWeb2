import styled from "styled-components"
import { Request, RequestList } from "../components/Request"
import { useState } from "react";

const RequestPageContainer = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 1rem;
`

function RequestPage() {
    const [update, setUpdate] = useState(false);

    const handleRequestAdded = () => {
      setUpdate((prev) => !prev);
    };

    return (
        <RequestPageContainer>
            <Request onRequestAdded={handleRequestAdded}/>
            <RequestList key={update}/>
        </RequestPageContainer>
    )
}

export default RequestPage
