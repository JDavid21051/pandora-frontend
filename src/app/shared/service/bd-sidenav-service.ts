/*
 * Developed by CQ Inversiones SAS. Copyright ©. 2023 - 2024. All rights reserved.
 * Desarrollado por CQ Inversiones SAS. Copyright ©. 2023 - 2024. Todos los derechos reservados.
 */

/*
 * Project:      pandora-frontend
 * Developed by: Juan David Pelaez Cumbe
 * Date:         19/04/23 - 12:44 AM
 * Module name:  bd-sidenav-service.ts
 * File name:    bd-sidenav-service.ts
 * IDE:          WebStorm
 */

import { Injectable } from '@angular/core';
import {MatDrawer, MatDrawerToggleResult} from '@angular/material/sidenav';

@Injectable()
export class BdSidenavService {
  _sidenav!: MatDrawer;

  public setSidenav(value: MatDrawer): void {
    this._sidenav = value;
  }

  public open() {
    return this._sidenav.open();
  }


  public close(): Promise<MatDrawerToggleResult> {
    return this._sidenav.close();
  }

  public toggle(): void {
    this._sidenav.toggle().then();
  }
}
