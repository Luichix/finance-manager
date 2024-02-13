import {
  Table,
  Column,
  Model,
  DataType,
  AutoIncrement,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ allowNull: false, type: DataType.STRING })
  id: string;

  @Column({ allowNull: false, type: DataType.STRING })
  username: string;

  @Column({ allowNull: false, type: DataType.STRING })
  password: string;

  @Column({ allowNull: false, type: DataType.STRING })
  phone: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;
}
