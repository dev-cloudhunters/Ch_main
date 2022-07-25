import React from "react";


const Iframe = (...props) => {
    return (
        <div className="responsive-iframe">
            <iframe src="https://player.vimeo.com/video/283203062?h=d63deecc71&title=0&byline=0&portrait=0" width="640" height="360" frameBorder='0' ></iframe>
        </div>
    )
}

export default Iframe