import styled from 'styled-components';
import './style.css'

const optionsText = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

const OptionsList = styled.ul`
  display: flex;
  align-items: center;
`
const Option = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const Menu = () => {
    return (
        <OptionsList>
            {optionsText.map((text) => <Option><p>{text}</p></Option>)}
        </OptionsList>
    )
}

export default Menu
