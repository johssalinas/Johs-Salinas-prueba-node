import { Model, Column, Table, DataType, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { ProductoStock } from './ProductoStock';
import { Pedido } from './Pedido';
import { TiendasPromociones } from './TiendasPromociones';

@Table({
  tableName: 'tiendas',
  timestamps: true,
})
export class Tienda extends Model {
  @Column({
    type: DataType.SMALLINT.UNSIGNED,
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
    type: DataType.STRING(30),
    allowNull: false,
  })
  nombre!: string;

  @Column({
    type: DataType.STRING(500),
    allowNull: true,
  })
  descripcion?: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: true,
  })
  telefono?: string;

  @Column({
    type: DataType.STRING(120),
    allowNull: true,
  })
  direccion?: string;

  @Column({
    type: DataType.STRING(40),
    allowNull: true,
  })
  direccion_anexo?: string;

  @Column({
    type: DataType.STRING(25),
    allowNull: true,
  })
  direccion_barrio?: string;

  @Column({
    type: DataType.DECIMAL(3, 2),
    allowNull: true,
  })
  calificacion?: number;

  @Column({
    type: DataType.MEDIUMINT.UNSIGNED,
    allowNull: true,
  })
  calificacion_cantidad?: number;

  @Column({
    type: DataType.TINYINT.UNSIGNED,
    allowNull: true,
  })
  impuestos?: number;

  @Column({
    type: DataType.STRING(21),
    allowNull: true,
  })
  dias_trabajados?: string;

  @HasMany(() => ProductoStock)
  stocks!: ProductoStock[];

  @HasMany(() => Pedido)
  pedidos!: Pedido[];

  @HasMany(() => TiendasPromociones)
  promociones!: TiendasPromociones[];

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
