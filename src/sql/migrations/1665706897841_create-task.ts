/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate'

export const shorthands: ColumnDefinitions | undefined = undefined

export async function up(pgm: MigrationBuilder): Promise<void> {
	pgm.createTable(
		'task',
		{
			id: 'id',
			created: {
				default: pgm.func('current_timestamp'),
				notNull: true,
				type: 'timestamptz'
			},
			description: {
				default: null,
				type: 'varchar(126)'
			},
			modified: {
				// TODO: trigger
				default: pgm.func('current_timestamp'),
				notNull: true,
				type: 'timestamptz'
			},
			title: {
				notNull: true,
				type: 'varchar(32)'
			},
			user_id: {
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
