import './Input.css';

const Input = (props) => {

return (
    <span>
        
    <label htmlFor={props.id}>{props.label}</label>
    <input
      type={props.type}
      id={props.id}
      name={props.id}
      required
    />
    </span>
);

}
export default Input;