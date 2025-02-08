import logo from './../../images/logo.svg'
import './style.css'

export default function () {
    return (
        <div className="logo">
            <img src={logo} alt="logo" />
            <p><strong>Projeto</strong> Store</p>
        </div>
    )
}
