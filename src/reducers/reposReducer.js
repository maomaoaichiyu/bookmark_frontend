export default (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_BOOKMARKED_REPOS':
      return action.repos;
    default:
      return state;
  }
};
