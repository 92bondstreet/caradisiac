const request = require('superagent');
const randomUseragent = require('random-useragent');
const url = require('url');

require('superagent-proxy')(request);

const RANDOM_USER_AGENT = randomUseragent.getRandom(ua => ua.osName === 'Mac OS' && ua.browserName === 'Chrome' && parseFloat(ua.browserVersion) >= 50);
const STATUS = /^[2-3][0-9][0-9]$/;
const TIMEOUT = 300000;
const HEADERS = {
  'Accept-Language': 'fr-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4,de;q=0.2',
  'Cache-Control': 'no-cache',
  'Connection': 'keep-alive',
  'User-Agent': RANDOM_USER_AGENT,
  'Pragma': 'no-cache',
  'upgrade-insecure-requests': 1
};

/**
 * Format reject message error
 * @param  {String} reason [description]
 * @param  {Obj} res    [description]
 * @return {[type]}        [description]
 */
const formatError = module.exports.formatError = (reason, response) => {
  const splitMessage = response.message ? response.message.split('\n') : [response.error];
  const message = splitMessage[splitMessage.length - 1];
  const status = response.status || response.type || response.name;

  return `${reason} - ${status} - ${message}`;
};

const supererror = error => {
  let message = formatError('UNTRACKED_ERROR', error);
  const {response} = error;

  if (error.status === 404) {
    message = 'PAGE_NOT_FOUND';
  } else if (response && ! STATUS.test(response.status)) {
    message = formatError('STATUS_4xx_5xx', response);
  }

  return message;
};

/**
 * Get and format errors
 * @param  {Object} configuration
 * @param  {Object} [headers={}]
 * @return {Promise}
 */
module.exports = async (configuration = {}) => {
  const {action, headers = {}, proxy} = configuration;
  const heads = Object.assign({}, HEADERS, {
    'Host': url.parse(action).hostname,
    'Referer': action
  }, headers);
  let rqst;

  const timer = setTimeout(() => {
    rqst.abort();
    return Promise.reject('STRICT_TIMEOUT');
  }, TIMEOUT);

  rqst = request.agent()
    .get(action)
    .set(heads)
    .accept('*/*')
    .timeout(TIMEOUT);

  if (proxy) {
    rqst = rqst.proxy(`http://${proxy}`);
  }

  try {
    const res = await rqst;

    clearTimeout(timer);

    if (! STATUS.test(res.status)) {
      const message = formatError('STATUS_4xx_5xx', res);

      return Promise.reject(message);
    }

    return res;
  } catch (err) {
    clearTimeout(timer);

    return Promise.reject(supererror(err));
  }
};
