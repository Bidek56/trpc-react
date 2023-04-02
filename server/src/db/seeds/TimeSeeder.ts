import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { Time } from '../factory/time.entity'

export class TimeSeeder implements Seeder {
	public async run(
		dataSource: DataSource,
		factoryManager: SeederFactoryManager
	): Promise<void> {
		const timeFactory = factoryManager.get(Time);
		await timeFactory.saveMany(5);
	}
}