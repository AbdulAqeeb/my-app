import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactHrComponent } from '../contact-hr/contact-hr.component';
import { ContactSupportComponent } from '../contact-support/contact-support.component';

const routes: Routes = [
  {path: 'contact-hr', component:ContactHrComponent},
  {path: 'contact-support', component:ContactSupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
