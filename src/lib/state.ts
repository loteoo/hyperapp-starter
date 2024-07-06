import { getLocation, Location } from "/src/lib/router";

export interface State {
  location: Location;
  count: number;
}

export const init: State = {
  location: getLocation(),
  count: 0,
};
