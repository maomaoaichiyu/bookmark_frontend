import request from 'request-promise-native';

const BACKEND_URL = process.env.SERVER_URL || 'localhost:10010';
const ENDPOINT = 'search';

export default (state = [{id: 123, name: "fake data", url: "abc"}], action) => {
  switch (action.type) {
    case 'SEARCH':
      let options = {
        url: `${BACKEND_URL}/${ENDPOINT}`,
        qs: {
          text: action.text,
        },
        json: true,
      };
      return request.get(options)
        .catch(() => { return state });
    default:
      return state
  }
}