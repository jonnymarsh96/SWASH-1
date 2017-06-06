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
  scrollDown=(num)=>{
    window.scrollBy(0,num);
  }
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
      position:"absolute",
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
    const h1={
      fontFamily:"Berkshire Swash",
      textShadow:"2px 2px 2px #F1A524",
      fontSize:"5em",
      color:"#DB2C28",
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
     marginBottom:"30px",
     padding:"25px"
    }
    const take={
      height:"20px",
      fontSize:"1.7em",
      color:"#F1A524",
      fontFamily:"Patrick Hand SC",
      textAlign:"center",
      pddingTop:"200px",
      fontweight:"bold",
      textShadow:"2px 2px 2px #DB2C28",
    }
    const arrow={
      height:"50px",
      color:"#F1A524",
      textShadow:"2px 2px 2px #DB2C28",
    }
    const mainStyle={
      display:"flex",
      flexDirection:"row",

      marginTop:"0px",
      height:"334px",
    }
    const container={
      position:"relative",
      width:"50%",
    }

    const image={
      display:"block",
      width:"100%",
      height:"auto",
    }

    const overlay={
      position:"absolute",
      top:"0",
      bottom:"0",
      left:"0",
      right:"0",
      height:"334px",
      width:"100%",
      transition:".5s ease",
      background:"rgba(72,127,60, 0.8)",
      borderRadius:"0px",
    }
    const text={
      color:"white",
      fontSize:"3em",
      fontWeight:"bold",
      position:"absolute",
      top:"50%",
      left:"50%",
      transform:"translate(-50%, -50%)",
      textAlign:"center",
    }
    const pescatarian={
      position:"relative",
      width:"600px",
      backgroundImage:"url(http://localhost:8000/Brown_Trout_Rising_grande.jpg)",
      backgroundRepeat:"no-repeat",
      marginTop:"0px",
      borderRadius:"0px",

    }
    const trekker={
      position:"relative",
      width:"580px",
      backgroundImage:"url(http://localhost:8000/kaidi-guo-236880.jpg)",
      backgroundRepeat:"no-repeat",
      marginTop:"0px",
      borderRadius:"0px",
    }
    const textT={
      color:"white",
      fontSize:"3em",
      fontWeight:"bold",
      position:"absolute",
      top:"50%",
      left:"50%",
      transform:"translate(-50%, -50%)",
      textAlign:"center",
    }
    const overlayT={
      position:"absolute",
      top:"0",
      bottom:"0",
      left:"0",
      right:"0",
      height:"334px",
      width:"100%",
      transition:".5s ease",
      background:"rgba(18,12,133, 0.8)",
      borderRadius:"0px",
    }
    const homeBase={
      position:"relative",
      width:"580px",
      backgroundImage:"url(http://localhost:8000/Homebase.jpg)",
      backgroundRepeat:"no-repeat",
      marginTop:"0px",
      borderRadius:"0px",
    }
    const textH={
      color:"white",
      fontSize:"3em",
      fontWeight:"bold",
      position:"absolute",
      top:"50%",
      left:"50%",
      transform:"translate(-50%, -50%)",
      textAlign:"center",
    }
    const overlayH={
      position:"absolute",
      top:"0",
      bottom:"0",
      left:"0",
      right:"0",
      height:"334px",
      width:"100%",
      transition:".5s ease",
      background:"rgba(120,69,26, 0.8)",
      borderRadius:"0px",
    }


    const pescBox={
      height:"200px",
      width:"40%",
      display:"flex",
      alignContent:"center",
      background:"rgba(72,127,60, 0.8)",
      margin:"0 auto",
      borderRadius:"5px",
      border:"1px solid rgba(72,127,60, 0.8) "
    }
    const pescText={
      color:"#ffffff",
      padding:"20px",
      fontSize:"2em",
      fontFamily:"Patrick Hand SC",
      textAlign:"center",
    }
    const pescLink={
      height:"100px",
      width:"10%",
      display:"flex",
      alignContent:"center",
      background:"rgba(72,127,60, 1)",
      margin:"0 auto",
      marginTop:"20px",
      borderRadius:"5px"
    }


    const homeBox={
      height:"200px",
      width:"40%",
      display:"flex",
      alignContent:"center",
      background:"rgba(120,69,26, 0.8)",
      margin:"0 auto",
      borderRadius:"5px",
      border:"1px solid rgba(120,69,26, .95) "
    }
    const homeText={
      color:"#ffffff",
      padding:"20px",
      fontSize:"2.5em",
      fontFamily:"Patrick Hand SC",
      textAlign:"center",
      fontweight:"bold",
    }
    const homeLink={
      height:"100px",
      width:"10%",
      display:"flex",
      alignContent:"center",
      background:"rgba(120,69,26, 1)",
      margin:"0 auto",
      marginTop:"20px",
      borderRadius:"5px"
    }


    const trekBox={
      height:"200px",
      width:"40%",
      display:"flex",
      alignContent:"center",
      background:"rgba(18,12,133, 0.8)",
      margin:"0 auto",
      borderRadius:"5px",
      border:"1px solid rgba(18,12,133, 0.8) "
    }
    const trekText={
      color:"#ffffff",
      padding:"30px",
      fontSize:"2.3em",
      fontFamily:"Patrick Hand SC",
      textAlign:"center",
      margin:"0 auto",
    }
    const trekLink={
      height:"100px",
      width:"10%",
      display:"flex",
      alignContent:"center",
      background:"rgba(18,12,133, 1)",
      margin:"0 auto",
      marginTop:"20px",
      borderRadius:"5px"
    }


    const paragraphStyle={
     display:"flex",
     fontSize:"2em",
     justifyContent:"center",
     color:"#81D6C1",
     fontFamily:"Patrick Hand SC",
     textAlign:"start",
     fontWeight:"bold",
    }

    const parallax={
      backgroundImage: "url(http://localhost:8000/pescatarian.jpg)",
    minHeight: "500px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    }
    const parallaxTrek={
      backgroundImage: "url(http://localhost:8000/Thetrekker.jpg)",
    minHeight: "500px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    }
    const parallaxHome={
      backgroundImage: "url(http://localhost:8000/Homebase2.jpg)",
    minHeight: "500px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    }
    const tentFPR={
      width:"64px",
      margin:"0 auto",
      marginTop:"0px",
    }
    const packFPR={
      width:"64px",
      margin:"0 auto",
      marginTop:"0px",
    }
    const poleFPR={
      width:"64px",
      margin:"0 auto",
      marginTop:"0px",
    }
    const tentFPR2={
      width:"64px",
      margin:"0 auto",
      marginTop:"40px",
    }
    const packFPR2={
      width:"64px",
      margin:"0 auto",
      marginTop:"40px",
    }
    const poleFPR2={
      width:"64px",
      margin:"0 auto",
      marginTop:"40px",
    }
    const fullPage={
      width:"70%",
      height:"70px",
      borderRadius:"6px",
      background:"#ffffff",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      marginTop:"200px",
      marginLeft:"50px"
    }
    const cont={
      height:"300px",
      width:"100%",
      display:"flex",
      flexDirection:"row",
    }
    const buy={
      height:"100px",
      width:"100px",
      borderRadius:"6px",
      background:"#ffffff"
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
                <div style={fullPage}>
                  <img style={tentFPR} src="http://localhost:8000/001-tent.png" onTouchTap={()=>this.scrollDown(2600)}/>
                  <img style={packFPR} src="http://localhost:8000/002-backpack.png" onTouchTap={()=>this.scrollDown(1800)}/>
                  <img style={poleFPR} src="http://localhost:8000/003-spinning.png" onTouchTap={()=>this.scrollDown(1000)}/>
                </div>
              </div>



            </div>
          </header>

          <div style={mainStyle}>
            <div style={pescatarian}>
              <div style={overlay}>
                <div style={text}>
                  Pescatarian Box
                </div>
              </div>
            </div>
            <span style={pescText}>
              for our fisherman
            </span>
          </div>
          <div style={parallax}>
            <div style={pescBox}>
              <span style={pescText}>
              "Most of the world is covered by water. A fisherman's job is simple: Pick out the best parts."<br/>
              -Charles Waterman
              </span>
            </div>
            <div style={buy}>
              <img style={poleFPR2} src="http://localhost:8000/003-spinning.png" onTouchTap={()=>this.scrollDown(1000)}/>
            </div>
          </div>

          <div style={mainStyle}>
            <div style={trekker}>
              <div style={overlayT}>
                <div style={textT}>
                  Trekker Box
                </div>
              </div>
            </div>
          </div>

          <div style={parallaxTrek}>
            <div style={trekBox}>
              <span style={trekText}>
              "The one who wonders, finds a new path"<br/>
              -Norwegian Proverb
              </span>
            </div>
            <img style={packFPR2} src="http://localhost:8000/002-backpack.png" onTouchTap={()=>this.scrollDown(1680)}/>
          </div>

          <div style={mainStyle}>
            <div style={homeBase}>
              <div style={overlayH}>
                <div style={textH}>
                  Home Base Box
                </div>
              </div>
            </div>
          </div>

          <div style={parallaxHome}>
            <div style={homeBox}>
              <span style={homeText}>
              There's no wifi in the forest, but we promise you'll find a better connection.
              </span>
            </div>

              <img style={tentFPR2} src="http://localhost:8000/001-tent.png" />

          </div>

          <div style={logoStyle}><img src="http://localhost:8000/unnamed.png"/></div>


        </Responsive>
      </div>


    );
  }
}
