import './BestBm.css'

import { FicheBmCard,SectionHeader,SectionWrapper } from '../../components/index'
import FicheBm from '../../Data/FicheBm'

const BestBm = () => {

    const cards = FicheBm.map(card => {
        return<FicheBmCard key={card.id} image= {card.image} title= {card.title}  category= {card.category}   date_added={card.date_added}  hours_played={card.hours_played}  download={card.download}/>
       })

       
  return (
   
    <>
    <SectionWrapper>
      <SectionHeader>  Best Bmw Car</SectionHeader>
 
         <div className='gaming-cards'>
         {cards}
         </div>
             </SectionWrapper>
            
     </>
  )
}

export default BestBm