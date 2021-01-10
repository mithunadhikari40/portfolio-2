import React, { useContext } from "react";
import "./ProudOf.css";
import ProudCard from "../../components/proudCard/ProudCard";
import { proudOfSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function ProdudOf() {
  const { isDark } = useContext(StyleContext);
  if (!proudOfSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {proudOfSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {proudOfSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {proudOfSection.proudCard.map((card,i) => {
              return (
                <ProudCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    footer: card.footerLink,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
