export class CommandBus {
    constructor({ repository }) {
        this.repository = repository;
        this.handlers = [];
    }

    register({ Command, Handler }) {
        this.handlers[Command.name] = new Handler({ repository: this.repository });
    }

    dispatch({ command }) {
        const handler = this.handlers[command.constructor.name];

        if (!handler) {
            return Promise.reject(new Error(`Failed to get an handler for command: ${JSON.stringify(command)}`));
        }

        return handler.handle({ command });
    }
}
