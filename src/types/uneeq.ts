declare global {
  interface Window {
    uneeqInteractionsOptions: any;
    uneeqStartSession?: () => void;
    uneeqStopSpeaking?: () => void;
    uneeqAsk: (utterance: string) => void;
    uneeqSetLayoutMode?: (layoutMode: LayoutMode) => void;
    uneeqSetShowUserInputInterface?: (show: boolean) => void;
    uneeqUpdateDisplayContent?: (content: string | null) => void;
  }
  const uneeq: {
    init: () => void;
    postToFrame: (message: string, value: unknown) => void;
  };
}

export interface UneeqInteractionsOptions {
  /**
   * The unique personas share Id. This value can be found in the Creator portal, or provided to you by your customer success representative.
   */
  personaShareId: string;
  /**
   * Should the call to action (DH preview with message) be displayed at the bottom of the page.
   */
  displayCallToAction?: boolean;
  /**
   * When using split screen layout mode, this will determine whether the left or right side of the page is used to display the digital human.
   *
   * Default Value: true
   */
  position?: "right" | "left";
  /**
   * Determines whether UneeQ should render content on screen. If the value is true, then UneeQ will render the content on screen when it is sent from the NLP system. When the value is false, then the content will not be rendered on screen. Using false may be desirable if you wish to render content in a different section of your website and allows you more fine tuned control. See //TODO event handling page.
   *
   * Default Value: true
   */
  renderContent?: boolean;
  /**
   * The text to be displayed inside the call to action.
   *
   * Default Value: "👋 Hi. Is there anything I can help you with?"
   */
  callToActionText?: string;
  /**
   * Where the digital human should be positioned.
   */
  cameraPosition?: {
    camera_position_vertical: number;
    camera_position_horizontal: number;
    camera_position_distance: number;
  };
  /**
   * String of CSS to be applied to the digital human frame. Allows client to inject their own CSS styling rules and overrides. Making large changes via customStyles is discouraged as the Hosted Experience interface is subject to change. For example, the class name you might rely on for as a css selector could change without warning.
   *
   * Default Value: null
   */
  customStyles?: string;
  /**
   * Whether the digital human should render a background as part of the video stream. If false, then the client may position their own background behind the digital human.
   */
  enableTransparentBackground?: boolean;
  /**
   * Text to be displayed when the digital human cannot be started.
   *
   * Default Value: "⚠ Sorry, I am busy right now. Please try again later."
   */
  errorText?: string;
  /**
   * If your NLP has a 'welcome' message, then this will be triggered at session start, if this option is set to true.
   *
   * Default Value: false
   */
  playWelcome?: boolean;
  /**
   * The screen width when the layout should be switched into mobile view.
   */
  mobileViewWidthBreakpoint?: number;
  /**
   * Which layout mode should the session be started in. Note: the layout mode can be changed during a session by using the uneeqSetLayoutMode method.
   */
  layoutMode: LayoutMode;
  /**
   * If true, access to the users microphone will be requested as soon as the session starts (if not accepted/declined previously).
   */
  enableMicrophone?: boolean;
  /**
   * If true, the voice and text input component will be shown when the session starts and does not need to be turned on during the session using uneeqSetShowUserInputInterface() method.
   */
  showUserInputInterface?: boolean;
  /**
   * The value provided will be used as the text input placeholder text, when displaying the user input interface.
   */
  textInputPlaceholder?: string;
  /**
   * The languageStrings property can be defined to update any of the text displayed within the Hosted Experience interface. Language strings object should contain values corresponding to ISO-639-1 languages, e.g. en, es, ja, etc. Within each language code value, provide an object containing the key of the value you want to update. Additionally a specific locale/region may be provided for more precise language targetting, e.g. en-US, en-GB, de-DE, pt-BR.
   */
  languageStrings?: { [key: string]: unknown };
  /**
   * Undocumented feature where you can pass custom data to be added to the `fm-custom-data` prop in the token request
   */
  customData?: { [key: string]: unknown };
  /**
   * Set whether the digital human frame should be initialised on page load. When this value is true the digital human frame will be initialized when the page is loaded (via a page load event handler). When this value is false , then the digital human frame will not be added to the page on page load.
   */
  initLoadHandler?: boolean;
  voiceInputMode?: "SPEECH_RECOGNITION" | "PUSH_TO_TALK";
  backgroundImageUrl?: string;
  showClosedCaptions?: boolean;
}

export enum UneeqSessionState {
  Initial = "Initial",
  WaitingToStart = "WaitingToStart",
  AvatarUnavailable = "AvatarUnavailable",
  MajorError = "MajorError",
  Live = "Live",
  Paused = "Paused",
  Ended = "Ended",
}

export interface UneeqSessionMessage extends HostedUneeqMessage {
  uneeqMessageType: "SessionStateUpdate";
  state: UneeqSessionState;
  live: boolean;
}

export interface AvatarAnswerMessage extends HostedUneeqMessage {
  uneeqMessageType: "AvatarAnswer";
  answer: string;
  answerAvatar: string;
}

type UneeqMessageType =
  | "SessionStateUpdate"
  | "AvatarAnswer"
  | "StartedSpeaking"
  | "FinishedSpeaking"
  | "ReadyToStart";

export interface HostedUneeqMessage {
  uneeqMessageType: UneeqMessageType;
}

export interface UneeqEvent extends Event {
  detail: HostedUneeqMessage;
}

export type LayoutMode = "overlay" | "splitScreen" | "fullScreen" | "contained";

export interface MondlyCustomData {
  minimiseTutor?: boolean;
  maximiseTutor?: boolean;
  phraseForInterlocutor?: string;
  phraseForTutor?: string;
  sessionIdJwt?: string;
}

export type AvatarInteractionState =
  | "idle"
  | "listening"
  | "thinking"
  | "disabled";
