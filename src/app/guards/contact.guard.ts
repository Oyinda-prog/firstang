import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const contactGuard: CanActivateFn = (route, state) => {
  let user=JSON.parse(localStorage.getItem('currentuser')!)
  let routes = inject(Router)
  if(user){
    routes.navigate(['dashboard'])
  }
  return false;
};
