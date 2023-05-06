// < 특이 케이스 추가하기 >
// 예제2
class Hotel {
  constructor() {
    this.rooms = [];
  }
  addRoom(roomNumber) {
    this.rooms[roomNumber] = new Room(roomNumber);
  }
  emptyRoom(roomNumber) {
    this.rooms[roomNumber] = new EmptyRoom(roomNumber);
  }

  cleanRooms() {
    this.rooms.forEach((room) => room.clean());
  }
}

class Room {
  constructor(number) {
    this.number = number;
  }
  clean() {
    console.log(`Room ${this.number} cleaned`);
  }
}
class EmptyRoom extends Room {
  clean() {
    console.log(`Room ${this.number} is empty`);
  }
}
const hotel = new Hotel();
hotel.addRoom(0);
hotel.addRoom(1);
hotel.addRoom(2);
hotel.emptyRoom(1);
hotel.cleanRooms();

// 예제 1
// export class Site {
//   constructor(customer) {
//     this._customer = customer;
//   }

//   get customer() {
//     return this._customer === "unknown"
//       ? new UnknownCustomer()
//       : new Customer(this._customer);
//   }
// }
// class UnknownCustomer extends Customer {
//   get name() {
//     return "occupant";
//   }
// }
// export class Customer {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   get billingPlan() {
//     //
//   }

//   set billingPlan(arg) {
//     //
//   }

//   get paymentHistory() {
//     //
//   }
// }

// // 사용하는 부분
// export function customerName(site) {
//   const aCustomer = site.customer;
//   // 더 많은 코드가 여기에 있음
//   customerName = aCustomer.name;
//   return customerName;
// }
