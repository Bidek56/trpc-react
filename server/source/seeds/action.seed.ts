import { Action } from '../entity/action.entity'
import { setSeederFactory } from 'typeorm-extension';
// import { faker } from '@faker-js/faker';

export default setSeederFactory(Action, (faker) => {
    const action = new Action();
    // action.id = faker.datatype.uuid();
    // action.aid = faker.random.numeric(3);
    // user.firstName = faker.name.firstName('male');
    // user.lastName = faker.name.lastName('male');
    // user.email = faker.internet.email(user.firstName, user.lastName);

    return action;
})