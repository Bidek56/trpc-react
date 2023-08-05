import { Time } from './time.entity'
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(Time, (faker) => {
    const tm = new Time();
    tm.uv = parseInt(faker.string.numeric(6));
    tm.pv = parseInt(faker.string.numeric(6));
    tm.amt = parseInt(faker.string.numeric(6));
    tm.date = faker.date.future();
    tm.name = faker.string.alpha();
    return tm;
})