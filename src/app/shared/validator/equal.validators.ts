/*
 * Developed by CQ Inversiones SAS. Copyright ©. 2023 - 2024. All rights reserved.
 * Desarrollado por CQ Inversiones SAS. Copyright ©. 2023 - 2024. Todos los derechos reservados.
 */

/*
 * Project:      pandora-frontend
 * Developed by: Juan David Pelaez Cumbe
 * Date:         4/05/23 - 12:10 AM
 * Module name:  equal.validators
 * File name:    equal.validators.ts
 * IDE:          WebStorm
 */

import {AbstractControl, ValidatorFn} from '@angular/forms';

export const CustomValidators = {
  equals: (otherControl: AbstractControl): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: typeof control.value = control.value;
      const otherValue: typeof otherControl.value = otherControl.value;
      return (otherValue !== null && value !== null && otherValue === value)
        ? null
        : ({
          'notEquals': {
            value,
            otherValue
          }
        });
    };
  }
};

/*
function equalsValidator(otherControl: AbstractControl): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: typeof control.value = control.value;
    const otherValue: typeof otherControl.value = otherControl.value;
    return (otherValue !== null && value !== null && otherValue === value) ? null : ({
      'notEquals': {
        value,
        otherValue
      }
    });
  };
}
*/
