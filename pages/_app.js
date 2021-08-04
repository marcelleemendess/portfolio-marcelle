import '../styles/globals.css';
import { useState } from 'react';
import Navbar from '../components/Navbar'
import Backdrop from '../components/Backdrop';
import SideDrawer from '../components/SideDrawer';

//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
library.add(fas, fab, faEnvelope);

const MyApp = ({ Component, pageProps }) => {
  
  const [sideToggle, setSideToggle] = useState(false)

  return (
    <>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
