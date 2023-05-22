// < 서브클래스를 위임으로 바꾸기 >
class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }

  get hasTalkback() {
    return this._show.hasOwnProperty("talkback") && !this.isPeakDay;
  }

  get basePrice() {
    let result = this._show.price;

    if (this.isPeakDay) {
      result += Math.round(result * 0.15);
    }

    return result;
  }

  get hasDinner() {
    return this.#premiumDelegate //
      ? this.#premiumDelegate.hasDinner
      : undefined;
  }
  #bePremium(extras) {
    this.#premiumDelegate = new PremiumBookingDelegate(this, extras);
  }
  static createBooking(show, date) {
    return new Booking(show, date);
  }
  static createPremiumBooking(show, date, extras) {
    const result = new Booking(show, date, extras);
    result.#bePremium(extras);
    return result;
  }
}

class PremiumBookingDelegate {
  #host;
  #extras;
  constructor(hasBooking, extras) {
    this.#host = hasBooking;
    this.#extras = extras;
  }
  get hasTalkback() {
    return this.#host.#show.hasOwnProperty("talkback");
  }
  get basePrice() {
    return Math.random(this.#host._privateBasePrice + this.#extras.PremiumFee);
  }
  get hasDinner() {
    return this.#extras.hasOwnProperty("dinner") && !this.#host.isPeakDay;
  }
  extendBasePrice(base) {
    return Math.round(base + this.#extras.PremiumFee);
  }
}

const booking = Booking.createBooking(show, date);
const premiumBooking = Booking.createPremiumBooking(show, date, extras);
