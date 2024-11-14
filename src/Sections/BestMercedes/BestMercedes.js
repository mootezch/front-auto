import './BestMercedes.css'

import { FicheMercedesCard,SectionHeader,SectionWrapper } from '../../components/index'
import FicheMercedes from '../../Data/FicheMercedes'

const BestMercedes = () => {

    const cards = FicheMercedes.map(card => {
        return<FicheMercedesCard key={card.id} image= {card.image} title= {card.title}  category= {card.category}   date_added={card.date_added}  hours_played={card.hours_played}  download={card.download}/>
       })

       
  return (
   
    <>
    <SectionWrapper>
      <SectionHeader>  Best Mercedes Car</SectionHeader>
 
         <div className='gaming-cards'>
         {cards}
         </div>
             </SectionWrapper>
            
     </>
  )
}

export default BestMercedes