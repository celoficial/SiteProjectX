import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function ConfirmPasswordValidator(
  controlName: string,
  matchingControlName: string
) {
  return (controls: AbstractControl) => {
    const control = controls.get(controlName);
    const matchingControl = controls.get(matchingControlName);

    if (matchingControl?.errors && matchingControl.errors.matching) {
      return null;
    }

    if (control?.value !== matchingControl?.value) {
      controls.get(matchingControlName)?.setErrors({ matching: true });
      return { matching: true };
    } else {
      return null;
    }
  };
}
