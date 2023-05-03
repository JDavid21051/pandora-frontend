/*
 * Developed by CQ Inversiones SAS. Copyright ©. 2023 - 2024. All rights reserved.
 * Desarrollado por CQ Inversiones SAS. Copyright ©. 2023 - 2024. Todos los derechos reservados.
 */

/*
 * Project:      pandora-frontend
 * Developed by: Juan David Pelaez Cumbe
 * Date:         2/05/23 - 10:19 AM
 * Module name:  http-response.enum.ts
 * File name:    http-response.enum.ts
 * IDE:          WebStorm
 */

export enum HttpResponseEnum {
  listed = 200,
  created = 201,
  obtained = HttpResponseEnum.listed,
  putted = HttpResponseEnum.listed,
  patched = HttpResponseEnum.listed,
  deleted = 204
}
