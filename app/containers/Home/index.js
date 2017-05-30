/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from 'react-router';
import Menu from 'material-ui/svg-icons/navigation/Menu';
import TextField from 'material-ui/TextField';
import Person from 'material-ui/svg-icons/social/person';
import Description from 'material-ui/svg-icons/action/description';
import AccountBalance from 'material-ui/svg-icons/action/account-balance';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Assignment from 'material-ui/svg-icons/action/assignment';
import AttachMoney from 'material-ui/svg-icons/editor/attach-money';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Toggle from 'material-ui/Toggle';



export default class Home extends React.PureComponent {
  render() {
    const navBar={
      display:"flex",
      flexDirection:"row",
      width:"100%",
      height:"1000px",
      justifyContent:"space-between",
      position:"fixed",
      top:"0",
      background:"url(https://images8.alphacoders.com/742/742586.jpg)"
    }
    const logoStyle={
      width:"550px",
      height:"500px",
      marginTop:"100px",
      background:"url(http://i558.photobucket.com/albums/ss22/jasonlucas724/smash_zpsg5njwwsn.png)",
      backgroundSize:"100% 100%",
    }
    const navLink={
      textDecoration:"0",
      display:"flex",
      flexDirection:"column",
      padding:"15px",
      marginTop:"25px",
      color:"#000000",
      fontSize:"18px",
      fontFamily:"Roboto, sans serif",
      color:"#ffffff"
    }
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <div>

        <Responsive minDeviceWidth={1024}>
                <header>
                  <div>
                    <div style={navBar}>
                      <div style={logoStyle}></div>
                      <Link to="/Home" style={navLink}>Home</Link>
                      <Link to="/Products" style={navLink}>Products</Link>
                      <Link to="/About" style={navLink}>About</Link>
                      <Link to="/Contact" style={navLink}>Contact</Link>

                      <Menu/>

                  </div>
                  </div>
                </header>
        </Responsive>
        </div>

      </div>
    );
  }
}
