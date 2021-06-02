import { FormGroup } from "@angular/forms";

declare module '@angular/forms' {
    interface FormGroup {
        validControl(this: FormGroup, controlName: string): boolean;
        validForm(this: FormGroup): boolean;
    }
}

FormGroup.prototype.validControl = function (this: FormGroup, controlName: string): boolean {
    let control = this.get(controlName);
    if (control)
        return (!control.pristine || control.touched) && control.invalid;

    return false;
}

FormGroup.prototype.validForm = function (this: FormGroup): boolean {
    this.markAllAsTouched()
    return this.valid;
}