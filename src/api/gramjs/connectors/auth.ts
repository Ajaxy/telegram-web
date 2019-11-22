import { TdLibUpdateAuthorizationState, UpdateAuthorizationStateType } from '../../tdlib/types';
import { OnUpdate } from '../types/types';

const authPromiseResolvers: {
  resolvePhoneNumber: null | Function;
  resolveCode: null | Function;
  resolvePassword: null | Function;
} = {
  resolvePhoneNumber: null,
  resolveCode: null,
  resolvePassword: null,
};

let onUpdate: OnUpdate;

export function init(_onUpdate: OnUpdate) {
  onUpdate = _onUpdate;
}

export function onRequestPhoneNumber() {
  if (!onUpdate) {
    return null;
  }

  onUpdate(buildAuthState('authorizationStateWaitPhoneNumber'));

  return new Promise((resolve) => {
    authPromiseResolvers.resolvePhoneNumber = resolve;
  });
}

export function onRequestCode() {
  if (!onUpdate) {
    return null;
  }

  onUpdate(buildAuthState('authorizationStateWaitCode'));

  return new Promise((resolve) => {
    authPromiseResolvers.resolveCode = resolve;
  });
}

export function onRequestPassword() {
  if (!onUpdate) {
    return null;
  }

  onUpdate(buildAuthState('authorizationStateWaitPassword'));

  return new Promise((resolve) => {
    authPromiseResolvers.resolvePassword = resolve;
  });
}

export function onAuthReady(sessionId: string) {
  if (!onUpdate) {
    return;
  }

  onUpdate({
    ...buildAuthState('authorizationStateReady'),
    sessionId,
  });
}

export function buildAuthState(authState: UpdateAuthorizationStateType): TdLibUpdateAuthorizationState {
  return {
    '@type': 'updateAuthorizationState',
    authorization_state: {
      '@type': authState,
    },
  };
}

export function provideAuthPhoneNumber(phoneNumber: string) {
  if (!authPromiseResolvers.resolvePhoneNumber) {
    return;
  }

  authPromiseResolvers.resolvePhoneNumber(phoneNumber);
}

export function provideAuthCode(code: string) {
  if (!authPromiseResolvers.resolveCode) {
    return;
  }

  authPromiseResolvers.resolveCode(code);
}

export function provideAuthPassword(password: string) {
  if (!authPromiseResolvers.resolvePassword) {
    return;
  }

  authPromiseResolvers.resolvePassword(password);
}
