import React,{FC} from 'react'
import { Link } from 'react-router-dom'
const Links: FC = () => {
  return (
    <ul>        
        <li><Link to={'/'}>Main Page</Link></li>
        <li><Link to={'about-page'}>AboutPage</Link></li>
    </ul>
  )
}

export default Links