function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => key in obj);
}

const subject = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(subject, ["name", "age"]));