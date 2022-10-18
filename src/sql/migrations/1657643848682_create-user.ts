/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate'

export const shorthands: ColumnDefinitions | undefined = undefined

export async function up(pgm: MigrationBuilder): Promise<void> {
	pgm.func
	pgm.createTable(
		'user',
		{
			id: 'id',
			created: {
				default: pgm.func('current_timestamp'),
				notNull: true,
				type: 'timestamptz'
			},
			modified: {
				// TODO: trigger
				default: pgm.func('current_timestamp'),
				notNull: true,
				type: 'timestamptz'
			},
			username: {
				notNull: true,
				type: 'varchar(32)',
				unique: true
			}
		},
		{
			ifExists: true,
			cascade: false
		}
	)
}

export async function down(pgm: MigrationBuilder): Promise<void> {
	pgm.dropTable('user', { ifExists: true, cascade: false })
}
