import { AddItemCommand } from './addItemCommand';
import { AddItemCommandHandler } from './addItemCommandHandler';
import { CommandBus } from '../commandBus/commandBus';
import { Repository } from '../../infrastructure/test/repository';

describe('AddItem', () => {
    let commandBus;

    beforeEach(() => {
        const mockRepository = new Repository();
        commandBus = new CommandBus({ repository: mockRepository });
        commandBus.register({ Command: AddItemCommand, Handler: AddItemCommandHandler });
    });

    it('adds new item to Todo List with correct Command', () => {
        expect.assertions(1);

        const doTheGroceries = new AddItemCommand({
            label: 'Do the groceries',
            description: 'There\'s nothing left! You have to!',
        });

        expect(commandBus.dispatch({ command: doTheGroceries }))
            .resolves
            .toEqual({ id: '0', label: 'Do the groceries', description: 'There\'s nothing left! You have to!' });
    });
});
