import logo from './../../images/logo.svg'
import './style.css'

const Logo =  function () {
    return (
        <div className="logo">
            <img src={logo} alt="logo" />
            <p><strong>Projeto</strong> Store</p>
        </div>
    )
}

export default Logo
