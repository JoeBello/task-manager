/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate'

export const shorthands: ColumnDefinitions | undefined = undefined

export async function up(pgm: MigrationBuilder): Promise<void> {
	pgm.createTable(
		'task',
		{
			id: 'id',
			createdAt: {
				default: pgm.func('current_timestamp'),
				notNull: true,
				type: 'timestamp'
			},
			description: {
				default: null,
				type: 'varchar(126)'
			},
			updatedAt: {
				// TODO: trigger
				default: pgm.func('current_timestamp'),
				notNull: true,
				type: 'timestamp'
			},
			title: {
				notNull: true,
				type: 'varchar(32)'
			},
			userId: {
				notNull: true,
				onDelete: 'CASCADE',
				references: '"user"',
				type: 'integer'
			}
		},
		{
			ifExists: true,
			cascade: false
		}
	)
}

export async function down(pgm: MigrationBuilder): Promise<void> {
	pgm.dropTable('task', { ifExists: true, cascade: false })
}
