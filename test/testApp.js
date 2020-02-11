var assert = require("chai").assert;

var AppParkingLot = require("../app/index");

describe("App", function() {
  it("should log Slot No. Registration No.", function() {
    var appParkingLotTest = new AppParkingLot();
    assert.equal(appParkingLotTest.status(),"Slot No.    Registration No.")
  });
  
  it("should log  Slot No. Registration Car number", function() {
    var appParkingLotTest = new AppParkingLot();
    appParkingLotTest.createParkingLot(1);
    appParkingLotTest.park("KA-01-HH-1234");
    assert.equal(appParkingLotTest.status(),"Slot No.    Registration No.\n1    KA-01-HH-1234")
  });

  it("should log Status string", function() {
    var appParkingLotTest = new AppParkingLot();
    assert.typeOf(appParkingLotTest.status(),"string")
  });

  it("should log Car Park Allocate slot number 1", function() {
    var appParkingLotTest = new AppParkingLot();
    appParkingLotTest.createParkingLot(1);
    assert.equal(appParkingLotTest.park("KA-01-HH-1234"),"Allocated slot number: 1")
  });
  
  it("should log Car Park full slot", function() {
    var appParkingLotTest = new AppParkingLot();
    appParkingLotTest.createParkingLot(1);
    appParkingLotTest.park("KA-01-HH-1234")
    assert.equal(appParkingLotTest.park("KA-01-HH-1235"),"Sorry, parking lot is full")
  });

  it("should log Car Park is string", function() {
    var appParkingLotTest = new AppParkingLot();
    appParkingLotTest.createParkingLot(1);
    assert.typeOf(appParkingLotTest.park("KA-01-HH-1234"),"string")
  });

  it("should log Car leave and Charge", function() {
    var appParkingLotTest = new AppParkingLot();
    appParkingLotTest.createParkingLot(1);
    appParkingLotTest.park("KA-01-HH-1234")
    assert.equal(appParkingLotTest.leave("KA-01-HH-1234",3),"Registration number: KA-01-HH-1234 with Slot Number 1 is free with Charge 20")
  });
  
  it("should log Registration number not found", function() {
    var appParkingLotTest = new AppParkingLot();
    appParkingLotTest.createParkingLot(1);
    appParkingLotTest.park("KA-01-HH-1234")
    appParkingLotTest.leave("KA-01-HH-1234",3)
    assert.equal(appParkingLotTest.leave("KA-01-HH-1444",3),"Registration number KA-01-HH-1444 not found")
  });
  
  it("should log Car leave and Charge is string", function() {
    var appParkingLotTest = new AppParkingLot();
    appParkingLotTest.createParkingLot(1);
    appParkingLotTest.park("KA-01-HH-1234")
    assert.typeOf(appParkingLotTest.leave("KA-01-HH-1234",3),"string")
  });

  it("should log rule charge", function() {
    var appParkingLotTest = new AppParkingLot();
    assert.equal(appParkingLotTest.ruleCharge(2),10);
  });
  
  it("should log rule charge is number", function() {
    var appParkingLotTest = new AppParkingLot();
    assert.typeOf(appParkingLotTest.ruleCharge(3),"number");
  });

  it("should log empty and push", function() {
    var appParkingLotTest = new AppParkingLot();
    var capacity = ["",""];
    var carNumber = "KH-02-MM-2223";
    assert.equal(appParkingLotTest.checkPositionEmptyAndPush(capacity,carNumber),"Allocated slot number: 1");
  });
  
  it("should log empty and push is string", function() {
    var appParkingLotTest = new AppParkingLot();
    var capacity = ["",""];
    var carNumber = "KH-02-MM-2223";
    assert.typeOf(appParkingLotTest.checkPositionEmptyAndPush(capacity,carNumber),"string");
  });

  it("should log empty and remove", function() {
    var appParkingLotTest = new AppParkingLot();
    var capacity = ["KH-02-MM-2223","KH-02-MM-2224"];
    var carNumber = "KH-02-MM-2223";
    var hours = 6;
    assert.equal(appParkingLotTest.checkPositionEmptyAndRemove(capacity,carNumber,hours),"Registration number: KH-02-MM-2223 with Slot Number 1 is free with Charge 50");
  });

  it("should log empty and remove is string", function() {
    var appParkingLotTest = new AppParkingLot();
    var capacity = ["KH-02-MM-2223","KH-02-MM-2224"];
    var carNumber = "KH-02-MM-2223";
    var hours = 6;
    assert.typeOf(appParkingLotTest.checkPositionEmptyAndRemove(capacity,carNumber,hours),"string");
  });
});
