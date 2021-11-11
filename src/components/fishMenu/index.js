import { useState } from "react";
import { useSelector } from "react-redux";
import InputAttributesForm from "./InputAttributesForm/index";
import CastStep from "./castStep/index";
import FindSpotStep from "./findSpotStep/index";
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
  const { fish } = useSelector((state) => state);
  const [step, setStep] = useState(0);

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

      {step === 0 && <InputAttributesForm />}
      {step === 1 && <FindSpotStep />}
      {step === 2 && <CastStep />}

      {fish?.fish?.size}
    </>
  );
};

export default FishMenu;
