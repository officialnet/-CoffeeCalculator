function calculate() {
    const coffeeAmount = document.getElementById("coffeeAmount").value;
    const type = document.getElementById("type").value;

    if (coffeeAmount === "") {
        document.getElementById("result").innerHTML = "الرجاء إدخال كمية البن.";
        return;
    }

    let waterAmount, iceAmount;
    
    if (type === "hot") {
        waterAmount = coffeeAmount * 16;
        document.getElementById("result").innerHTML = `الماء المطلوب: ${waterAmount.toFixed(2)} مل`;
    } else if (type === "iced") {
        waterAmount = coffeeAmount * 8;  // نصف كمية الماء
        iceAmount = coffeeAmount * 8;    // النصف الآخر من الثلج
        document.getElementById("result").innerHTML = `الماء المطلوب: ${waterAmount.toFixed(2)} مل <br> الثلج المطلوب: ${iceAmount.toFixed(2)} جرام`;
    }
}
