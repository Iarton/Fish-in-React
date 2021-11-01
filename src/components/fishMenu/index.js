import { useSelector, useDispatch } from "react-redux";
import InputAttributesForm from "./InputAttributesForm/index";
import {calcLocationBonus, calcFishSize} from "../../store/fish/action/index";

const FishMenu = () => {
  const dispatch = useDispatch();
  const { fish } = useSelector((state) => state);

  const handleFindClick = async () => {
    const message = await dispatch(calcLocationBonus(fish.playerAttributes.locationSkill));
    console.log(message);
  };

  const handleCastClick = async () => {
    dispatch(calcFishSize(fish.playerAttributes.fishingSkill, fish.playerAttributes.castSkill, fish.location.bonus));
  };

  const handleCheckState = () => {
    console.log(fish);
  };

  return (
    <>
      <div>
        <h1>Fish</h1>
      </div>
      <div>
        <button type="button" onClick={handleCheckState}>
          Check State
        </button>
      </div>
      <InputAttributesForm />
      <div>
        <button type="button" onClick={handleFindClick}>
          Find a nice Spot
        </button>
      </div>
      <div>
        <button type="button" onClick={handleCastClick}>
          Cast the line
        </button>
      </div>
      <div>
        <button type="button" onClick={handleCastClick}>
          Cast the line
        </button>
      </div>
    </>
  );
};

export default FishMenu;
