import { createSlice } from "@reduxjs/toolkit";
import { IEquipment } from "../../../Interfaces/IEquipment";
import { IPlayerAttributes } from "../../../Interfaces/IPlayerAttributes";
import { IFishAttributes } from "../../../Interfaces/IFishAttributes";

interface IFishState {
  fish?: IFishAttributes;
  location: number;
  playerAttributes: IPlayerAttributes;
  equipment: IEquipment;
}

const initialState: IFishState = {
  fish: null,
  location: 0,
  playerAttributes: {
    castSkill: 0,
    fishingSkill: 0,
    locationSkill: 0,
  },
  equipment: {
    line: 0,
    hook: 0,
  },
};

const fishSlice = createSlice({
  name: "fish",
  initialState,
  reducers: {
    setLocationBonus: (state, action) => {
      state.location = action.payload;
    },
    setFishSkill: (state, action) => {
      state.playerAttributes.fishingSkill = action.payload.fishingSkill;
      state.equipment = action.payload.equipment;
    },
  },
});

export const { setLocationBonus, setFishSkill } = fishSlice.actions;
export default fishSlice.reducer;
