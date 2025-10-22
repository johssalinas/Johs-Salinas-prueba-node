import { Model, Column, Table, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Producto } from './Producto';
import { Tienda } from './Tienda';

@Table({
  tableName: 'productos_stocks',
  timestamps: true,
})
export class ProductoStock extends Model {
  @Column({
    type: DataType.MEDIUMINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.DECIMAL(8, 3),
    allowNull: false,
  })
  cantidad!: number;

  @ForeignKey(() => Tienda)
  @Column({
    type: DataType.SMALLINT.UNSIGNED,
    allowNull: false,
  })
  id_tienda!: number;

  @ForeignKey(() => Producto)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  id_producto!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  fecha_ingreso!: Date;

  @BelongsTo(() => Tienda)
  tienda!: Tienda;

  @BelongsTo(() => Producto)
  producto!: Producto;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
