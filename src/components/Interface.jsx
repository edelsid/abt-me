import { useState } from "react";
import Cards from "./Cards";
import Content from "./Content";
import Counter from "./Counter";
import data from "../assets/data";
import circle from '../assets/circle.svg'

export default function Interface() {
  const [ open, setOpen ] = useState(false);
  const [ content, setContent ] = useState(null);
  const [ disabledNums, setDisabledNums ] = useState([]);
  const [ error, setError ] = useState(false);

  const emptyContent = {
    title: "Упс!", 
    text: "Похоже, что-то пошло не так", 
  }

  const closeCard = (id) => {
    const openedWindow = document.querySelector(".card_open");
    openedWindow.classList.remove("card_open");
    setTimeout(() => {
      openedWindow.classList.add("card_closed"); 
    }, 300);
    openedWindow.style.transform = "";
    setDisabledNums([...disabledNums, id]);
    setContent(null);
    setOpen(false);
  }

  const openCard = (card) => {
    try {
      const currentWork = data.find((item) => item.id === Number(card.id));
      if (disabledNums.includes(Number(card.id))) {
        return;
      }
      if (!currentWork) {
        setError(true);
        return;
      }
      setContent(currentWork);
      setOpen(true);
    } catch (error) {
      setError(true);
    }
  }

  return (
    <div className="interface">
      <img className="background img1" src={circle}/>
      <img className="background img2" src={circle}/>
      <Cards data={data} openCard={openCard} disabledNums={disabledNums}/>
      <Counter nums={data.length}/>
      {open && 
      <Content 
        content={content || emptyContent} 
        closeCard={closeCard} 
        error={error}
      />}
    </div>
  )
}
