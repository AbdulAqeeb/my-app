import { CanDeactivateFn } from '@angular/router';

export const notifyGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  if(confirm("if you go to back your progress will not save! Are you wiiling to go back")){
    return true;
  }
  else{
    return false;
  }
};
