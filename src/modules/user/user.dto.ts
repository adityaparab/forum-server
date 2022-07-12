export class BaseUserDto {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  deletedAt?: Date;
}

export class CreateUserDto extends BaseUserDto {}

export class UpdateUserDto extends BaseUserDto {
  completedAt: Date;
}
