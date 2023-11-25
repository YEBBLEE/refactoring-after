class CounselType {
  #value;
  #data;
  constructor(data) {
    this.#data = data;
  }
  get value() {
    this.#value = this.classifyType();
    return this.#value;
  }
  classifyType() {
    // todo: this.#data 보고 어뜨케 저뜨케 타입분류하는 로직
    return "종합보험";
  }
}

class CounselTemplate {
  #contractInfo;
  #type;
  constructor(data, type) {
    this.#contractInfo = data;
    this.#type = type;
  }
  get contractInfo() {
    return this.#contractInfo;
  }
  get companyName() {
    return this.contractInfo.company_name;
  }
  get productName() {
    return this.contractInfo.product_name;
  }
  get payTerm() {
    return this.contractInfo.pay_term;
  }
  get coverAge() {
    return this.contractInfo.cover_age;
  }
  get monthlyPay() {
    return this.contractInfo.pay_per_month;
  }
  get type() {
    return this.#type;
  }
  static create(data) {
    const type = new CounselType(contractInfo).value;
    switch (type) {
      case "단독실손":
        return new ActualAloneTemplate(data, type);
      case "종합보험":
        return new GeneralTemplate(data, type);
    }
  }
}

class GeneralTemplate extends CounselTemplate {
  constructor(data, type) {
    super(data, type);
  }
  get text() {
    return `
${this.companyName} ${this.productName} 보험은 ${this.payTerm}납 ${this.coverAge}만기의 보험으로 
월 보험료는 ${this.monthlyPay}원 입니다

주요 핵심 보장은
-암진단비
-뇌혈관
-뇌졸중
-뇌출혈
-허혈성심장
-급성심근경색
-질병/상해 종수술비
을 보장하는 보험입니다.
    `;
  }
}

class ActualAloneTemplate extends CounselTemplate {
  constructor(data, type) {
    super(data, type);
  }
  get text() {
    return `
${this.companyName} ${this.productName} 보험은
주요 핵심 보장은
-암진단비
-뇌혈관
-뇌졸중
-뇌출혈
-허혈성심장
-급성심근경색
-질병/상해 종수술비
을 보장하는 보험이며, "실손의료비 보험이 포함"되어 있는 보험입니다.
    `;
  }
}

const contractInfo = {
  name: "종합보험",
  company_name: "DB손해보험",
  product_name: "짱좋은 청년보험",
  pay_term: "매월납",
  cover_age: "100년",
  pay_per_month: "20000",
};
const template = CounselTemplate.create(contractInfo);
console.log(template.text);
console.log(template.type);
