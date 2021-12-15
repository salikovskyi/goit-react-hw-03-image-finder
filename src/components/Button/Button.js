import css from './Button.module.css'
import propTypes from 'prop-types'



export default function Button({onClick}) {
    return(
        <div className={css.div}>
    <button className={css.button} onClick={onClick}>ГРУЗИМ ЁПТ</button>
    </div>
    )
}


Button.propTypes = {
    onClick: propTypes.func,
  };