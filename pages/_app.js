import '../styles/globals.css'
import { Fragment } from 'react'
import Head from 'next/head' 

import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return<Fragment>  <Layout> <Component {...pageProps} /></Layout>
</Fragment>
}

export default MyApp
