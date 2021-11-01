import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fish: null,
  location: 0,
  fishingSkill: 0,
  equipment: 0,
};

const fishSlice = createSlice({
  name: "fish",
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
