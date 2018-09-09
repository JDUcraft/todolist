export class MockCommand {}

export class MockHandler {
    handle() {
        return Promise.resolve({ id: '1' });
    }
}
