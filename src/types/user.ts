export enum Roles {
  ADMIN = 'ADMIN',
  DEFAULT = 'DEFAULT',
}

export class User {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly role: Roles,
  ) {}
}
