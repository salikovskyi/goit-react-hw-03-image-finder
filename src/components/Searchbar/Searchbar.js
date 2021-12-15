import css from './Searchbar.module.css'
import { Component } from 'react';

class Searchbar extends Component {
    state = {
        query: ""
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset()
    }

    reset(){
        this.setState({query: ""})
    }

    render(){
        const {query} = this.state;
        const {handleChange, handleSubmit} = this;

        return (
            // <form onSubmit={handleSubmit}>
            //     <input onChange={handleChange} name="query" value={query} type="text" placeholder="Product name" required />
            //     <button type="submit">Поиск</button>
            // </form>

            <header className={css.searchbar}>
            <form className={css.form} onSubmit={handleSubmit}>
              <button type="submit" className={css.button}>
                <span className={css.button_label}>Search</span>
              </button>
          
              <input
              onChange={handleChange}
                className={css.input}
                type="text"
                name='query'
                value={query}
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                required
              />
            </form>
          </header>
        )
    }
}

export default Searchbar;