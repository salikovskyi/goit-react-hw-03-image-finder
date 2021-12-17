import { Component } from "react";
// import PropTypes from 'prop-types';
// import searchApi from './services/searchApi'
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import "./App.css";


import { productsApi } from "./services/searchApi";

class App extends Component {
  state = {
    pictures: [],
    page: 1,
    query: '',
    imgTags: '',
    largeImage: '',
    error: null,
    showModal: false,
    loading: false,
    finish: false
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, loading, page } = this.state;
    if (prevState.query !== query || (loading && prevState.page < page)) {
      this.fetchProducts();
    }
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  bigImage = (largeImage = '') => {
    this.setState({ largeImage });

    this.toggleModal();
  };



  // fetchPicture = () => {
  //   const {page , query} = this.state;

  //   const options = {
  //     page,
  //     query,
  //   };

  //   this.setState({
  //     loading: true
  //   })

  //   searchApi(options)
  //   .then(pictures => {
  //     this.setState(prevState => ({
  //       pictures: [...prevState.pictures, ...pictures],
  //       page: prevState.page + 1
  //     }))
  //   })
  //   .catch(error  => this.setState({error: 'ТАКОГО НЕМАЄ ШАТАП'}))
  //   .finally(() => this.setState({loading: false}))
  // }

  searchQuery = ({query})=> {
    this.setState({query, page: 1, pictures: [], error: null, finish: false, loading: false })
  }

  async fetchProducts() {
    const {page, query} = this.state;
    this.setState({ loading: true });
    try {
        const {data} = await productsApi.searchPictures(page, query);
        this.setState(({pictures, page}) => {
              const newState = {
                pictures: [...pictures, ...data.hits],
                loading: false,
                error: null,
              }
              if (data.hits.length < 11) {
                newState.finish = true
              }
              if(data.hits.length === 0) {
                newState.error = true;
              }
          return newState;
        })  
    } catch (error) {
        this.setState({
            loading: false,
            error: null

        })
    }
}



loadMore = () => {
  this.setState(({ page }) => ({
      loading: true,
      page: page + 1
  }))
}

  render() {
    const { pictures, loading, error, showModal, largeImage, imgTags, finish  } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.searchQuery}  />
        {error && <h1 className='title'>ШАТАП БРО ТАКОГО НЕТУ</h1>}
        <ImageGallery pictures={pictures} onClick={this.bigImage}/>
        {loading && <Loader />}
        {!finish && pictures.length > 11 && !loading && ( <Button onClick={this.loadMore} />)}
       
       {showModal && (<Modal showModal={this.bigImage}>
             {/* largeIMG={largeImage} alt={imgTags}  */}
            <img src={largeImage} alt={imgTags} />
            {/* <h1>celuyu v plichi i do vstrechi</h1> */}
          </Modal>)}
      </div>
    );
  }
}

export default App;
