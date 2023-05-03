import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoadStrategyService} from './auth';

const routes: Routes = [
  {path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), data: {preload: false}},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: LoadStrategyService})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
