/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate'

export const shorthands: ColumnDefinitions | undefined = undefined

export async function up(pgm: MigrationBuilder): Promise<void> {
	pgm.createTrigger(
		'task',
		'task_modified',
		{
			level: 'ROW',
			operation: 'UPDATE',
			when: 'BEFORE',
			language: 'plpgsql',
			replace: true
		},
		`BEGIN
			NEW.modified = NOW();
			RETURN NEW;
		END`
	)
}

export async function down(pgm: MigrationBuilder): Promise<void> {
	pgm.dropTrigger('task', 'task_modified', { ifExists: true })
}
