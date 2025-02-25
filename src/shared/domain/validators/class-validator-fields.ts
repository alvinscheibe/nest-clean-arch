import { FieldsError, ValidatorFieldsInterface } from '@/shared/domain/validators/validator-felds.interface';
import { validateSync } from 'class-validator';

export abstract class ClassValidatorFields<ValidatedProps> implements ValidatorFieldsInterface<ValidatedProps> {
  errors: FieldsError;
  validatedData: ValidatedProps;

  validate(data: any): boolean {
    const errors = validateSync(data);

    if (errors.length) {
      this.errors = {};

      for (const error of errors) {
        const field = error.property;
        this.errors[field] = Object.values(error.constraints || []);
      }
    } else this.validatedData = data;

    return !errors.length;
  }
}
