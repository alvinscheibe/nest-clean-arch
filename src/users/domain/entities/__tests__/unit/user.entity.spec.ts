import { UserEntity, UserProps } from '@/users/domain/entities/user.entity';
import { faker } from '@faker-js/faker';

describe('UserEntity unit test', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    sut = new UserEntity(props);
  });

  it('should be constructable', () => {
    expect(sut).toBeInstanceOf(UserEntity);
    expect(sut.props).toStrictEqual(props);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });
});
