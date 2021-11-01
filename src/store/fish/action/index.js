import {setLocationBonus, setFishSkill} from '../slice/index';
import {findFishLocation} from '../../../futurebackend/fish';

export const calcLocationBonus =
  (fishingSkill) =>
  async (dispatch) => {
    try {
      const locationBonus = await findFishLocation(fishingSkill);
      dispatch(setLocationBonus(locationBonus));
    } catch (e) {
      return console.error(e.message);
    }
  };

export const setAttributes =
  ({ fishingSkill, equipment }) =>
  async (dispatch) => {
    try {
      await dispatch(setFishSkill({ fishingSkill, equipment }));
    } catch (e) {
      return console.error(e.message);
    }
  };
