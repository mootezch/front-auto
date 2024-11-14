import  './HomePopulare.css'

import { HomeCard,SectionHeader,SectionWrapper } from '../../components/index'
import HomeData from '../../Data/HomeData'


const HomePopulare = () => {
 
  

  const cards = HomeData.map(card => {
   return <HomeCard key={card.id} title={card.title}  image= {card.image} parg={card.parg}  text={card.text} text1={card.text1} text2={card.text2} parg1={card.parg1} text3={card.text3}
   text4={card.text4}
    />
  })

 

  return (
    <>
   <SectionWrapper>
     <SectionHeader >Feature</SectionHeader>

        <div className='Most-populare-items'>
          {cards}

        </div>
            </SectionWrapper>
           
    </>
  )
}
export default HomePopulare