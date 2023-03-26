import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { Tutorial } from '../factory/tutorial.entity'

export class TutorialSeeder implements Seeder {
	public async run(
		dataSource: DataSource,
		factoryManager: SeederFactoryManager
	): Promise<void> {
		const tutorialFactory = factoryManager.get(Tutorial);
		await tutorialFactory.saveMany(5);
	}
}