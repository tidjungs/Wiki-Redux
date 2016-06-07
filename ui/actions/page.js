// export const loadPages = () => ({
//   type: 'RECEIVE_PAGES',
//   pages: [
//     {
//       "id": 1,
//       "title": "test page#1",
//       "content": "TEST PAGE CONTENT"
//     }, {
//       "id": 2,
//       "title": "test page#2",
//       "content": "TEST PAGE CONTENT"
//     }
//   ]
// })

// import { CALL_API } from 'redux-api-middleware'
import { PAGES_ENDPOINT } from '../constants/endpoints'
import fetch from 'isomorphic-fetch'


// export const loadPages = () => {(
//   [CALL_API]: {
//     endpoint: PAGES_ENDPOINT,
//     method: 'GET',
//     types: ['LOAD_PAGES_REQUEST', 'LOAD_PAGES_SUCCESS', 'LOAD_PAGE_FAILURE']
//   }
// )}

export const loadPages = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_PAGES_REQUEST'
    })

    fetch(PAGES_ENDPOINT)
      .then((response) => response.json())
      .then(
       
        (pages) => dispatch({
          type: 'LOAD_PAGES_SUCCESS',
          pages
        }),
        (error) => dispatch({
          type: 'LOAD_PAGES_FAILURE'
        })
      )
  }
}
