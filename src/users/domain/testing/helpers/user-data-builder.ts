import { UserProps } from '@/users/domain/entities/user.entity';
import { fa, faker } from '@faker-js/faker';

type UserDataBuilderProps = {
  name?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
};

export function userDataBuilder(props: UserDataBuilderProps): UserProps {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.internet.password(),
    createdAt: props.createdAt ?? new Date(),
  };
}
