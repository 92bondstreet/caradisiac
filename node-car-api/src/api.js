const {CAR_DYNAMIC_API} = require('./constants');
const post = require('./post');

/**
 * Parse response to get brands
 * @param  {String} body
 * @return {Array}
 */
const parse = response => {
  try {
    const text = JSON.parse(response.text);

    return text.hits && text.hits.content || [];
  } catch (e) {
    return [];
  }
};

module.exports = async (payload, configuration = {}) => {
  try {
    const action = configuration.action || CAR_DYNAMIC_API;
    const response = await post(Object.assign({}, {action, payload}, configuration));
    const data = parse(response);

    if (data) {
      return data;
    }

    return Promise.reject('NOT_AVAILABLE');
  } catch (e) {
    return Promise.reject(e);
  }
};
