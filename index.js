var fs = require("fs");

var AppParkingLot = require("./app/index");
fs.readFile("file_inputs.txt", function(err, data) {
  if (err) throw err;
  var arrayData = data.toString().split("\n");
  var parkingLotNew = new AppParkingLot();
  for (i in arrayData) {
    var actionSplit = arrayData[i].split(" ");
    var prinf = "";
    switch (actionSplit[0]) {
      case "create_parking_lot":
      case "create_parking_lot\r":
        prinf = parkingLotNew.createParkingLot(
          actionSplit[1].replace(/\r/, "")
        );
        break;
      case "park":
      case "park\r":
        prinf = parkingLotNew.park(actionSplit[1].replace(/\r/, ""));
        break;
      case "leave":
      case "leave\r":
        prinf = parkingLotNew.leave(
          actionSplit[1].replace(/\r/, ""),
          actionSplit[2].replace(/\r/, "")
        );
        break;
      case "status":
      case "status\r":
        prinf = parkingLotNew.status();
        break;
      default:
        break;
    }
    console.log(prinf);
  }
});
