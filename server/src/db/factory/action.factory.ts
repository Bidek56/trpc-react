import { Action } from './action.entity'
import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';

export default setSeederFactory(Action, (faker) => {
    const action = new Action();
    action.tid = parseInt(faker.random.numeric(6));
    action.wid = parseInt(faker.random.numeric(6));
    action.pid = parseInt(faker.random.numeric(6));
    action.aid = parseInt(faker.random.numeric(6));
    action.date = faker.date.recent();
    action.status = faker.random.word();
    return action;
})