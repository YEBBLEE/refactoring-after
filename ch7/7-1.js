// < 레코드 캡슐화하기 >
class Organization {
  #name;
  #country;

  constructor(name, country) {
    this.#name = name;
    this.#country = country;
  }
  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get country() {
    return this.#country;
  }
  set country(value) {
    this.#country = value;
  }
}
const organization = new Organization("Acme Gooseberries", "GB");
organization.name = "yebin";
console.log(organization.name);
console.log(organization.country);
