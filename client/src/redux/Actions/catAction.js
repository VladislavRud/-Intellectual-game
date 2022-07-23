import { GET_CAT } from './actionTypes';

export const getCat = (data) => ({ type: GET_CAT, payload: data });

export const getCatThunk = () => async (dispatch) => {
  const response = await fetch(
    'https://api.thecatapi.com/v1/images/search?size=full'
  );
  const res = await response.json();
  console.log(res);
  dispatch(getCat(res[0]));
};
