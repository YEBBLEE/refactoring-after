import { acquireReading, enrichReading } from "./6-10.js";

const aReading = acquireReading();
const reading = enrichReading(aReading);
const baseCharge = reading.baseCharge;
const taxableCharge = reading.taxableCharge;
console.log(baseCharge);
console.log(taxableCharge);
