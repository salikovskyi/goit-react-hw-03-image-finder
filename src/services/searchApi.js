import axios from "axios";


const key = '24498679-f86143e0bdf849ada732017c0';
// const searchApi = ({ query = '' , page = 1}) => {
//     return(
//         axios.get(`https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
//     ).then(({data}) => data.hits)
// };

// export default searchApi;

const instance = axios.create({
    baseURL : 'https://pixabay.com/api',
    params: {
        key: key,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 20

    }
})

const searchPictures = (page = 1, q) => {
    // console.log(page);
    return instance.get('/', {
        params: {
            page,
            q
        }
    })
}

export const productsApi = {
    searchPictures
}



// ?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12