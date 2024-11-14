import './MostMercedes.css'


import { MercedesCard,SectionHeader,SectionWrapper } from '../../components/index'
import Mercedes from '../../Data/Mercedes'


const MostMercedes = () => {
 
  

  const cards = Mercedes.map(card => {
   return<MercedesCard key={card.id} image= {card.image} title= {card.title}  category= {card.category}    rate={card.rate} download={card.download}/>
  })

 

  return (
    <>
   <SectionWrapper>
     <SectionHeader> Most populare Mercedes</SectionHeader>

        <div className='Most-populare-items'>
          {cards}

        </div>
            </SectionWrapper>
           
    </>
  )
}

export default MostMercedes