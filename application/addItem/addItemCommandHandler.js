import { TodoItem } from '../../domain/todoItem';

export class AddItemCommandHandler {
    constructor({ repository }) {
        this.repository = repository;
    }

    handle({ command }) {
        try {
            const { label, description } = command;
            const todoItem = new TodoItem({ label, description });
            return Promise.resolve(this.repository.save(todoItem));
        } catch (error) {
            return Promise.reject(new Error(error));
        }
    }
}
