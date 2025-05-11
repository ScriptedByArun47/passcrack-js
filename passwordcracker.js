const readline = require("readline");
const fs = require("fs");
const { performance } = require("perf_hooks");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function crackPassword(password) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let crackedPassword = "";
    let startTime = performance.now();

    for (let i = 0; i < password.length; i++) {
        let found = false;
        for (let j = 0; j < characters.length; j++) {
            if (password[i] === characters[j]) {
                crackedPassword += characters[j];
                found = true;
                break;
            }
        }
        if (!found) {
            return { success: false, message: `❌ Failed at char ${i + 1}` };
        }
    }

    let endTime = performance.now();
    let timeTaken = endTime - startTime;

    return {
        success: true,
        cracked: crackedPassword,
        time: timeTaken.toFixed(4)
    };
}

// Main prompt
rl.question("Choose:\n1) Crack passwords from file\n2) Enter one password manually\nYour option: ", function (option) {
    if (option === "1") {
        rl.question("📂 Enter input file name (one password per line): ", function (filename) {
            fs.readFile(filename, "utf8", (err, data) => {
                if (err) {
                    console.log("❌ Error reading file:", err.message);
                    rl.close();
                    return;
                }

                const passwords = data.trim().split("\n");
                let output = "";

                console.log("\n🔓 Cracking multiple passwords...\n");

                passwords.forEach((pw, index) => {
                    const result = crackPassword(pw.trim());
                    if (result.success) {
                        const line = `#${index + 1}: ✅ Cracked: ${result.cracked} | Time: ${result.time} ms\n`;
                        console.log(line);
                        output += line;
                    } else {
                        const fail = `#${index + 1}: ❌ Failed: ${pw} | ${result.message}\n`;
                        console.log(fail);
                        output += fail;
                    }
                });

                fs.writeFile("cracked_output.txt", output, (err) => {
                    if (err) console.log("⚠️ Couldn't save output.");
                    else console.log("\n📁 Cracked results saved to cracked_output.txt");
                    rl.close();
                });
            });
        });
    }

    else if (option === "2") {
        rl.question("🔐 Enter password: ", function (pass) {
            const result = crackPassword(pass);
            if (result.success) {
                console.log(`✅ Cracked Successfully: ${result.cracked} | Time: ${result.time} ms`);
            } else {
                console.log(result.message);
            }
            rl.close();
        });
    }

    else {
        console.log("❌ Invalid option. Exiting.");
        rl.close();
    }
});
