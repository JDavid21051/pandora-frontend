/*
 * Developed by CQ Inversiones SAS. Copyright ©. 2023 - 2024. All rights reserved.
 * Desarrollado por CQ Inversiones SAS. Copyright ©. 2023 - 2024. Todos los derechos reservados.
 */

/*
 * Project:      pandora-frontend
 * Developed by: Juan David Pelaez Cumbe
 * Date:         19/04/23 - 4:39 PM
 * Module name:  obs-response.interface.ts
 * File name:    obs-response.interface.ts
 * IDE:          WebStorm
 */

export interface ObsResponseInterface<T> {
  status: 0 | 1 | 2,
  body: T | null,
  success: boolean,
  error: string
}
