import Input from '../Input/Input';
import './ContactForm.css'

const ContactForm = ()=>{
const handleSubmit =()=>{
    return alert("obrigado por contactar");
}
    return (
    <form onSubmit={handleSubmit}>
    <Input type='text' id='name' label='Name:'/>
    <Input type='text'id='email'label='Email:'/>

    <label htmlFor="message">Message:</label>
    <textarea
      id="message"
      name="message"
      required
    ></textarea>

    <button type="submit">Submit</button>
  </form>
);
}
export default ContactForm;