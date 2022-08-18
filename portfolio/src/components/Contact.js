import '../css/Contact.css';
const Contact = ()=>{
    return <div>
        <form className='form-container'>
            <label>Email</label>
            <input type="email"></input>
            <label>Message</label>
            <input type="text"></input>
            <input type="submit" value="Submit"></input>
   
        </form>

    </div>

}
export default Contact;