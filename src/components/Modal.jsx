import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("/");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.element,
};

export default Modal;
