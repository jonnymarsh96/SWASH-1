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
import FlatButton from "material-ui/FlatButton";




export default class Home extends React.PureComponent {
  render() {
    const headerStyle={
      display:"flex",
      minHeight:"100vh",
      background:"url(http://h4z.it/Image/644192_betten-40145.jpg)",
      backgroundSize:"cover",
      width:"100%",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    }
    const navBar={
      display:"flex",
      flexDirection:"row",
      width:"100%",
      height:"100px",
      justifyContent:"space-between",
      position:"fixed",
      top:"0",
      background:"rgba(0,0,0,.5)",
    }
    const imageStyle={
      display:"flex",
      flexDirection:"row",

    }
    const logoStyle={
      width:"550px",
      height:"500px",
      marginTop:"30px",
      color:"#ffffff",
      backgroundSize:"100% 100%",
      marginLeft:"50px",
      fontSize:"30px"

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
    const boxOne={
      display:"flex",
      flexDirection:"column",
      width:"300px",
      height:"300px",
      color:"#F28705",
      margin:"0 auto",

    }
    const heading={
      display:"flex",
      fontSize:"25px",
      justifyContent:"center",
      color:"#ffffff",
      fontFamily:"Roboto, sans serif",
      padding:"10px",
      marginTop:"20px"


    }
    const parStyle1={
     display:"flex",
     fontSize:"15px",
     justifyContent:"center",
     color:"#ffffff",
     fontFamily:"Roboto, sans serif",
     padding:"10px",
     marginTop:"20px"

    }
    const paragraphStyle={
     display:"flex",
     fontSize:"15px",
     justifyContent:"center",
     color:"#ffffff",
     fontFamily:"Roboto, sans serif",
     textAlign:"center"


    }
    const mainStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"space-around",
      marginTop:"50px"



    }
    const boxTwo={
      width:"300px",
      height:"300px",
      background:"url(http://g01.a.alicdn.com/kf/HTB1.Y6AHVXXXXXKXVXXq6xXFXXXI/1-22-Joy-DIY-Blank-Kraft-paper-cardboard-boxes-for-gifts-packaging-sliding-gift-drawer-boxes.jpg_220x220.jpg)",
      backgroundSize:"100% 100%"


    }
    const boxThree={
      width:"300px",
      height:"300px",
      background:"url()",



    }
    const boxFour={
      width:"300px",
      height:"300px",
      background:"url()",



    }
    const h1={
      fontFamily:"Roboto, sans serif",
      fontSize:"50px"
    }
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <div>

        <Responsive minDeviceWidth={1024}>
          <div>
          <header style={headerStyle}>
            <nav style={navBar}>
              <div style={logoStyle}>SWASH</div>
              <Link to="/Home" style={navLink}>Home</Link>
              <Link to="/Products" style={navLink}>Products</Link>
              <Link to="/About" style={navLink}>About</Link>
              <Link to="/Contact" style={navLink}>Contact</Link>
            </nav>
          <div style={boxOne}>
            <div style={heading}></div>
            <div style={parStyle1}></div>
            <h1 style={h1}>Swashbuckler:</h1>
            <p style={paragraphStyle}>Swaggering or daring soldier or adventurer.</p>
          </div>
          </header>
          </div>


          <div style={mainStyle}>
            <div style={boxTwo}></div>
            <div style={boxThree}></div>
            <div style={boxFour}></div>
          </div>








        </Responsive>
        </div>

      </div>
    );
  }
}
