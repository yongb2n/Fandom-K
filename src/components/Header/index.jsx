import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from '../../assets/images/logo/logo.png';
import profileImage from '../../assets/images/header/profile_img.svg';

function Header() {
  const location = useLocation();
  return (
    location.pathname !== '/' && (
      <div className={styles['container']}>
        <header className={styles['header']}>
          <div></div>
          <Link to='/'>
            <img className={styles['logo']} src={logo} alt='팬덤 케이' />
          </Link>
          <Link to='/mypage'>
            <img
              className={styles['profile']}
              src={profileImage}
              alt='프로필 이미지'
              width={32}
              height={32}
            />
          </Link>
        </header>
      </div>
    )
  );
}

export default Header;
