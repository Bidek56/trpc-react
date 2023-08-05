import { Tutorial } from './tutorial.entity'
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(Tutorial, (faker) => {
    const tutorial = new Tutorial();
    tutorial.youtubeUrl = faker.string.alpha();
    tutorial.title = faker.string.alpha();
    tutorial.progress = parseInt(faker.string.numeric());
    tutorial.status = 'tutorial';
    return tutorial;
})