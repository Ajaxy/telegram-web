import { ApiMessage } from './messages';
import { ApiFile, ApiFileLocation } from './files';

export interface ApiChat {
  id: number;
  type: {
    '@type': 'chatTypePrivate' | 'chatTypeSecret' | 'chatTypeBasicGroup' | 'chatTypeSupergroup';
  };
  title?: string;
  last_message?: ApiMessage;
  last_read_outbox_message_id: number;
  last_read_inbox_message_id: number;
  unread_count: number;
  unread_mention_count: number;
  order: string;
  is_pinned: boolean;
  photo?: {
    small: ApiFile;
    big: ApiFile;
  };
  photo_locations?: {
    small: ApiFileLocation;
    big: ApiFileLocation;
  };
}

export interface ApiPrivateChat extends ApiChat {
  type: {
    '@type': 'chatTypePrivate' | 'chatTypeSecret';
    user_id: number;
  };
}
