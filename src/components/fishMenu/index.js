import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InputAttributesForm from "./InputAttributesForm/index";
import { calcLocationBonus, castLine } from "../../store/fish/action/index";
import {
  AccessibilityNew,
  LocationSearching,
  Gesture,
  BluetoothSearching,
} from "@material-ui/icons";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from "@material-ui/core";

const FishMenu = () => {
  const dispatch = useDispatch();
  const { fish } = useSelector((state) => state);
  const [step, setStep] = useState(0);

  const handleFindClick = async () => {
    const message = await dispatch(
      calcLocationBonus(fish.playerAttributes.locationSkill)
    );
    console.log(message);
  };

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

  const handleCheckState = () => {
    console.log(fish);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Fish</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          type="button"
          onClick={handleCheckState}
          color="primary"
          variant="contained"
        >
          Check State
        </Button>
      </div>
      <BottomNavigation
        value={step}
        onChange={(event, newValue) => {
          setStep(newValue);
        }}
        showLabels
        style={{ marginBottom: "20px", marginTop: "20px" }}
      >
        <BottomNavigationAction label="Atributos" icon={<AccessibilityNew />} />
        <BottomNavigationAction
          label="Procurar Lugar"
          icon={<LocationSearching />}
        />
        <BottomNavigationAction label="Jogar a isca" icon={<Gesture />} />
        <BottomNavigationAction label="Pescar" icon={<BluetoothSearching />} />
      </BottomNavigation>

      {step === 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InputAttributesForm />
        </div>
      )}
      {step === 1 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="button"
            onClick={handleFindClick}
            color="primary"
            variant="contained"
            style={{ display: "flex-center" }}
          >
            Find a nice Spot
          </Button>
        </div>
      )}
      {step === 2 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="button"
            onClick={handleCastClick}
            color="primary"
            variant="contained"
          >
            Cast the line
          </Button>
        </div>
      )}

      {fish?.fish?.size}
    </>
  );
};

export default FishMenu;
