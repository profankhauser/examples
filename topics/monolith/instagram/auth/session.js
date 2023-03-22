const crypto = require("crypto");

module.exports = class Session {
  constructor(user) {
    this.id = crypto.randomUUID();
    this.userId = user.id;
  }

  attributes() {
    return {
      id: this.id,
    };
  }
};
