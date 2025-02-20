import styled from "styled-components";
import { UserPresentation } from "../components/User";

const PageContainer = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

function UserFirstPage() {
    return (
        <PageContainer>
            <UserPresentation />
        </PageContainer>
    )
}

export default UserFirstPage;
