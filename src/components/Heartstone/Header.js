import React, { useState, useEffect } from "react";
import requests from "./requests";
import "./styles/Header.css";

function Header({ setSelectedClass }) {
  const [cardsClass, setCardsClass] = useState("mage");

  const handleChangeCardClass = (newValue) => {
    setCardsClass(newValue);
  };

  useEffect(() => {
    switch (cardsClass) {
      case "rogue":
        setSelectedClass(requests.fetchRogueCards);
        break;
      case "demonhunter":
        setSelectedClass(requests.fetchDemonhunterCards);
        break;
      case "druid":
        setSelectedClass(requests.fetchDruidCards);
        break;
      case "hunter":
        setSelectedClass(requests.fetchHunterCards);
        break;
      case "paladin":
        setSelectedClass(requests.fetchPaladinCards);
        break;
      case "priest":
        setSelectedClass(requests.fetchPriestCards);
        break;
      case "shaman":
        setSelectedClass(requests.fetchShamanCards);
        break;
      case "warlock":
        setSelectedClass(requests.fetchWarlockCards);
        break;
      case "warrior":
        setSelectedClass(requests.fetchWarriorCards);
        break;
      case "neutral":
        setSelectedClass(requests.fetchNeutralCards);
        break;
      default:
        setSelectedClass(requests.fetchMageCards);
    }
  }, [cardsClass]);

  return (
    <div className="header">
      <form className="header__form" action="">
        <label for="class">select class__</label>
        <select
          onChange={(e) => handleChangeCardClass(e.target.value)}
          name="class"
          id="class"
          value={cardsClass}
        >
          <option value="mage">Mage</option>
          <option value="rogue">Rogue</option>
          <option value="demonhunter">Demon Hunter</option>
          <option value="druid">Druid</option>
          <option value="hunter">Hunter</option>
          <option value="paladin">Paladin</option>
          <option value="priest">Priest</option>
          <option value="shaman">Shaman</option>
          <option value="warlock">Warlock</option>
          <option value="warrior">Warrior</option>
          <option value="neutral">Neutral</option>
        </select>
      </form>
    </div>
  );
}

export default Header;
