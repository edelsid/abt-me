import { useEffect, useRef, useState } from "react"

export default function Content({ content, closeCard, error }) {
  const contentWindow = useRef();
  const insideSpace = useRef();
  const [ right, setRight ] = useState(null);

  const handleClose = () => {
    contentWindow.current.classList.remove("content_visible");
    setRight(null);
    closeCard(content.id);
  }

  useEffect(() => {
    setTimeout(() => {
      calculateHeight();
      contentWindow.current.classList.add("content_visible");
    }, 300);
  }, []);

  const calculateHeight = () => {
    try {
      const windowHeight = window.innerHeight;
      const style = window.getComputedStyle(contentWindow.current);
    } catch (error) {
      return;
    }
  }

  const check = () => {
    setRight(content.right);
  }

  return (
    <div className={`content__wrapper`}
      style={error ? {backgroundImage: "linear-gradient(60deg,rgba(139, 139, 139, 1) 0%, rgba(228, 228, 228, 1) 100%)"} : {backgroundImage: content.color}} 
      ref={contentWindow}>
        <button className="btn btn_content" onClick={handleClose}>&#10006;</button>
        <div className="content" ref={insideSpace}>
          <p>{content.question}</p>
          <ul className="content__answers">
            {content.answers.map((item) => 
              <li key={item.id} className="answer__el">
                <button 
                  className={`answer ${right === Number(item.id) ? "right" : ""}`} 
                  onClick={check}>{item.text}
                </button>
              </li>
            )}
          </ul>
        </div>
    </div>
  )
}
