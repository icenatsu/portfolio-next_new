import styles from "./SwitchTheme.module.scss";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";

const Switch = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);

  return (
    <label className={styles.switch} htmlFor="switch" aria-label="switch">
      <input
        className={styles.input}
        type="checkbox"
        checked={!themeContext?.isDarkMode}
        onChange={themeContext?.switchTheme}
        id="switch"
        name="switch"
        aria-label="switch theme"
      />
      <span id="sunmoon" className={styles.sunmoon}>
        <Icon icon="radix-icons:moon" aria-label="Mode sombre" hFlip={true} />
        <Icon icon="humbleicons:sun" aria-label="Mode clair" />
      </span>
    </label>
  );
};

export default Switch;
