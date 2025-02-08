import './style.css'
import Logo from "../Logo";
import Menu from "../Menu";
import MenuIcons from "../MenuIcons";

export default function () {
    return (
        <header className="App-header">
            <Logo />
            <Menu />
            <MenuIcons />
        </header>
    )
}