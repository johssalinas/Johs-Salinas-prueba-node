import { Model, Column, Table, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Producto } from './Producto';
import { Categoria } from './Categoria';

@Table({
  tableName: 'productos_categorias',
  timestamps: true,
})
export class ProductoCategoria extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @ForeignKey(() => Categoria)
  @Column({
    type: DataType.SMALLINT.UNSIGNED,
    allowNull: false,
  })
  id_categoria!: number;

  @ForeignKey(() => Producto)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  id_producto!: number;

  @BelongsTo(() => Categoria)
  categoria!: Categoria;

  @BelongsTo(() => Producto)
  producto!: Producto;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
