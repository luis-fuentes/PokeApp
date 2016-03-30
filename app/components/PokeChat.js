import React from 'react/addons';
import PokeMessage from './PokeMessage';

// const ReactCSSTransitionGroup = React.addons.ReactCSSTransitionGroup;

export default class PokeChat extends React.Component {
  render() {
    return <ul className="pokechat">
     {
      this.props.messages.map((message) => {
        return <PokeMessage key={message.id} message={message} />
      })
     }
    </ul>
  }
}

PokeChat.defaultProps = { messages: [] };
