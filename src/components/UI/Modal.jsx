import React from 'react';
import {createPortal} from "react-dom";
import styles from "./Modal.module.css";

function Modal({children, closeModal}) {
  return createPortal(<>
    <div className={styles.modalBackdrop} onClick={closeModal}></div>
    <div className={styles.modalContent}>{children}</div>
    <h1>hello</h1>
  </>, document.getElementById("modal"));
}

export default Modal;