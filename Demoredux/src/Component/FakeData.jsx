import React from "react";
import Chance from "chance";

const chance = new Chance();

export const fakeName = () => {
  return chance.name();
};
export const fakeEmail = () => {
  return chance.email();
};
