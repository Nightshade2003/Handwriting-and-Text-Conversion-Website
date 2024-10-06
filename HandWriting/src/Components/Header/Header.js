import React from 'react'
import { Tooltip } from '@material-ui/core'
import Zoom from '@material-ui/core/Zoom';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';


// import { Link } from 'react-router-dom'
// import logo from '../../media/logo.png'

import './Header.css'


function Header() {
    return (
        <div className="header">
            <div className="headerLeft">
            </div>
            <div className="headerRight">
                <a href='http://localhost:3000' target="_blank" rel="noopener noreferrer">
                    <Tooltip title="" placement="bottom" TransitionComponent={Zoom} >
                        <MenuIcon />
                    </Tooltip>
                    
                </a>
            </div>
        </div>
    )
}

export default Header
