import styles from "./LogoTitle.module.scss";
import Image from 'next/image';
import myLogo from '../src/img/EC_Logo.png'


interface ILogoTitleProps {
  logo: string;
  title: string;
}

const LogoTitle = (props: ILogoTitleProps, { logo = "", text = "" }) => {

  return (
    <>
      <div className={styles.oLogoTitle}>
        <Image 
          src={myLogo} 
          alt="Logo img" 
          width={100}
          height={100}
          >

        </Image>
        
        <p>{props.logo}</p>
        <h2 className={styles.oLogoTitle_Title}>{props.title}</h2>
      </div>
    </>
  );
};

export default LogoTitle;
