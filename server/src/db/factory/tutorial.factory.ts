import { Tutorial } from './tutorial.entity'
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(Tutorial, (faker) => {
    const tutorial = new Tutorial();
    tutorial.youtubeUrl = faker.random.word();
    tutorial.title = faker.random.word();
    tutorial.progress = parseInt(faker.random.numeric());
    tutorial.status = 'tutorial';
    return tutorial;
})