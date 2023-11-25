class CounselTemplate {
  #contractInfo;
  constructor(data) {
    this.#contractInfo = data;
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
  static create(data) {
    function classifyType() {
      // todo: 타입분류하는 로직...
      // return '단독실손';
      return "종합보험";
    }
    const type = classifyType();

    switch (type) {
      case "단독실손":
        return new ActualAloneTemplate(data);
      case "종합보험":
        return new GeneralTemplate(data);
      case "유병자":
        return new SubstandardTemplate(data);
      case "CI보험":
        return new CITemplate(data);
      case "GI보험":
        return new GITemplate(data);
      case "종신보험":
        return new LifeTimeTemplate(data);
      case "운전자보험":
        return new DriverTemplate(data);
    }
  }
}

class GeneralTemplate extends CounselTemplate {
  constructor(data) {
    super(data);
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
  constructor(data) {
    super(data);
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

class SubstandardTemplate extends CounselTemplate {
  constructor(data) {
    super(data);
  }
  get text() {
    return `

    `;
  }
}

class CITemplate extends CounselTemplate {
  constructor(data) {
    super(data);
  }
  get text() {
    return `

    `;
  }
}

class GITemplate extends CounselTemplate {
  constructor(data) {
    super(data);
  }
  get text() {
    return `

    `;
  }
}

class LifeTimeTemplate extends CounselTemplate {
  constructor(data) {
    super(data);
  }
  get text() {
    return `

    `;
  }
}

class DriverTemplate extends CounselTemplate {
  constructor(data) {
    super(data);
  }
  get text() {
    return `

    `;
  }
}
export default CounselTemplate;
