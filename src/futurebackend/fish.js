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

export function castTheLine(fishingSkill, castSkill, locationBonus, hookBonus) {
  const sizeResult =
    randomBetween(0, 20) + fishingSkill + castSkill + locationBonus;
  let size = "Nt";
  if (sizeResult >= 6 && sizeResult <= 10) {
    size = "Sm";
  } else if (sizeResult >= 11 && sizeResult <= 15) {
    size = "Md";
  } else if (sizeResult >= 16 && sizeResult <= 19) {
    size = "Bg";
  } else if (sizeResult >= 20) {
    size = "Ms";
  }

  if (size === "Nt") {
    return { size, rarity: null };
  }

  const rarityResult = randomBetween(0, 20) + fishingSkill + hookBonus;
  let rarity = "Tr";
  if (rarityResult >= 5 && rarityResult <= 11) {
    rarity = "Cm";
  } else if (rarityResult >= 12 && rarityResult <= 14) {
    rarity = "Unc";
  } else if (rarityResult >= 15 && rarityResult <= 17) {
    rarity = "Rr";
  } else if (rarityResult >= 18 && rarityResult <= 19) {
    rarity = "Epc";
  }else if (rarityResult >= 20) {
    rarity = "Lg";
  }

  return { size, rarity };
}
