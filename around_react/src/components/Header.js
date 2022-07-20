import HeaderLogo from '../images/header_logo.png'

function Header () {
    return(
        <header className="header">
      <img
        className ="header__logo"
        src= {HeaderLogo}
        alt="website logo. Around the U.S."
      />
    </header>
    )
}

export default Header