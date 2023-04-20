/*
 * Developed by CQ Inversiones SAS. Copyright ©. 2023 - 2024. All rights reserved.
 * Desarrollado por CQ Inversiones SAS. Copyright ©. 2023 - 2024. Todos los derechos reservados.
 */

/*
 * Project:      pandora-frontend
 * Developed by: Juan David Pelaez Cumbe
 * Date:         20/04/23 - 1:06 AM
 * Module name:  tag-type.const
 * File name:    tag-type.const.ts
 * IDE:          WebStorm
 */

export interface TagInterface {
  S: string;
  M: string;
  L: string;
  XL: string;
}

export const TAG_TYPE_ENUM: { [index: string]: any } = {
  S: '#D7D7D9',
  M: '#F29325',
  L: '#025259',
  XL: '#F7D6D2',
  // 2LX:'#3C5473',
}
