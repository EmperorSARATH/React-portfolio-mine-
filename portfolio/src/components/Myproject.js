import '../css/Myproject.css';
import pic from "../images/healthcare2.png";
import pic2 from "../images/Ronaldinho-Nike-Tiempo-Legend-Debut (3).jpg";
import pic1 from "../images/Headphone.jpg";
const Myproject =()=>{
    return <div className='Myproject' >
        <div className='one' >

        <img src={pic1} style={{width:"200px;"}}/>

            <div>
            <h1>Project 1
                <h4>A railway registration system</h4>
            </h1>
            </div>
          

        </div>
        <div  className='two'>
        <img src={pic2} style={{width:"200px;"}}/>
        <div>
        <h1>
            Project 2
                <h4>Market basket where you <br/> can buy groceries</h4>
            </h1>
        </div>
      
        </div>
        <div className='three' >
            <img src={pic} style={{width:"200px;"}}/>
            <div className='container'>
            <h1>Project 3
                <h4>Exam portal system</h4>
            </h1>
            </div>
            
        </div>
    </div>
    
    

}

export default Myproject;