function main(arr) {
  let passengersInTrainArr = arr.shift().split(" ").map(Number);
  let maxCapacity = +arr.shift();

  for (let i = 0; i < arr.length; i++) {
    let commandNum = arr[i].split(" ");
    if (commandNum[0] === "Add") {
      passengersInTrainArr.push(Number(commandNum[1]));
    } else {
      for (let a = 0; a < passengersInTrainArr.length; a++) {
        if (Number(commandNum[0]) + passengersInTrainArr[a] <= maxCapacity) {
          passengersInTrainArr[a] += Number(commandNum[0]);
          break;
        }
      }
    }
  }
  console.log(passengersInTrainArr.join(' '));
}
