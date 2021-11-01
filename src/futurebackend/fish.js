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
  const location = randomBetween(0, 20) + attribute;
  return { location: location, message: "Lugar" };
}

export function castTheLine(fishingSkill, castSkill, locationBonus) {
  const castResult =
    randomBetween(0, 20) + fishingSkill + castSkill + locationBonus;

  if (castResult >= 6 && castResult <= 10) {
    return { size: "Sm" };
  } else if (castResult >= 11 && castResult <= 15) {
    return { size: "Md" };
  } else if (castResult >= 16 && castResult <= 19) {
    return { size: "Bg" };
  } else if (castResult >= 20) {
    return { size: "Ms" };
  }

  return { size: "Tr" };
}
