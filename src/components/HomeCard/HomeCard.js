import React from 'react'
import './HomeCard.css'
import {SecondaryButton } from '../../components/index'


import {AiOutlineInfoCircle} from 'react-icons/ai'
import {VscDebugBreakpointLog} from 'react-icons/vsc'
import {FcNext} from 'react-icons/fc'


import ModalPopup from "../popup/PopupHome";



const HomeCard = (props) => {
  const [show, setShow] = React.useState(false);

  const showPopup = (event) => {
    setShow(true);
  };
  return (
    <>
      {show && (
        <ModalPopup title={props.title} parg={props.parg} text={props.text} text1={props.text1} text2={props.text2} parg1={props.parg1} text3={props.text3} text4={props.text4} show={show} setShow={setShow}></ModalPopup>
        
      )}
    <div className='Most-populare-items'>
    <div className='card-wrapper'>
        <img className='Most-populare-item-image'src={props.image} />
        <div className='Most-populare-item-content'>
        <div className='Most-populare-items'>
  <div className='card-wrapper'>
            <h4 className='Most-populare-item-title'>
                {props.title} <span ><AiOutlineInfoCircle/> </span>
                <br/>
                <FcNext />{props.parg}
                <br />
                <span ><VscDebugBreakpointLog/> </span>
                {props.text}
                <br/>
                <span ><VscDebugBreakpointLog/> </span>
                {props.text1}
                <br/>
                <span ><VscDebugBreakpointLog/> </span>
                {props.text2}
                <br/>
                <FcNext /> {props.parg1}
                <br/>
                <span ><VscDebugBreakpointLog/> </span>
                {props.text3}
                <br/>
                <span ><VscDebugBreakpointLog/> </span>
                {props.text4}
                
                </h4>
                </div>
             
 
  </div>
               
            </div>
            <div onClick={showPopup}>
             <SecondaryButton style={{position: 'fixed', bottom: 0}}>Voir plus</SecondaryButton>
            </div>
            </div>
            
          
            </div>
            </>
          

  )
}

export default HomeCard