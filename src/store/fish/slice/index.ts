import { createSlice } from "@reduxjs/toolkit";
import { IEquipment } from "../../../Interfaces/IEquipment";
import { IPlayerAttributes } from "../../../Interfaces/IPlayerAttributes";
import { IFishAttributes } from "../../../Interfaces/IFishAttributes";
import { ILocation } from "../../../Interfaces/ILocation";

interface IFishState {
  fish: IFishAttributes;
  location: ILocation;
  playerAttributes: IPlayerAttributes;
  equipment: IEquipment;
}

const initialState: IFishState = {
  fish: {
    id: undefined,
    name:undefined,
    rarity: undefined,
    size: undefined,
    strentgh: undefined
  },
  location: { bonus: 0, id: undefined, name: undefined },
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
      state.location.bonus = action.payload;
    },
    setFishSkill: (state, action) => {
      state.playerAttributes.fishingSkill = action.payload.fishingSkill;
      state.playerAttributes.locationSkill = action.payload.locationSkill;
      state.playerAttributes.castSkill = action.payload.castSkill;
      state.equipment.line = action.payload.line;
      state.equipment.hook = action.payload.hook;
      state.location.id = action.payload.bodyOfWater;
    },
    setFishSize: (state, action) => {
      state.fish.size = action.payload;
    },
  },
});

export const { setLocationBonus, setFishSkill, setFishSize } = fishSlice.actions;
export default fishSlice.reducer;
