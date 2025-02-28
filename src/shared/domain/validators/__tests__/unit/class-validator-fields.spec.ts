import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-fields';
import * as classValidator from 'class-validator';

class StubClassValidatorFields extends ClassValidatorFields<{ field: string }> {}

describe('Class validator fields unit tests', () => {
  it('should initialize errors and validated data variables with null', () => {
    const sut = new StubClassValidatorFields();

    expect(sut.errors).toBeUndefined();
    expect(sut.validatedData).toBeUndefined();
  });

  it('should validate with errors', () => {
    const spyValidateSync = jest.spyOn(classValidator, 'validateSync');
    spyValidateSync.mockReturnValue([{ property: 'field', constraints: { isRequred: 'test error' } }]);

    const sut = new StubClassValidatorFields();

    expect(sut.validate(null)).toBeFalsy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.validatedData).toBeUndefined();
    expect(sut.errors).toStrictEqual({ field: ['test error'] });
  });

  it('should validate without errors', () => {
    const spyValidateSync = jest.spyOn(classValidator, 'validateSync');
    spyValidateSync.mockReturnValue([]);

    const sut = new StubClassValidatorFields();

    expect(sut.validate({ field: 'value' })).toBeTruthy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.validatedData).toStrictEqual({ field: 'value' });
    expect(sut.errors).toBeUndefined();
  });
});
