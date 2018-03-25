const api = require('./api');

module.exports = async configuration => {
  try {
    const payload = {'type': 'brands'};
    const brands = await api(payload, configuration);

    if (brands.length) {
      return brands;
    }

    return Promise.reject('NOT_AVAILABLE');
  } catch (e) {
    return Promise.reject(e);
  }
};
