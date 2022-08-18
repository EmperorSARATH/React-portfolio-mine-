import '../css/About.css';
import React,{useState} from "react";
import pic from '../images/IMG_20200212_190950_091.jpg';
const About=()=>{

    const [status,setStatus]=useState(false);
    
    function aboutHandle(e){
        setStatus(true);
     

    }

    function colorBlack(){
        document.getElementById("bg").style.backgroundColor='#E0A060';

    }
    function colorGrey(){
        document.getElementById("bg").style.backgroundColor='grey';

    }

    function colorGreen(){
        document.getElementById("bg").style.backgroundColor="#80AA00";
    }

    function colorBlue(){
        document.getElementById("bg").style.backgroundColor="#AA80FF";
    }

    return <div className='about-container'>
        <div className="left" onClick={aboutHandle}>
            <h1>Hi,Iam Sarath
            <h6>Iam a Web Developer enthusiast who <br/> loves to
                build react applications</h6>
            </h1>
          

        </div>

        <div className="right">
            {
               status===true &&
               <div className='card'>
                <img className='image' src={pic} style={{width:"100%"}}/>
                    <div className='container'>
                        <h4><b>Sarath U</b></h4>
                        <p>React Developer</p>
                    </div>

                
                    <ul type="circle">
                            <li className='btn-list'><button  onClick={colorGrey}>.</button></li>
                            <li className='btn-list'><button style={{backgroundColor:"#E0A060"}} onClick={colorBlack}>.</button></li>
                            <li className='btn-list'><button style={{backgroundColor:"#80AA00"}} onClick={colorGreen}>.</button></li>
                            <li className='btn-list'><button style={{backgroundColor:"#AA80FF"}} onClick={colorBlue}>.</button></li>

                        </ul>

                </div>
           
            
                }
        </div>

    </div>

}

export default About;