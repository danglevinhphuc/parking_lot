class parkingLot {
  constructor(capacity, carNumber, hours) {
    // always initialize all instance properties
    this.capacity = capacity ? capacity : [];
    this.carNumber = carNumber ? carNumber : 0;
  }
  createParkingLot(numberCapacity) {
    if (numberCapacity) {
      for (var i = 0; i < numberCapacity; i++) {
        this.capacity.push('');
      }
    }
    return 'Created parking lot with ' +this.capacity.length+ ' slots';
  }
  park(carNumber) {
    this.carNumber = carNumber;
    return this.checkPositionEmptyAndPush(this.capacity, this.carNumber);
  }
  leave(carNumber, hours) {
    this.carNumber = carNumber;
    return this.checkPositionEmptyAndRemove(
      this.capacity,
      this.carNumber,
      hours
    );
  }
  status() {
    // prinf
    var prinf = "Slot No.    Registration No.";
    for (var i = 0; i < this.capacity.length; i++) {
      if (this.capacity[i]) {
        prinf = prinf + '\n'+(i + 1)+'    '+this.capacity[i];
      }
    }
    return prinf;
  }
  checkPositionEmptyAndPush(capacity, carNumber) {
    if (capacity) {
      for (var i = 0; i < capacity.length; i++) {
        if (!capacity[i]) {
          capacity[i] = carNumber;
          return 'Allocated slot number: '+(i + 1);
        }
      }
    }
    return 'Sorry, parking lot is full';
  }
  checkPositionEmptyAndRemove(capacity, carNumber, hours) {
    if (capacity) {
      for (var i = 0; i < capacity.length; i++) {
        if (capacity[i] == carNumber) {
          capacity[i] = "";
          return 'Registration number: '+carNumber+' with Slot Number '+(i + 1)+' is free with Charge '+this.ruleCharge(hours);
        }
      }
    }
    return 'Registration number '+ carNumber+' not found';
  }
  ruleCharge(hours) {
    return hours > 2 ? hours * 10 - 10 : 10;
  }
}
module.exports = parkingLot;
