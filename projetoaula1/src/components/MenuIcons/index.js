import './style.css'
import profileImage from '../../images/perfil.svg'
import bagImage from '../../images/sacola.svg'
import styled from 'styled-components';

const imagesList = [
    { src: profileImage, alt: 'profile' },
    { src: bagImage, alt: 'bag' },
];

const IconList = styled.ul `
display: flex;
align-items: center;
`

const Icon = styled.li `
width: 25px;
margin-right: 40px;
`

const MenuIcons = () => {
    return (
        <main>
            <IconList>
                {imagesList.map((image) => <Icon className='icon'><img src={image.src} alt={image.alt} /></Icon>)}
            </IconList>
        </main>
    )
}

export default MenuIcons
