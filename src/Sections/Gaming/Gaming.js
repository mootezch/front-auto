import "./Gaming.css";

import {
  GamingCard,
  SectionHeader,
  SectionWrapper,
} from "../../components/index";
import GamingData from "../../Data/GamingData";

const Gaming = () => {
  const cards = GamingData.map((card) => {
    return (
      <GamingCard
        key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        date_added={card.date_added}
        hours_played={card.hours_played}
        download={card.download}
      />
    );
  });

  return (
    <>
      <SectionWrapper>
        <SectionHeader> Best Audi Car</SectionHeader>

        <div className="gaming-cards">{cards}</div>
      </SectionWrapper>
    </>
  );
};

export default Gaming;
