import React, { FC } from '../../../../lib/teact';
import { withGlobal } from '../../../../lib/teactn';

import Button from '../../../../components/ui/Button';
import MessageList from './MessageList';
import MiddleFooter from './MiddleFooter';
import MiddleHeader from './MiddleHeader';
import './MiddleColumn.scss';

type IProps = {
  selectedChatId: number;
  areChatsLoaded: boolean;
};

const MiddleColumn: FC<IProps> = (props) => {
  return (
    <div id="MiddleColumn">
      {renderSelectedChat(props)}
      {renderOpenChatScreen(props)}
    </div>
  );
};

function renderSelectedChat(props: IProps) {
  const { selectedChatId } = props;

  if (!selectedChatId) {
    return null;
  }

  return (
    <div className="messages-layout">
      <MiddleHeader chatId={selectedChatId} />
      <MessageList key={selectedChatId} />
      <MiddleFooter />
    </div>
  );
}

function renderOpenChatScreen(props: IProps) {
  const { selectedChatId, areChatsLoaded } = props;

  if (selectedChatId || !areChatsLoaded) {
    return null;
  }

  return (
    <div className="select-chat-note">
      <i className="icon-chats-placeholder" />
      <h2>
        Open Chat
        <br />
        or create a new one
      </h2>

      <div className="create-chat-buttons">
        <Button className="not-implemented" round color="secondary">
          <i className="icon-new-private" />
          <span>Private</span>
        </Button>
        <Button className="not-implemented" round color="secondary">
          <i className="icon-new-group" />
          <span>Group</span>
        </Button>
        <Button className="not-implemented" round color="secondary">
          <i className="icon-new-channel" />
          <span>Channel</span>
        </Button>
      </div>
    </div>
  );
}

export default withGlobal(
  (global) => {
    const { chats } = global;

    const idsLength = chats.ids.length;
    const areChatsLoaded = idsLength > 0 && Object.keys(chats.byId).length >= idsLength;

    return {
      selectedChatId: global.chats.selectedId,
      areChatsLoaded,
    };
  },
)(MiddleColumn);
