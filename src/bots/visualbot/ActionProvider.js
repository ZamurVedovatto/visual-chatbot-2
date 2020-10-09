class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleContactTalk = () => {
    const message = this.createChatBotMessage(
      "Se você quer conversar com uma pessoa, ligue para 3270-8000",
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );
    this.addMessageToState(message);
  };

  handleSendLink = () => {
    const message = this.createChatBotMessage(
      "Aqui vai o link solicitado.",
      {
        widget: "linkOption",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );
    this.addMessageToState(message);
  };


  handleOptionsSelector = () => {
    const message = this.createChatBotMessage(
      "Você gostaria de alterar o Serviço escolhido?",
      {
        widget: "optionsSelector",
        loading: true,
        terminateLoading: true,
      }
    );
    this.addMessageToState(message);
  };

  handleOptions = (options) => {
    const message = this.createChatBotMessage(
      "Como posso ajuda-lo? A seguir, algumas opções:",
      {
        widget: "options",
        loading: true,
        terminateLoading: true,
        ...options,
      }
    );
    this.addMessageToState(message);
  };

  handleChoiceOptions = () => {
    const message = this.createChatBotMessage(
      "Aqui deve ser exibido duas opções",
      {
        widget: "choice",
        withAvatar: true,
        loading: true,
        terminateLoading: true,
      }
    );
    this.addMessageToState(message);
  };

  handleTypeChoice = (type) => {
    const message = this.createChatBotMessage(
      `Obrigado por escolher ${type}`,
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
        widget: "listOptions",
      }
    );
    this.addMessageToState(message);
  };

  handleChoiceNotFound = () => {
    const message = this.createChatBotMessage(
      `Opção sem retorno.`,
      {
        loading: true,
        terminateLoading: true,
      }
    );
    this.addMessageToState(message);
  };

  handleOptionsButtons = () => {
    const message = this.createChatBotMessage(
      `Escolha uma das seguintes opções:`,
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
        widget: "optionsButtons",
      }
    );
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
