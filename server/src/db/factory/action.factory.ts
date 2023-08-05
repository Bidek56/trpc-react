import { Action } from './action.entity'
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(Action, (faker) => {
    const action = new Action();
    action.tid = parseInt(faker.string.numeric(6));
    action.wid = parseInt(faker.string.numeric(6));
    action.pid = parseInt(faker.string.numeric(6));
    action.aid = parseInt(faker.string.numeric(6));
    action.date = faker.date.recent();
    action.status = faker.string.alpha();
    return action;
})