import { useEffect, useRef, useState } from "react"

export default function Content({ content, closeCard, error }) {
  const contentWindow = useRef();
  const insideSpace = useRef();

  const handleClose = () => {
    contentWindow.current.classList.remove("content_visible");
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
      const padding = parseInt(style.getPropertyValue('padding'));
      const newHeight = insideSpace.current.clientHeight + (2 * padding) + 90;
      const finalHeight = newHeight > windowHeight ? newHeight : windowHeight;
    } catch (error) {
      return;
    }
  }

  return (
    <div className={`content__wrapper`}
      style={error ? {backgroundImage: "linear-gradient(60deg,rgba(139, 139, 139, 1) 0%, rgba(228, 228, 228, 1) 100%)"} : {backgroundImage: content.color}} 
      ref={contentWindow}>
        <button className="btn btn_content" onClick={handleClose}>&#10006;</button>
        <div className="content" ref={insideSpace}>
          {content.question}
        </div>
    </div>
  )
}
