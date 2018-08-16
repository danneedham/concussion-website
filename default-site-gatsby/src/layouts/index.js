import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Header from '../components/header'
import './index.css'

const ListLink = props =>
  <li style={{display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 890,
        padding: '0px 1rem',
      }}
    >
    <header style={{ marginBottom: '1.5rem' }}>
      <ul style={{listStyle: 'none', float: 'left' }}>
        <ListLink to='/'>Home</ListLink>
        <ListLink to='/blog'>Blog</ListLink>
        <ListLink to='/students'>Student Resources</ListLink>
        <ListLink to='/family'>Other Resources</ListLink>
        <ListLink to='/science'>Science of Concussions</ListLink>
        <ListLink to='/about'>About Us/Contact Us</ListLink>
      </ul>
    </header>
    <br />
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
