import './NavItem.css'

const NavItem = (props) => {
  return (
    <li activeclassName='nav-item'>
        {props.children}
    </li>
  )
}



export default NavItem
