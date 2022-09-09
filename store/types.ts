export interface State {
	files: File[]
  activeStep: number
  activeFile?: File
  hue: boolean
}

export interface Getters {
	files: (state: State) => File[];
	activeFile: (state: State) => File | undefined;
	activeStep: (state: State) => number;
	hue: (state: State) => boolean;
}

export enum Mutations {
	'ADD_FILE' = 'ADD_FILE',
	'CLEAR_FILES' = 'CLEAR_FILES',
	'REMOVE_FILE' = 'REMOVE_FILE',
	'SET_ACTIVE_FILE' = 'SET_ACTIVE_FILE',
	'SET_ACTIVE_STEP' = 'SET_ACTIVE_STEP',
	'TOGGLE_HUE' = 'TOGGLE_HUE',
}

export interface MutationsInterface {
	[Mutations.ADD_FILE](s: State, p: File): void;
	[Mutations.CLEAR_FILES](s: State): void;
	[Mutations.SET_ACTIVE_FILE](s: State, p: File): void;
	[Mutations.REMOVE_FILE](s: State, p: string): void;
	[Mutations.SET_ACTIVE_STEP](s: State, p: number): void;
	[Mutations.TOGGLE_HUE](s: State, p: boolean): void;
}

export enum Actions {
  'CHANGE_ACTIVE_FILE' = 'CHANGE_ACTIVE_FILE',
  'RESET' = 'RESET',
}

export interface ActionsInterface {
  [Actions.CHANGE_ACTIVE_FILE](s: any, p: File): void;
  [Actions.RESET](s: any): void;
}

