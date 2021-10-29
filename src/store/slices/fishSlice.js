import { createSlice } from '@reduxjs/toolkit';
import {findFishLocation} from '../../futurebackend/fish';

const initialState = {
  fishState:{
    fish: null,
    location: 0,
    fishingSkill: 0,
    equipment: 0}
};

const fishSlice = createSlice({
  name: 'fish',
  initialState,
  reducers: {
    setLocationBonus: (state, action) => {
      state.location = action.payload;
    },
    setFishSkill: (state, action) => {
      state.fishingSkill = action.payload.fishingSkill;
      state.equipment = action.payload.equipment;
    },
  },
});

export const { setLocationBonus, setFishSkill } = fishSlice.actions;
export default fishSlice.reducer;

export const calcLocationBonus = ({ attribute }) => async dispatch => {
  try {
    const locationBonus = await findFishLocation({attribute});
    dispatch(setLocationBonus(locationBonus));
  } catch (e) {
    return console.error(e.message);
  }
}

export const setAttributes = ({ fishingSkill, equipment }) => async dispatch => {
  try {
    dispatch(setFishSkill({fishingSkill, equipment}));
  } catch (e) {
    return console.error(e.message);
  }
}