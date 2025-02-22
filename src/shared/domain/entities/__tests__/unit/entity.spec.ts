import { Entity } from '@/shared/domain/entities/entity';
import { validate as uuidValidate } from 'uuid';

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('should set props and id', () => {
    const props: StubProps = {
      prop1: 'value',
      prop2: 1,
    };

    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  });

  it('should be accept a valid uuid', () => {
    const props: StubProps = {
      prop1: 'value',
      prop2: 1,
    };
    const id = '550e8400-e29b-41d4-a716-446655440000';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  });

  it('should convert entity to a object', () => {
    const props: StubProps = {
      prop1: 'value',
      prop2: 1,
    };
    const id = '550e8400-e29b-41d4-a716-446655440000';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});
