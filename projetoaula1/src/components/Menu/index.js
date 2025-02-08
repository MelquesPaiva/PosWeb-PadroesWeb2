import './style.css'

const optionsText = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

const Menu = () => {
    return (
        <ul className='opcoes'>
            {optionsText.map((text) => <li className='opcao'><p>{text}</p></li>)}
        </ul>
    )
}

export default Menu
