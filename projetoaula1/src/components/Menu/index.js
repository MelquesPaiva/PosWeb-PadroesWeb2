import styled from 'styled-components';
import './style.css'
import { Link } from 'react-router-dom';

const optionsText = [
  {text: 'CATEGORIAS', route: '/categorias'},
  {text: 'MINHA ESTANTE', route: '/minha-estante'},
  {text: 'FAVORITOS', route: '/favoritos'},
];

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
            {optionsText.map((option) => <Option><Link to={option.route}>{option.text}</Link></Option>)}
        </OptionsList>
    )
}

export default Menu
