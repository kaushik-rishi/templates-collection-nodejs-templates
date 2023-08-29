const Router = require('hermesjs/lib/router');
const {validateMessage} = require('../../lib/message-validator');
const router = new Router();
const smartylightingStreetlights10ActionStreetlightIdTurnOnHandler = require('../handlers/smartylighting-streetlights-1-0-action-{streetlightId}-turn-on');
module.exports = router;



router.use('smartylighting/streetlights/1/0/action/:streetlightId/turn/on', async (message, next) => {
  try {
    
    await validateMessage(message.payload,'smartylighting/streetlights/1/0/action/{streetlightId}/turn/on','turnOnOff','publish');
    await smartylightingStreetlights10ActionStreetlightIdTurnOnHandler.recieveTurnOnOff({message});
    next();
    
  } catch (e) {
    next(e);
  }
});
router.useOutbound('smartylighting/streetlights/1/0/action/:streetlightId/turn/on', async (message, next) => {
  try {
    
    await validateMessage(message.payload,'smartylighting/streetlights/1/0/action/{streetlightId}/turn/on','turnOnOff','subscribe');
    await smartylightingStreetlights10ActionStreetlightIdTurnOnHandler.sendTurnOnOff({message});
    next();
    
  } catch (e) {
    next(e);
  }
});
