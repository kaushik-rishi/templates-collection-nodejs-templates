
const handler = module.exports = {};

const middlewares = [];

/**
 * Registers a middleware function to be executed during request processing.
 *
 * Middleware functions have access to options object that you can use to access the message content and other helper functions
 *
 * @param {function} middlewareFn - The middleware function to be registered.
 * @throws {TypeError} If middlewareFn is not a function.
 */
handler.registerMiddleware = (middlewareFn) => {
  if (typeof middlewareFn !== 'function') {
    throw new TypeError('middlewareFn must be a function');
  }
  middlewares.push(middlewareFn);
}


/**
 * 
 *
 * @param {object} options
 * @param {object} options.message
 * @param {string} options.message.payload.command - Whether to turn on or off the light.
 * @param {string} options.message.payload.sentAt - Date and time when the message was sent.
 */
handler.recieveTurnOnOff = async ({message}) => {
  for (const middleware of middlewares) {
    await middleware(message);
  }
};
/**
 * 
 *
 * @param {object} options
 * @param {object} options.message
  * @param {string} options.message.payload.command - Whether to turn on or off the light.
  * @param {string} options.message.payload.sentAt - Date and time when the message was sent.
 */
handler.sendTurnOnOff = async ({message}) => {
  for (const middleware of middlewares) {
    await middleware(message);
  }
};
