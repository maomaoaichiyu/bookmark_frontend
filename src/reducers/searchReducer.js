export default (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_REPOS_LIST':
      return action.repos;
    default:
      return state;
  }
};
