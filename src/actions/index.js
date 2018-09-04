import request from 'request-promise-native';

const BACKEND_URL = process.env.SERVER_URL || 'http://localhost:10010';

export const updateReposList = repos => ({
  type: 'UPDATE_REPOS_LIST',
  repos
})

export const search = text => {
  return function (dispatch) {
    let options = {
      url: `${BACKEND_URL}/search`,
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

export const add = repo => {
  return function (dispatch) {
    let options = {
      url: `${BACKEND_URL}/repos/${repo.id}`,
      json: true,
      body: repo
    };
    return request
      .put(options)
  }
}