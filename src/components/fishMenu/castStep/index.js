import { useSelector, useDispatch } from "react-redux";
import { castLine } from "../../../store/fish/action/index";
import { Button } from "@material-ui/core";

const CastStep = () => {
  const dispatch = useDispatch();
  const { fish } = useSelector((state) => state);

  const handleCastClick = async () => {
    dispatch(
      castLine(
        fish.playerAttributes.fishingSkill,
        fish.playerAttributes.castSkill,
        fish.location.bonus,
        fish.equipment.hook
      )
    );
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        type="button"
        onClick={handleCastClick}
        color="primary"
        variant="contained"
      >
        Jogue a linha
      </Button>
    </div>
  );
};

export default CastStep;
