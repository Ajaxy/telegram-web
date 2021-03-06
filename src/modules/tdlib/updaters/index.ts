import { TdLibUpdate } from '../../../api/tdlib/types';

import { DEBUG } from '../../../config';
import * as system from './system';
import * as users from './users';
import * as chats from './chats';
import * as messages from './messages';

export default function onUpdate(update: TdLibUpdate) {
  if (DEBUG) {
    // eslint-disable-next-line no-console
    console.log('[TdLib] UPDATE', update['@type'], { update });
  }

  system.onUpdate(update);
  users.onUpdate(update);
  chats.onUpdate(update);
  messages.onUpdate(update);
}
