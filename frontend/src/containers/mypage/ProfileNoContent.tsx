'use client';

import { useRouter } from 'next/navigation';

import * as styles from '@/containers/mypage/index.css';
import { NagCardKeyOptions } from '@/types/nagCard';
import useModal from '@/hooks/useModal';

import Button from '@/components/Button';
import NagCard from '@/components/NagCard';
import Modal from '@/components/Modal';

const ProfileNoContent = () => {
  const router = useRouter();
  const { isOpen, open, close } = useModal();

  const card: NagCardKeyOptions = {
    categoryKey: 0,
    typeKey: 0,
    sizeKey: 2,
    textStyleKey: 0,
  };

  return (
    <div className={styles.profileNoContentStyle}>
      <div className={styles.profileText({ contentType: 'card' })} />
      <Button
        type='button'
        size='large'
        colorStyle='lightGray'
        filled
        onClick={open}
      >
        영수증 발급
      </Button>
      {isOpen && (
        <Modal
          open={isOpen}
          onClose={close}
          title='잔소리 카드를 먼저 만들어 주세요.'
        >
          <div className={styles.actionModalWrapper}>
            <Button
              type='button'
              size='large'
              colorStyle='blue'
              filled
              onClick={() => router.push('/category')}
            >
              잔소리 카드 등록하기
            </Button>
          </div>
        </Modal>
      )}
      <div
        className={`${styles.profileText({ contentType: 'card' })} ${styles.noCardWrapper}`}
      >
        <NagCard cardOption={card} />
      </div>
    </div>
  );
};

export default ProfileNoContent;