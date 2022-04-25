import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Layout from '../components/Layout.jsx'
// style
import '../styles/globals.scss'
import "../components/navbar/navbar.scss"
import "../components/HomePage/landingPage.scss"
import "../components/services/servicesview.scss"
import "../components/Vision/vision.scss"
import "../components/layout.scss"
import "../components/footer/footer.scss"
import "../components/contact/contactView.scss"
import "../components/aboutus/aboutus.scss"
import "../components/navbar2/navbar2.scss"
import "../components/skeletonhome/skeletonHome.scss"

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
