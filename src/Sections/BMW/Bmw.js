import './Bmw.css'


import { BmwCard,SectionHeader,SectionWrapper } from '../../components/index'

import BmwData from '../../Data/BmwData'


const Bmw = () => {
 
  

  const cards = BmwData.map(card => {
   return<BmwCard key={card.id} image= {card.image} title= {card.title}  category= {card.category}    rate={card.rate} download={card.download}/>
  })

 

  return (
    <>
   <SectionWrapper>
     <SectionHeader> Most populare BMW</SectionHeader>

        <div className='Most-populare-items'>
          {cards}

        </div>
            </SectionWrapper>
           
    </>
  )
}

export default Bmw