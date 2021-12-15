import css from './Modal.module.css'
import {Component} from 'react'
import { createPortal } from 'react-dom';


const modalRoot = document.querySelector('#modal-root');


class Modal extends Component {


  componentDidMount() {
    window.addEventListener('keydown', this.hendelKeyDown);
  }


  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendelKeyDown);
  }
  hendelKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.showModal();
    }
  };
  hendelBecdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.showModal();
    }
  };
  render() {

    return createPortal(
      <div className={css.overlay} onClick={this.hendelBecdropClick}>
    <div className={css.modal}>
      {this.props.children}
    </div>
  </div>,
  modalRoot
      )
  }
}

export default Modal;