import { USERS } from '../mocks/users';

export const getUserDetails = (userId) => {
  const user = USERS.find((user) => user.userId === userId);

  if (user) {
    return {
      success: true,
      data: user,
    };
  } else {
    return {
      success: false,
      message: 'User not found',
    };
  }
};
