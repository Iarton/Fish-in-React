import { useSelector, useDispatch } from "react-redux";
import InputAttributesForm from "./InputAttributesForm/index";
import {calcLocationBonus} from "../../store/fish/action/index";

const FishMenu = () => {
  const dispatch = useDispatch();
  const { fish } = useSelector((state) => state);

  const handleFindClick = () => {
    dispatch(calcLocationBonus(fish.fishingSkill));
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
    </>
  );
};

export default FishMenu;
