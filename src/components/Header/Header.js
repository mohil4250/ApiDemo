import React from 'react';
import Nav from '../Header/Nav/TopNavbar';
import MegaMenu from '../Header/MegaMenu/MegaMenu';

class Header extends React.Component{
    render(){
        return(
            <div>
            <Nav />
            <MegaMenu />
            </div>
        );
    }
}

export default Header;