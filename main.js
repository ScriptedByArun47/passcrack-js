const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter password length (1–100): ", function (passlen) {
    let pas = parseInt(passlen);
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    if (isNaN(pas) || pas < 1 || pas > 100) {
        console.log("❌ Invalid number. Try again!");
        rl.close();
        return;
    }

    rl.question("Enter starting password: ", function (startpass) {
        if (startpass.length >= pas) {
            console.log("❌ Starting password is too long. It must be shorter than the total length.");
            rl.close();
            return;
        }

        rl.question("Enter the number of combinations (1–100): ", function (comboInput) {
            const combinationCount = parseInt(comboInput);

            if (isNaN(combinationCount) || combinationCount < 1 || combinationCount > 500) {
                console.log("❌ Invalid number of combinations. Try again!");
                rl.close();
                return;
            }

            const topCombinations = [];
            const remainingLength = pas - startpass.length;
            let starttime = performance.now();
            for (let i = 0; i < combinationCount; i++) {
                let password = startpass;

                for (let j = 0; j < remainingLength; j++) {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    password += characters.charAt(randomIndex);
                }

                topCombinations.push(password);
            }
            let endtime = performance.now();
            let timeTaken = endtime - starttime;
            console.log("time taken to generate passwords: " + timeTaken.toFixed(4) + " milliseconds");
            console.log(`\n🔐 Top ${combinationCount} Password Combinations:`);
            const filename ="generated_password.txt";
            const datatowrite = topCombinations.join("\n");
            fs.writeFile(filename, datatowrite, (err) => {
                if (err){
                    console.log("❌ Error writing to file:", err);
                }
                else{
                    console.log("✅ Passwords written to file:", filename);

                }
            });

            rl.close();
        });
    });
});
