import './Contact.modules.css';
const Contact =() => {
    return (
        <div>
            <h1>Contact Us</h1>
            <div className='formid'>
            <form>
                <label className='labelid'>First Name <input type="text"/></label>
                <br/>
                <label className='labelid'>Last Name <input type="text"/></label>
                <br/>
                <label className='labelid1'>Email <input type="email"/></label>
                <br/>
                <label className='labelid2'>Phone no. <input type="text"/></label>
                <br/>
                <button >Submit</button>   
            </form>
            </div>
        </div>
    )
};

export default Contact;