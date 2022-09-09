import { State, Getters, Actions, Mutations, MutationsInterface } from './types';

export const state = (): State => ({
	files: [],
  activeFile: undefined,
  activeStep: 1,
  hue: false,
});

export const getters: Getters = {
	files: state => state.files,
	activeFile: state => state.activeFile,
	activeStep: state => state.activeStep,
	hue: state => state.hue,
};

export const mutations: MutationsInterface = {
	[Mutations.ADD_FILE] (state, file) {
    if(!!file && !state.files.some(f => f.name === file.name))
     state.files.push(file)
	},
	[Mutations.CLEAR_FILES] (state) {
    state.files = []
	},
	[Mutations.SET_ACTIVE_FILE] (state, file) {
    state.activeFile = file
	},
	[Mutations.REMOVE_FILE] (state, filename) {
    const index = state.files.findIndex(f => f.name === filename)
    if( index && index >= 0 ) state.files.splice(index)
	},
  [Mutations.SET_ACTIVE_STEP] (state, step) {
    state.activeStep = step
  },
  [Mutations.TOGGLE_HUE] (state, val) {
    state.hue = val
  },
};

export const actions = {
  [Actions.CHANGE_ACTIVE_FILE]({commit}: any, p: File) {
    commit(Mutations.SET_ACTIVE_FILE, p)
    commit(Mutations.SET_ACTIVE_STEP, 2)
  },
  [Actions.RESET]({commit}: any) {
    commit(Mutations.CLEAR_FILES)
    commit(Mutations.SET_ACTIVE_FILE, undefined)
    commit(Mutations.SET_ACTIVE_STEP, 1)
  },
};
