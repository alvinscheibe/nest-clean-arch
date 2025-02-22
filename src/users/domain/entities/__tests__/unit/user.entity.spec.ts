import { UserEntity, UserProps } from '@/users/domain/entities/user.entity';
import { userDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';

describe('UserEntity unit test', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = userDataBuilder({});
    sut = new UserEntity(props);
  });

  it('should be constructable', () => {
    expect(sut).toBeInstanceOf(UserEntity);
    expect(sut.props).toStrictEqual(props);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('should get of name field', () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toBe('string');
  });

  it('should set of name field', () => {
    sut['name'] = 'other name';
    expect(sut.props.name).toEqual('other name');
    expect(typeof sut.props.name).toBe('string');
  });

  it('should get of email field', () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toBe('string');
  });

  it('should get of password field', () => {
    expect(sut.props.password).toBeDefined();
    expect(sut.props.password).toEqual(props.password);
    expect(typeof sut.props.password).toBe('string');
  });

  it('should set of password field', () => {
    sut['password'] = 'other_password';
    expect(sut.props.password).toEqual('other_password');
    expect(typeof sut.props.password).toBe('string');
  });

  it('should get of createdAt field', () => {
    expect(sut.props.createdAt).toBeDefined();
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('should update a user', () => {
    sut.update('other name');
    expect(sut.props.name).toEqual('other name');
  });

  it('should update the password', () => {
    sut.updatePassword('other_password');
    expect(sut.props.password).toEqual('other_password');
  });
});
