export type FieldsError = {
  [field: string]: string[];
};

export interface ValidatorFieldsInterface<ValidatedProps> {
  errors: FieldsError;
  validatedData: ValidatedProps;
  validate(data: any): boolean;
}
