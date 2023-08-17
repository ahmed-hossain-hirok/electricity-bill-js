let numberofFans = Number(prompt("Enter number of Fans"));
let numberofLights = Number(prompt("Enter number of Lights"));
let numberofFridges = Number(prompt("Enter number of Fridges"));
let numberofAcs = Number(prompt("Enter number of Acs"));

function calculateBills(numberofFans, numberofLights, numberofFridges, numberofAcs) {
    const totalWatt = numberofFans * 10 + numberofLights * 5 + numberofFridges * 50 + numberofAcs * 100;
    const totalBill = totalWatt * 20;
    
    console.log(`Your bill is ${totalBill}`);
    document.write(`Total Watt: ${totalWatt} watts Total Bill: ${totalBill} taka`);
}

calculateBills(numberofFans, numberofLights, numberofFridges, numberofAcs);