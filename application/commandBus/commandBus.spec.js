import { CommandBus } from './commandBus';
import { Repository } from '../../infrastructure/test/repository';
import { MockCommand, MockHandler } from '../../infrastructure/test/commandBus/mocks';

describe('CommandBus', () => {
    let repository;
    let commandBus;

    beforeEach(() => {
        repository = new Repository();
        commandBus = new CommandBus({ repository });
        commandBus.register({ Command: MockCommand, Handler: MockHandler });
    });

    it('dispatches a command for a registered handler', () => {
        expect.assertions(1);
        expect(commandBus.dispatch({ command: new MockCommand() }))
            .resolves
            .toEqual({ id: '1' });
    });

    it('fails to dispatch an unhandled command', () => {
        expect.assertions(1);
        const unhandledCommand = { id: 'a command without handler' };
        expect(commandBus.dispatch({ command: unhandledCommand }))
            .rejects
            .toEqual(new Error(`Failed to get an handler for command: ${JSON.stringify(unhandledCommand)}`));
    });
});
