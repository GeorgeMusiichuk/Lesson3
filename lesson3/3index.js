const pinCodes = ["1111", "5678", "1234", "9999"];
const myPin = "1234";
for (const pinCode of pinCodes) {
    if (pinCode === "1111") {
        console.log("Неверный пин...");
        continue;
    }
    if (pinCode === myPin) {
        console.log("Пинкод найден");
        break;
    }

}