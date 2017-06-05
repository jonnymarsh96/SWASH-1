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
import Arrow from 'material-ui/svg-icons/navigation/arrow-downward';
import Toggle from 'material-ui/Toggle';
import FlatButton from "material-ui/FlatButton";




export default class Home extends React.PureComponent {
  render() {
    const headerStyle={
      display:"flex",
      minHeight:"100vh",
      background:"url(http://localhost:8000/terrah-holly-241981.jpg)",
      backgroundSize:"cover",
      width:"100%",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    }
    const navBar={
      display:"flex",
      flexDirection:"column",
      width:"100%",
      height:"124px",
      justifyContent:"space-between",
      position:"fixed",
      top:"0",

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
      fontSize:"30px",

    }
    const navLink={
      textDecoration:"0",
      display:"flex",
      flexDirection:"column",
      padding:"15px",
      marginTop:"25px",
      color:"#555555",
      fontSize:"18px",
      fontFamily:"Open Sans",
      fontWeight:"bold",

    }
    const boxOne={
      display:"flex",
      flexDirection:"column",
      width:"50%",
      height:"700px",
      color:"#F28705",
      margin:"0 auto",
      marginTop:"200px",


    }
    const heading={
      display:"flex",
      fontSize:"25px",
      justifyContent:"center",
      color:"#ffffff",
      fontFamily:"Berkshire Swash",
      padding:"10px",
      marginTop:"20px"
    }
    const parStyle1={
      width:"100%",
      borderRadius:"5px",
      background:"rgba(0,0,0,.0)",
     display:"flex",
     flexDirection:"column",
     fontSize:"15px",
     color:"#ffffff",
     fontFamily:"Roboto, sans serif",
     marginBottom:"250px",
     padding:"25px"
    }

    const mainStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"space-around",
      marginTop:"50px",
      height:"500px",


    }
    const pescatarian={

      width:"600px",
      backgroundImage:"url(http://localhost:8000/Brown_Trout_Rising_grande.jpg)",
      backgroundRepeat:"no-repeat",
      
    }
    const h1={
      fontFamily:"Berkshire Swash",
      textShadow:"2px 2px 2px #F1A524",
      fontSize:"5em",
      color:"#DB2C28",
    }
    const paragraphStyle={
     display:"flex",
     fontSize:"2em",
     justifyContent:"center",
     color:"#F1A524",
     fontFamily:"Patrick Hand SC",
     textAlign:"start",
     fontWeight:"bold",
    }
    const take={
      height:"20px",
      fontSize:"1.5em",
      color:"#D2D9B8",
      fontFamily:"Roboto",
      textAlign:"center",
      pddingTop:"200px",
      fontweight:"bold",
    }
    const arrow={
      height:"50px",
      color:"#D2D9B8",
    }
    const parallax={
      backgroundImage: "url(http://localhost:8000/pescatarian.jpg)",
    minHeight: "600px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",

    }
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>


        <Responsive minDeviceWidth={1024}>
          <header style={headerStyle}>
            <nav style={navBar}>
              <div style={logoStyle}><img src="http://localhost:8000/unnamed.png"/></div>

            </nav>
            <div style={boxOne}>
              <div style={heading}></div>
              <div style={parStyle1}>
                <h1 style={h1}>Swashbuckler:</h1>
                <p style={paragraphStyle}>( ˈswôSHˌbək(ə)lər,ˈswäSHˌbək(ə)lər )<br/>
                Swaggering or daring soldier or adventurer.
                <br/>"swash" (archaic: to swagger with a drawn sword) and <br/>"buckler" (a small-shield gripped in the fist) dating from the 16th century.
                </p>
              </div>
              <div style={take}>
                take a gander. <br/> <Arrow style={arrow}/>
              </div>

            </div>
          </header>

          <div style={mainStyle}>
            <div style={pescatarian}>Latter-Day Swashbucklers
            </div>
          </div>
          <div style={parallax}></div>

        </Responsive>
      </div>


    );
  }
}
