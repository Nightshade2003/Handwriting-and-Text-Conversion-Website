import React from 'react'
import { Tooltip } from '@material-ui/core'
import Zoom from '@material-ui/core/Zoom';
import GitHubIcon from '@material-ui/icons/GitHub';

import './Footer.css'
import footer from '../../media/footer.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_left">
                </div>
                <div className="footer_right">
                    <img src={footer} alt="img" />
                </div>
            </div>

        </div>
    )
}

export default Footer
