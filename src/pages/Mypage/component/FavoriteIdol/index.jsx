import styles from './styles.module.scss';
import logoImage from '@/assets/images/logo/fandom_k_logo.png';
import FavoriteCard from '../FavoriteCard';
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

function FavoriteIdol({ favoriteIdols, onSelect }) {
  const dragRef = useRef();
  const { events } = useDraggable(dragRef);
  return (
    <div className={styles['favorite-idol']}>
      <div className={styles['favorite-idol-title']}>
        <h3>내가 관심 있는 아이돌</h3>
      </div>

      <div
        className={styles['favorite-card-container']}
        {...events}
        ref={dragRef}
      >
        {favoriteIdols.length > 0 ? (
          favoriteIdols.map((item) => (
            <FavoriteCard key={item.id} item={item} onSelect={onSelect} />
          ))
        ) : (
          <div className={styles['favorite-add-info']}>
            <img
              src={logoImage}
              className={styles['logo-image']}
              alt='로고 이미지'
              width='120px'
              height='23'
            />
            <h3>좋아하는 아이돌을 추가해주세요</h3>
          </div>
        )}
      </div>

      <div className={styles['bottom-line']}></div>
    </div>
  );
}

export default FavoriteIdol;
