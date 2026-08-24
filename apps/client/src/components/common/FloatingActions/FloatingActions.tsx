import ScrollTopButton from "./ScrollTopButton/ScrollTopButton";
import ZaloButton from "./ZaloButton/ZaloButton";
import FacebookButton from "./FacebookButton/FacebookButton";
import AIChatButton from "./AIChatButton/AIChatButton";

import styles from "./FloatingActions.module.css";

const FloatingActions = () => {
  return (
    <div className={styles.container}>
      <AIChatButton />
      <FacebookButton />
      <ZaloButton />
      <ScrollTopButton />
    </div>
  );
};

export default FloatingActions;