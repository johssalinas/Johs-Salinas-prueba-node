import { Model, Column, Table, DataType, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { ProductoCategoria } from './ProductoCategoria';

@Table({
  tableName: 'categorias',
  timestamps: true,
})
export class Categoria extends Model {
  @Column({
    type: DataType.SMALLINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
  })
  nombre!: string;

  @Column({
    type: DataType.TINYINT.UNSIGNED,
    allowNull: false,
  })
  adultos!: number;

  @HasMany(() => ProductoCategoria)
  productos!: ProductoCategoria[];

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
