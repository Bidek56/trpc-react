import { DataSource } from 'typeorm'
import { runSeeder, Seeder, SeederFactoryManager } from 'typeorm-extension'
import { ActionSeeder } from './ActionSeeder'
import { TutorialSeeder } from './TutorialSeeder'

export class MainSeeder implements Seeder {
	async run(
		dataSource: DataSource,
		factoryManager: SeederFactoryManager
	): Promise<void> {
		await runSeeder(dataSource, ActionSeeder);
		await runSeeder(dataSource, TutorialSeeder);
	}
}