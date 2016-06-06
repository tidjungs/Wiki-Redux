export const loadPages = () => ({
  type: 'RECEIVE_PAGES',
  pages: [
    {
      "id": 1,
      "title": "test page#1",
      "content": "TEST PAGE CONTENT"
    }, {
      "id": 2,
      "title": "test page#2",
      "content": "TEST PAGE CONTENT"
    }
  ]
})

// import { CALL_API } from 'redux-api-middleware'
// import { PAGE_ENDPOINT } from '../constants/endpoints'

// export const loadPages = () => {(
//   [CALL_API]: {
//     endpoint: PAGE_ENDPOINT,
//     method: 'GET',
//     type: ['LOAD_PAGES_REQUEST', 'LOAD_PAGES_SUCCESS', 'LOAD_PAGE_FAILURE']
//   }
// )}
