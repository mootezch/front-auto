import './MostPopulare.css'


import { Card,SectionHeader,SectionWrapper } from '../../components/index'
import MostPopulareData from '../../Data/MostPopulareData'


const MostPopulare = () => {
 
  

  const cards = MostPopulareData.map(card => {
   return <Card key={card.id} image= {card.image} title= {card.title}  category= {card.category}    rate={card.rate} download={card.download}/>
  })

 

  return (
    <>
   <SectionWrapper>
     <SectionHeader > Most populare Audi</SectionHeader>

        <div className='Most-populare-items'>
          {cards}

        </div>
            </SectionWrapper>
           
    </>
  )
}

export default MostPopulare