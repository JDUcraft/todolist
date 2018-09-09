export class Repository {
    save({ ...item }) {
        if (!this.items) {
            this.items = [];
        }
        this.items.push(item);
        Object.keys(this.items).forEach((key) => {
            this.items[key].id = key;
        });
        return item;
    }
}
