import './Hero.css'

import { PrimaryButton } from '../../components/index'

const Hero = () => {
  return (
    <div className='hero-main'>
<div className='hero-text'>
    <h6 className='hero-subtitle'>welcome To cyborg</h6>
<h4 className='hero-title'><em>BuyNow</em> Our Popular Cars Etron</h4>

<PrimaryButton>Buy Now</PrimaryButton>
{/*<div className="main-button">
    <a href="browse.html">Browse Now</a>
  </div>*/}
 </div>
</div>
  )
}

export default Hero