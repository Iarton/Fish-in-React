import { setLocationBonus, setFishSkill, setFishSize } from "../slice/index";
import { findFishLocation, castTheLine } from "../../../futurebackend/fish";

export const calcLocationBonus = (fishingSkill) => async (dispatch) => {
  try {
    const locationReturn = await findFishLocation(fishingSkill);
    dispatch(setLocationBonus(locationReturn.location));
    return locationReturn.message;
  } catch (e) {
    return console.error(e.message);
  }
};

export const calcFishSize = (fishingSkill, castSkill, locationBonus) => async (dispatch) => {
  try {
    const castReturn = await castTheLine(fishingSkill, castSkill, locationBonus);
    dispatch(setFishSize(castReturn.size));
  } catch (e) {
    return console.error(e.message);
  }
};

export const setAttributes =
  ({ fishingSkill, locationSkill, castSkill, line, hook, bodyOfWater }) =>
  async (dispatch) => {
    try {
      await dispatch(setFishSkill({ fishingSkill, locationSkill, castSkill, line, hook, bodyOfWater }));
    } catch (e) {
      return console.error(e.message);
    }
  };
