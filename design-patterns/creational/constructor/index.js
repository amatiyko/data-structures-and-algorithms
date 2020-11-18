class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  toString() {
    return `name: ${this.name}; email: ${this.email}.`
  }
}

const user = new User('Andrew', 'andrew@example.com');

console.log(user.toString()); // name: Andrew; email: andrew@example.com.
