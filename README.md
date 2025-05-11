# 🔐 PasswordCrackJS

A Node.js-based toolset for generating strong passwords and simulating password cracking using a brute-force approach. This project is educational and demonstrates how passwords can be generated and tested for strength via brute-force simulation.

---

## 📁 Project Structure

📦 PasswordCrackJS/

├── main.js # Password generator

├── passwordcracker.js # Password cracker using brute-force

├── passwords.txt # (Optional) File containing password(s) to crack

└── README.md


---

## 🚀 Features

- Generate strong passwords with custom lengths and starting strings.
- View top 10 random combinations from a given prefix.
- Simulate password cracking character-by-character.
- Read password input directly or from a file.
- Logs time taken to crack the password.

---

## 🛠 Requirements

- Node.js (v14+ recommended)

---

## 📄 Usage

### ▶️ Run Password Generator

```bash
node main.js
```


Features:

Choose password length (1–100)

Optional: Add a starting string

Generates and displays top 10 random combinations

```bash
node passwordcracker.js
```
Options:

Manually enter the password to crack

Or read the password from a file

Displays cracked password and time taken



📌 Example Output
yaml
Copy code
Enter password length (1–100): 12
Enter starting password: joke
Enter number of combinations: 10

🔐 Top 10 Password Combinations:
1. jokeD9s@W!bK
2. jokeY8c#T1uL
...

Enter your password: joke123
Successfully cracked the password: joke123
Time taken to crack this password: 1.2450 milliseconds

📬 Author
Made by Arun
Python Developer | Kivy Enthusiast | Cybersecurity Learner

📧 Email: akisback049@gmail.com

🐧 OS: Parrot OS / Kali Linux / Window / Unix


🌐 GitHub:https://github.com/ScriptedByArun47

