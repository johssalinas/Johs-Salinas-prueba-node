import { Model, Column, Table, DataType, ForeignKey, BelongsTo, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Tienda } from './Tienda';
import { PedidoProducto } from './PedidoProducto';

@Table({
  tableName: 'pedidos',
  timestamps: true,
})
export class Pedido extends Model {
  @Column({
    type: DataType.MEDIUMINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(500),
    allowNull: true,
  })
  instrucciones?: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  entrega_fecha?: Date;

  @Column({
    type: DataType.DECIMAL(12, 3).UNSIGNED,
    allowNull: false,
  })
  valor_productos!: number;

  @Column({
    type: DataType.DECIMAL(10, 3).UNSIGNED,
    allowNull: false,
  })
  valor_envio!: number;

  @Column({
    type: DataType.DECIMAL(12, 3).UNSIGNED,
    allowNull: false,
  })
  valor_descuento!: number;

  @Column({
    type: DataType.DECIMAL(11, 3).UNSIGNED,
    allowNull: false,
  })
  valor_cupon!: number;

  @Column({
    type: DataType.TINYINT.UNSIGNED,
    allowNull: false,
  })
  impuestos!: number;

  @Column({
    type: DataType.DECIMAL(11, 3),
    allowNull: false,
  })
  valor_impuestos!: number;

  @Column({
    type: DataType.DECIMAL(12, 3).UNSIGNED,
    allowNull: false,
  })
  valor_final!: number;

  @Column({
    type: DataType.DECIMAL(3, 2),
    allowNull: true,
  })
  calificacion?: number;

  @ForeignKey(() => Tienda)
  @Column({
    type: DataType.SMALLINT.UNSIGNED,
    allowNull: false,
  })
  id_tienda!: number;

  @Column({
    type: DataType.STRING(160),
    allowNull: true,
  })
  direccion?: string;

  @Column({
    type: DataType.DECIMAL(11, 3),
    allowNull: false,
  })
  valor_comision!: number;

  @Column({
    type: DataType.MEDIUMINT.UNSIGNED,
    allowNull: false,
  })
  id_user!: number;

  @BelongsTo(() => Tienda)
  tienda!: Tienda;

  @HasMany(() => PedidoProducto)
  productos!: PedidoProducto[];

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
