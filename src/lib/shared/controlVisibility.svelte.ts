export const controlVisibilityContextKey = Symbol('controlVisibility');

export class ControlVisibility {
  setting: boolean = $state(true);
}
