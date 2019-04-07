export const LOAD_DATA = 'LOAD_DATA'
export const SET_DATA = 'SET_DATA'
export const DISPLAY_USER = 'DISPLAY_USER'
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY'

export const loadData = () => ({
  type: LOAD_DATA
});

export const setData = payload => ({
  type: SET_DATA,
  payload
})

export const displayUser = payload => ({
  type: DISPLAY_USER,
  payload
});

export const clearDisplay = () => ({
  type: CLEAR_DISPLAY
});
