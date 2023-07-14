import { NavLink } from 'react-router-dom'
import logo from '../../assets/full-logo.png'
import { Scroll, Timer } from 'phosphor-react'
// import logoIcon from '../../../public/logo-icon.png'



export function Header() {
  return (
    <header className="flex items-center justify-between h-24 px-10 py-14">
      <img src={logo} alt="Fire Focus Timer Icon" className='h-10' />
      <nav className='flex gap-2 bg-transparent h-12'>
        <NavLink to="/" title='Timer' className='nav-icon timer'>
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title='Histórico' className='nav-icon scroll'>
          <Scroll size={24} />
        </NavLink>
      </nav>
    </header>
  )
}
