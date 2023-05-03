/*
 * Developed by CQ Inversiones SAS. Copyright ©. 2023 - 2024. All rights reserved.
 * Desarrollado por CQ Inversiones SAS. Copyright ©. 2023 - 2024. Todos los derechos reservados.
 */

/*
 * Project:      pandora-frontend
 * Developed by: Juan David Pelaez Cumbe
 * Date:         27/04/23 - 11:26 AM
 * Module name:  result-htttp.interface
 * File name:    result-htttp.interface.ts
 * IDE:          WebStorm
 */

export interface ResultHttpInterface<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T
}
