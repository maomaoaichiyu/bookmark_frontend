import request from 'request-promise-native';

const BACKEND_URL = process.env.SERVER_URL || 'http://localhost:10010';

export const updateReposList = repos => ({
  type: 'UPDATE_REPOS_LIST',
  repos,
});

export const updateBookmarkedRepos = repos => ({
  type: 'UPDATE_BOOKMARKED_REPOS',
  repos,
});

export const search = text => (dispatch) => {
  const options = {
    url: `${BACKEND_URL}/search`,
    qs: {
      text,
    },
    json: true,
  };
  return request
    .get(options)
    .then(result => dispatch(updateReposList(result)))
    .catch(() => dispatch(updateReposList([])));
};

export const add = repo => () => {
  const options = {
    url: `${BACKEND_URL}/repos/${repo.id}`,
    json: true,
    body: repo,
  };
  return request
    .put(options);
};

export const del = repo => () => {
  const options = {
    url: `${BACKEND_URL}/repos/${repo.id}`,
    json: true,
    body: repo,
  };
  return request
    .delete(options);
};

export const getAllBookmarked = () => (dispatch) => {
  const options = {
    url: `${BACKEND_URL}/repos`,
    json: true,
  };
  return request
    .get(options)
    .then(result => dispatch(updateBookmarkedRepos(result)))
    .catch(() => dispatch(updateBookmarkedRepos([])));
};
