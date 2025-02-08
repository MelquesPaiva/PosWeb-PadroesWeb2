import './style.css'
import Logo from "../Logo";
import Menu from "../Menu";
import MenuIcons from "../MenuIcons";

const Header =  () => {
    return (
        <header className="App-header">
            <Logo />
            <Menu />
            <MenuIcons />
        </header>
    )
}

export default Header
