import styles from "./FacebookButton.module.css";


const FacebookButton = () => {

 return (

  <a

    href="https://facebook.com/YOUR_PAGE"

    target="_blank"

    rel="noreferrer"

    className={styles.button}

    aria-label="Facebook"

  >

    f

  </a>

 );

};


export default FacebookButton;