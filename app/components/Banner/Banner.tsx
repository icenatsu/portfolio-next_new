import styles from "./Banner.module.scss";
import BannerBg from "@public/img/banner_bg.webp";
import jarre from "@public/img/jarre.svg";
import Logo from "@public/img/logo.svg";
import Image from "next/image";

const Banner = (): JSX.Element => {
  return (
    <div id="banner" className={styles.banner}>
      <div className={styles.logo}>
        <Image
          className={styles.logoImg}
          src={Logo}
          alt="Dessin d'une cruche inclinée"
          priority={true}
        />
      </div>
      <div className={styles.rain}>
        <Image
          className={styles.bannerbg}
          src={BannerBg}
          alt="Image animée de code"
          width={80}
          height={80}
          priority={true}
        />
      </div>
      <div className={styles.pot}>
        <Image
          className={styles.PotImg}
          src={jarre}
          alt="Dessin d'une jarre"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Banner;
