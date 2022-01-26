const ActionTypes = {
  SET_MARKUP: "SET_MARKUP",
  SET_IN_PROGRESS: "SET_IN_PROGRESS",
  SET_ERROR: "SET_ERROR",
  SET_SELECTED_FRAME: "SET_SELECTED_FRAME",
  RESET_APP_STATE: "RESET_APP_STATE",
};

export default ActionTypes;

export class SetMarkupAction {
  type: string;
  constructor(public payload: string) {
    this.type = ActionTypes.SET_MARKUP;
    this.payload = payload;
  }
}

export class SetInProgressAction {
  type: string;
  constructor() {
    this.type = ActionTypes.SET_IN_PROGRESS;
  }
}

export class SetErrorAction {
  type: string;
  constructor(public payload: string) {
    this.type = ActionTypes.SET_ERROR;
    this.payload = payload;
  }
}

export class SetSelectedFrameAction {
  type: string;
  constructor(public payload: string) {
    this.type = ActionTypes.SET_SELECTED_FRAME;
    this.payload = payload;
  }
}

export class ResetAppStateAction {
  type: string;
  constructor() {
    this.type = ActionTypes.RESET_APP_STATE;
  }
}
