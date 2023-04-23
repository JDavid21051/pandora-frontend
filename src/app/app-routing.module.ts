import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'source', loadChildren: () => import('./source/module/source.module').then(m => m.SourceModule)},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
