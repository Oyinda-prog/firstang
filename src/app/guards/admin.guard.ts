import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
   let adminRouter = inject(Router)

   let store= localStorage['contactDetails']

    if(store){
      return true;
    }else{
      adminRouter.navigate([''])
     return false
    }
   }

