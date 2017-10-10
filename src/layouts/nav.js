import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => (
    <nav style={{
    position: 'absolute',
        padding: '34px 2.0875rem',
        right: '0',
    }}>
        <ul style={{
            listStyleType: 'none',
            margin: 0,
            fontFamily: 'Open Sans',
            fontSize: '17px',
        }}>
            <Link to="/"><li>Introduction</li></Link>|
            <Link to="/page-2/"><li>Showcase</li></Link>|
            <Link to="/page-3/"><li>Team</li></Link>|
            <Link to="/page-4/"><li>FAQ</li></Link>
        </ul>
    </nav>
)

export default Navigation