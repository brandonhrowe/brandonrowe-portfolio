import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/Rowe_Headshot_300x285.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <div className="image avatar"><img src={avatar} alt="" /></div>
                    <h1><strong>Brandon Rowe</strong></h1>
                    <h1>Fullstack Software Engineer</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
