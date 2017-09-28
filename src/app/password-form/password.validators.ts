import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class PasswordValidators {
    static equalPasswords(newPasswordGetter: ()=>string) : ValidatorFn {
        return (confirmedPasswordControl: AbstractControl) => {
            let newPassword = newPasswordGetter();
            let confirmedPassword = confirmedPasswordControl  == null ? "" :  confirmedPasswordControl.value as string;

            if (confirmedPassword){
                if (confirmedPassword != newPassword){
                    return {
                        equalPasswords: true
                    }
                }
            }

            return null;
        };
    }

    static wrongPassword(control: AbstractControl) : Promise<ValidationErrors> | null {
        return new Promise((resolve, reject)=>{
            setTimeout(() =>{
                if (control.value !== '123'){
                    resolve({
                        wrongPassword: true
                    });
                }
                else{
                    resolve(null);
                }
            }, 2000);
        });
    }
}