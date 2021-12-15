import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import css from './Loader.module.css';


const loader = () => {
    return (
        <div className={css.center}>
<Loader type="ThreeDots" color="#3f51b5" height={80} width={80} />
</div>
)
  };
  export default loader;