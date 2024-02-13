import { User } from 'src/entity/user.entity';

export const userProvider = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
