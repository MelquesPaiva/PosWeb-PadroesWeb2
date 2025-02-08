import './style.css'

const optionsText = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

export default () => {
    return (
        <ul className='opcoes'>
            {optionsText.map((text) => <li className='opcao'><p>{text}</p></li>)}
        </ul>
    )
}
