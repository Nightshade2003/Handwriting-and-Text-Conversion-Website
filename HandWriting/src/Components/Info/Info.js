import React from 'react'
import { ImPen } from "react-icons/im";

import './Info.css'
import image from '../../media/pen.svg'

function Info() {
    return (
        <div className="info">
            <div className="info_about">
                <p>
                    Are you tired and fed up of the multitude of written assignments that you have to submit?
                    This is the PERFECT solution to all your problems. This feature converts typed documents into handwritten ones, saving you a hella lotta time.
                    
                </p>
            </div>
            <div className="info_image">
                <img src={image} alt="pen" />
            </div>
        </div>
    )
}

export default Info
