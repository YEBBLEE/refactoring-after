// < 레코드 캡슐화하기 >
// 캡슐화 : 내부 구현사항을 숨기고, 외부에서 필요한 사항들만 공개

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
