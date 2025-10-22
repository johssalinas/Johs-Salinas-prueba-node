import { Model, Column, Table, DataType, HasMany, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { TiendasPromociones } from './TiendasPromociones';

@Table({
  tableName: 'promociones',
  timestamps: true,
})
export class Promocion extends Model {
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
    type: DataType.STRING(40),
    allowNull: false,
  })
  nombre!: string;

  @Column({
    type: DataType.STRING(120),
    allowNull: true,
  })
  imagen?: string;

  @Column({
    type: DataType.TINYINT.UNSIGNED,
    allowNull: false,
  })
  porcentaje!: number;

  @Column({
    type: DataType.STRING(21),
    allowNull: true,
  })
  dias_semana?: string;

  @HasMany(() => TiendasPromociones)
  tiendas!: TiendasPromociones[];

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}
