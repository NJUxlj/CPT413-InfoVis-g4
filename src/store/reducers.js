
import { TOGGLE_SIDE, CHANGE_STEP_FORM_STATE } from './constant'

const initCollapsedState = false //初始化状态
function collapsedReducer(preState = initCollapsedState, action) {
	const { type, data } = action
	switch (type) {
		case TOGGLE_SIDE:
			return !preState
		default:
			return preState
	}
}

const initStepForm = {
	current: 0,
	info: {}
}
function stepFormReducer(preState = initStepForm, action) {
	const { type, data } = action
	switch (type) {
		case CHANGE_STEP_FORM_STATE:
			return {
				current: data.current,
				info: data.info
			}
		default:
			return preState
	}
}

export { collapsedReducer, stepFormReducer }