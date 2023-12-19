import './Container.css'

const Container = (props) =>{

const margin= props.marginTop ? '45%': '0%'

return(
    <div className='Container' style={{marginTop:margin}}>
        <img src={props.img} className='img'/>
        <h1 className='title'>{props.title}</h1>
        <h3 className='description'>{props.subtitle}</h3>
    </div>
)

};
export default Container;