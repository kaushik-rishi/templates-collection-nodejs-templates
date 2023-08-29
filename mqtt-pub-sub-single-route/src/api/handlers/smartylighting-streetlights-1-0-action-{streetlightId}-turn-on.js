
const handler = module.exports = {};

/**
 * 
 * @param {object} options
 * @param {object} options.message
 * @param {string} options.message.payload.command - Whether to turn on or off the light.
 * @param {string} options.message.payload.sentAt - Date and time when the message was sent.
 */
handler.recieveTurnOnOff = async ({message}) => {
  // Implement your business logic here...
};
/**
 * 
 * @param {object} options
 * @param {object} options.message
 * @param {string} options.message.payload.command - Whether to turn on or off the light.
 * @param {string} options.message.payload.sentAt - Date and time when the message was sent.
 */
handler.sendTurnOnOff = async ({message}) => {
  // Implement your business logic here...
};
