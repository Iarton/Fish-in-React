import fishs from "./fishs.json";
import { randomBetween } from "../functions/helpers";

export function fishAction() {
  fishRarity();
  const capture = randomBetween(0, fishs.number - 1);
  const size = randomBetween(
    fishs.fish[capture].minSize,
    fishs.fish[capture].maxSize
  );

  const jaeger = {
    name: fishs.fish[capture].fish,
    size: size,
  };
  return jaeger;
}

function fishRarity() {
  return 1;
}

export function findFishLocation(attribute = 0) {
  const location = randomBetween(0 + attribute, 20);
  console.log(location);
  return location;
}
