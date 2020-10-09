class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    if (
      message.includes("options") ||
      message.includes("help") ||
      message.includes("do for me")
    ) {
      return this.actionProvider.handleOptions({ withAvatar: true });
    }

    if (
      message.includes("talk") ||
      message.includes("speak") ||
      message.includes("real person") ||
      message.includes("person") ||
      message.includes("contact")
    ) {
      return this.actionProvider.handleContactTalk();
    }

    if (message.includes("parking") || message.includes("parkering")) {
      return this.actionProvider.handleOptionsButtons();
    }

    if (message.includes("flights") || message.includes("flight")) {
      return this.actionProvider.handleChoiceOptions();
    }

    if (message.includes("airport")) {
      return this.actionProvider.handleOptionsSelector();
    }

    return this.actionProvider.handleOptions({ withAvatar: true });
  }
}

export default MessageParser;
