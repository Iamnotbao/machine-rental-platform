import { useTranslation } from "react-i18next";

import styles from "./LanguageSwitcher.module.css";


const LanguageSwitcher = () => {

  const { i18n } = useTranslation();


  const changeLanguage = (
    language: "vi" | "en"
  ) => {

    i18n.changeLanguage(language);

  };


  return (

    <div className={styles.wrapper}>


      <button
        className={
          i18n.language === "vi"
            ? styles.active
            : ""
        }

        onClick={() => changeLanguage("vi")}
      >

        🇻🇳 VI

      </button>


      <button

        className={
          i18n.language === "en"
            ? styles.active
            : ""
        }

        onClick={() => changeLanguage("en")}

      >

        🇺🇸 EN

      </button>


    </div>

  );
};


export default LanguageSwitcher;