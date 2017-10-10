import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Background from '../assets/bg2.jpg'

import Navigation from './nav.js'
import './index.css'

const Header = () => (
  <div
    style={{
      width:'100%',
      background: 'white',
      position: 'relative',
    }}
  >
      <Navigation />
    <div
      style={{
          margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{
        margin: 0,
        fontFamily: 'Raleway',
          textDecoration: 'italic',
          fontWeight: '700',
      }}>
        <Link
          to="/"
        >
          Leaf
        </Link>
      </h1>

    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Leaf - A Unity game"
      meta={[
        { name: 'description', content: 'A game demo, made in Unity' },
        { name: 'keywords', content: 'unity, leaf, student, adventure, game, c#, demo' },
      ]}
        link={[
            {
                'rel': 'stylesheet',
                'href': 'https://fonts.googleapis.com/css?family=Open+Sans:400,700,700i|Raleway:400,500,700,700i',
            }
        ]}
    />
    <Header />
    <div style={{
        backgroundColor: '#101524',
    }}>
        <div
         style={{
        margin: '0 auto',
        maxWidth: '960px',
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: '1em',
        fontWeight:'bold',
      }}
    >
      {children()}
        </div>
      </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
