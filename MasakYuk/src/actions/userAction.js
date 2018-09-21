import axios from 'axios'
const apiURL = 'http://192.168.0.76:3000/'

export function fetchUser() {

}

export function addFavouriteToUser(uid, detail) {
  let { label, image, ingredientLines, calories, totalTime } = detail
  return dispatch => {
    dispatch({ type: 'LOADING_FAVOURITE'})
    axios({
      method: 'post',
      url: `${apiURL}/favourites`,
      data: {
        uid,
        label, image, ingredientLines, calories, totalTime
      }
    })
    .then(({ data }) => {
      dispatch({
        type: 'ADD_FAVOURITE_TO_USER',
        payload: data
      })
    })
    .catch(({ response }) => {
      console.log('Error add to favourite', response)
    })
  }
}

export function removeFavouriteFromUser(uid, favouriteId) {
  return dispatch => {
    dispatch({ type: 'LOADING_FAVOURITE' })
    axios({
      method: 'delete',
      url: `${apiURL}/favourites/${favouriteId}`,
      data: { uid }
    })
    .then(({ data }) => {
      dispatch({
        type: 'REMOVE_FAVOURITE_FROM_USER',
        payload: data
      })
    })
    .catch(({ response }) => {
      console.log('Error remove favourite from user', response)
    })
  }
}