// < 필드 옮기기 >
class Account {
  constructor(number, type) {
    this._number = number;
    this._type = type;
  }
  get interestRate() {
    return this._type.interestRate;
  }
}

class AccountType {
  constructor(nameString) {
    this._name = nameString;
    this._interestRate = interestRate;
  }
  get interestRate() {
    return this._interestRate;
  }
}

const account = new Account(589910123, new AccountType("standard", 4.3));
