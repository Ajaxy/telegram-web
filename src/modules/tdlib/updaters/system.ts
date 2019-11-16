import { getDispatch, getGlobal, setGlobal } from '../../../lib/teactn';

import * as TdLib from '../../../api/tdlib';
import { TdLibUpdate, TdLibUpdateAuthorizationState } from '../../../api/tdlib/types';

export function onUpdate(update: TdLibUpdate) {
  switch (update['@type']) {
    case 'updateAuthorizationState':
      onUpdateAuthorizationState(update);
      break;
  }
}

function onUpdateAuthorizationState(update: TdLibUpdateAuthorizationState) {
  setGlobal({
    ...getGlobal(),
    authState: update.authorization_state['@type'],
  });

  switch (update.authorization_state['@type']) {
    case 'authorizationStateLoggingOut':
      setGlobal({
        ...getGlobal(),
        isLoggingOut: true,
      });
      break;
    case 'authorizationStateWaitTdlibParameters':
      TdLib.sendParameters();
      break;
    case 'authorizationStateWaitEncryptionKey':
      TdLib.send({ '@type': 'checkDatabaseEncryptionKey' });
      break;
    case 'authorizationStateWaitPhoneNumber':
      break;
    case 'authorizationStateWaitCode':
      break;
    case 'authorizationStateWaitPassword':
      break;
    case 'authorizationStateWaitRegistration':
      break;
    case 'authorizationStateReady':
      setGlobal({
        ...getGlobal(),
        isLoggingOut: false,
      });
      break;
    case 'authorizationStateClosing':
      break;
    case 'authorizationStateClosed':
      if (!getGlobal().isLoggingOut) {
        document.title += ': Zzz…';
      } else {
        getDispatch().init();
      }
      break;
    default:
      break;
  }
}
