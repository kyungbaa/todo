import React from 'react';
import styles from './AlertModal.module.css';
import { IoMdAlert } from 'react-icons/io';
export default function AlertModal() {
  return (
    <div className={styles.modalWrap}>
      <div className={styles.alertIcon}>
        <IoMdAlert size="40px" color="#ef5350" />
      </div>
      <p className={styles.alertText}>글자를 입력해주세요 : )</p>
    </div>
  );
}
