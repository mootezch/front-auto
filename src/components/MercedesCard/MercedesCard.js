import './MercedesCard.css'

import{FaStar,FaCreativeCommonsNcEu} from 'react-icons/fa'


const MercedesCard = (props) => {
  return (
    <div className='Most-populare-items'>
    <div className='card-wrapper'>
        <img className='Most-populare-item-image' src={props.image}/>
        <div className='Most-populare-item-content'>
            <h4 className='Most-populare-item-title'> 
           {props.title} <br/>
            <span>{props.category}</span>
            </h4>
            <ul>
                <li> <span style={{"color":"var(--color-icons)"}}> <FaStar/> </span> <span>{props.rate}</span></li>
                <br/>
                <li>   <span style={{"color":"var(--color-primary)"}}> <FaCreativeCommonsNcEu/> </span> <span>{props.download}</span></li>

            </ul>
        </div>
    </div>
</div>
  )
}

export default MercedesCard