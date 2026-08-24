import styles from "./ZaloButton.module.css";


const ZaloButton = () => {

 return (

  <a
    href="https://zalo.me/YOUR_ZALO_ID"
    target="_blank"
    rel="noreferrer"
    className={styles.button}
    aria-label="Liên hệ Zalo"
  >

    Z

  </a>

 );

};


export default ZaloButton;