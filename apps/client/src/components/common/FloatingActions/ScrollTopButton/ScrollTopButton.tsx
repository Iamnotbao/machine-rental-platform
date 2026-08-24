import { useEffect, useState } from "react";

import styles from "./ScrollTopButton.module.css";


const ScrollTopButton = () => {

  const [visible,setVisible] = useState(false);


  useEffect(()=>{

    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };


  },[]);


  const scrollTop = () => {

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  };


  if(!visible) return null;


  return (
    <button
      className={styles.button}
      onClick={scrollTop}
      aria-label="Lên đầu trang"
    >
      ↑
    </button>
  );
};


export default ScrollTopButton;