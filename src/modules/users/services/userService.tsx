export interface IUserService {
  login(username: string, password: string): Promise<boolean>
};

export class UserService implements IUserService {
  login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 5000);
    })
  }
}