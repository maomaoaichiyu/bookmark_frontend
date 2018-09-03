import request from 'request-promise-native';

const BACKEND_URL = process.env.SERVER_URL || 'http://localhost:10010';
const ENDPOINT = 'search';

export const updateReposList = repos => ({
  type: 'UPDATE_REPOS_LIST',
  repos
})

export const search = text => {
  return function (dispatch) {
    let options = {
      url: `${BACKEND_URL}/${ENDPOINT}`,
      qs: {
        text: text,
      },
      json: true,
    };
    return request
      .get(options)
      .then(result => dispatch(updateReposList(result)))
      .catch(() => { return dispatch(updateReposList([])) });
  }
}