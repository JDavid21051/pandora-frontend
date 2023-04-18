/*
 * Developed by CQ Inversiones SAS. Copyright ©. 2023 - 2024. All rights reserved.
 * Desarrollado por CQ Inversiones SAS. Copyright ©. 2023 - 2024. Todos los derechos reservados.
 */

/*
 * Project:      pandora-frontend
 * Developed by: Juan David Pelaez Cumbe
 * Date:         17/04/23 - 11:26 PM
 * Module name:  main.route.ts
 * File name:    main.route.ts
 * IDE:          WebStorm
 */

import {Routes} from '@angular/router';
import {MainComponent} from "./main.component";

export const MAIN_ROUTE_CONST: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
]
