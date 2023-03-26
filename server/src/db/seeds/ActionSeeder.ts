import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { Action } from '../factory/action.entity'

export class ActionSeeder implements Seeder {
	public async run(
		dataSource: DataSource,
		factoryManager: SeederFactoryManager
	): Promise<void> {
		const actionFactory = factoryManager.get(Action);
		await actionFactory.saveMany(5);
	}
}