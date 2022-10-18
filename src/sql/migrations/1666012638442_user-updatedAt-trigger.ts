/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
	// https://github.com/salsita/node-pg-migrate/issues/387

	pgm.createTrigger('user', 'updateUserUpdatedAt', {
		function: 'updatedUpatedAt',
		level: 'ROW',
		operation: 'UPDATE',
		when: 'BEFORE'
		},
		`BEGIN
		
		`
	)
}

export async function down(pgm: MigrationBuilder): Promise<void> {
	pgm.dropTrigger('user', 'setUpdatedAt', { ifExists: true })
}
