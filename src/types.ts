export interface UserT {
  firstName: string;
  lastName: string;
}

export interface UserContextT {
  user: UserT;
  LoginUser: (user: UserT) => void;
}
