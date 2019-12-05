import React, { useEffect, useState } from 'react';
import PcSidebar from '../components/navigation/pc-sidebar/pc-sidebar.component';
import MobileSidebar from '../components/navigation/mobile-sidebar/mobile-sidebar.component';
import Navbar from '../components/navigation/navbar/navbar.component';

export const useWindowSize = () => {
    const isClient = typeof window === 'object';

    const getSize = () => {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    };

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        const handleResize = () => {
            setWindowSize(getSize());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
};


const App = () => {

    const [state, setState] = React.useState({ left: false, });

    const toggleDrawer = (side, open) => () => { setState({ ...state, [side]: open }) };

    return (
        <React.Fragment>
            <Navbar username='Username' toggleDrawer={toggleDrawer} />
            {
                useWindowSize().width < 960 ?
                    <MobileSidebar toggleDrawer={toggleDrawer} left={state.left} />
                     :
                    <PcSidebar />
            }

        </React.Fragment>
    )
};

export default App;
