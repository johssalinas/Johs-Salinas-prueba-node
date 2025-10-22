import { Model, Column, Table, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Tienda } from './Tienda';
import { Promocion } from './Promocion';

@Table({
  tableName: 'tiendas_promociones',
  timestamps: true,
})
export class TiendasPromociones extends Model {
  @Column({
    type: DataType.MEDIUMINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  estado!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  inicio!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  fin!: Date;

  @ForeignKey(() => Tienda)
  @Column({
    type: DataType.SMALLINT.UNSIGNED,
    allowNull: false,
  })
  id_tienda!: number;

  @ForeignKey(() => Promocion)
  @Column({
    type: DataType.MEDIUMINT.UNSIGNED,
    allowNull: false,
  })
  id_promocion!: number;

  @BelongsTo(() => Tienda)
  tienda!: Tienda;

  @BelongsTo(() => Promocion)
  promocion!: Promocion;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
