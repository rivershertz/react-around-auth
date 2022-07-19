import HeaderLogo from '../images/header_logo.png'

function Header () {
    return(
        <header class="header">
      <img
        class="header__logo"
        src= {HeaderLogo}
        alt="website logo. Around the U.S."
      />
    </header>
    )
}

export default Header