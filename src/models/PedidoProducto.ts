import { Model, Column, Table, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Pedido } from './Pedido';
import { Producto } from './Producto';
import { Promocion } from './Promocion';

@Table({
  tableName: 'pedidos_productos',
  timestamps: true,
})
export class PedidoProducto extends Model {
  @Column({
    type: DataType.MEDIUMINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.DECIMAL(9, 3),
    allowNull: false,
  })
  cantidad!: number;

  @Column({
    type: DataType.DECIMAL(11, 3).UNSIGNED,
    allowNull: false,
  })
  valor_unitario!: number;

  @Column({
    type: DataType.DECIMAL(11, 3).UNSIGNED,
    allowNull: true,
  })
  valor_unitario_promocion?: number;

  @Column({
    type: DataType.DECIMAL(12, 3).UNSIGNED,
    allowNull: false,
  })
  total_teorico!: number;

  @Column({
    type: DataType.DECIMAL(12, 3).UNSIGNED,
    allowNull: false,
  })
  total_final!: number;

  @ForeignKey(() => Promocion)
  @Column({
    type: DataType.MEDIUMINT.UNSIGNED,
    allowNull: true,
  })
  id_promocion?: number;

  @ForeignKey(() => Producto)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  id_producto!: number;

  @ForeignKey(() => Pedido)
  @Column({
    type: DataType.MEDIUMINT.UNSIGNED,
    allowNull: false,
  })
  id_pedido!: number;

  @BelongsTo(() => Pedido)
  pedido!: Pedido;

  @BelongsTo(() => Producto)
  producto!: Producto;

  @BelongsTo(() => Promocion)
  promocion?: Promocion;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
