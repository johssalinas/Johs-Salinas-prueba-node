import { Model, Column, Table, DataType, HasMany, BelongsToMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { ProductoStock } from './ProductoStock';
import { ProductoCategoria } from './ProductoCategoria';
import { Categoria } from './Categoria';
import { PedidoProducto } from './PedidoProducto';

@Table({
  tableName: 'productos',
  timestamps: true,
})
export class Producto extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
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
    type: DataType.TINYINT.UNSIGNED,
    allowNull: false,
  })
  kit!: number;

  @Column({
    type: DataType.STRING(30),
    allowNull: true,
  })
  barcode?: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  nombre!: string;

  @Column({
    type: DataType.STRING(25),
    allowNull: true,
  })
  presentacion?: string;

  @Column({
    type: DataType.STRING(500),
    allowNull: true,
  })
  descripcion?: string;

  @Column({
    type: DataType.STRING(120),
    allowNull: true,
  })
  foto?: string;

  @Column({
    type: DataType.DECIMAL(6, 2),
    allowNull: false,
  })
  peso!: number;

  @HasMany(() => ProductoStock)
  stocks!: ProductoStock[];

  @HasMany(() => ProductoCategoria)
  productoCategorias!: ProductoCategoria[];

  @BelongsToMany(() => Categoria, () => ProductoCategoria)
  categorias!: Categoria[];

  @HasMany(() => PedidoProducto)
  pedidoProductos!: PedidoProducto[];

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
