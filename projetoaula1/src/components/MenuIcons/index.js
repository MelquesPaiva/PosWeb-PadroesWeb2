import './style.css'
import profileImage from '../../images/perfil.svg'
import bagImage from '../../images/sacola.svg'

const imagesList = [
    { src: profileImage, alt: 'profile' },
    { src: bagImage, alt: 'bag' },
];

const MenuIcons =  () => {
    return (
        <main>
            <ul className='icons'>
                {imagesList.map((image) => <li className='icon'><img src={image.src} alt={image.alt} /></li>)}
            </ul>
        </main>
    )
}

export default MenuIcons
