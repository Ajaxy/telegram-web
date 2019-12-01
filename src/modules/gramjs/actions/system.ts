import { addReducer, getDispatch } from '../../../lib/teactn';

import { GlobalState } from '../../../store/types';
import { GRAMJS_SESSION_ID_KEY } from '../../../config';
import {
  init, provideAuthPhoneNumber, provideAuthCode, provideAuthPassword,
} from '../../../api/gramjs';
import onUpdate from '../updaters';

addReducer('init', (global: GlobalState) => {
  const sessionId = localStorage.getItem(GRAMJS_SESSION_ID_KEY) || '';
  init(onUpdate, sessionId);

  return {
    ...global,
    isInitialized: true,
    authIsSessionRemembered: Boolean(sessionId),
  };
});

addReducer('setAuthPhoneNumber', (global, actions, payload) => {
  const { phoneNumber } = payload!;

  void provideAuthPhoneNumber(phoneNumber);

  return {
    ...global,
    authIsLoading: true,
  };
});

addReducer('setAuthCode', (global, actions, payload) => {
  const { code } = payload!;

  void provideAuthCode(code);

  return {
    ...global,
    authIsLoading: true,
  };
});

addReducer('setAuthPassword', (global, actions, payload) => {
  const { password } = payload!;

  void provideAuthPassword(password);

  return {
    ...global,
    authIsLoading: true,
  };
});

addReducer('signOut', () => {
  localStorage.removeItem(GRAMJS_SESSION_ID_KEY);

  getDispatch().init();
});
