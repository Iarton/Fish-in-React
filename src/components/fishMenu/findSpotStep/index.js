import { useSelector, useDispatch } from "react-redux";
import { calcLocationBonus } from "../../../store/fish/action/index";
import { Button } from "@material-ui/core";

const FindSpotStep = () => {
  const dispatch = useDispatch();
  const { fish } = useSelector((state) => state);

  const handleFindClick = async () => {
    const message = await dispatch(
      calcLocationBonus(fish.playerAttributes.locationSkill)
    );
    console.log(message);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        type="button"
        onClick={handleFindClick}
        color="primary"
        variant="contained"
        style={{ display: "flex-center" }}
      >
        Procurar Local de Pesca
      </Button>
    </div>
  );
};

export default FindSpotStep;
