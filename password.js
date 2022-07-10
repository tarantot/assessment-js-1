const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

reader.question("Type your password: ", function (input) {
    const password = input;
    reader.close()
    
    const forbiddenWords = ["password", "letmein"];

    if (password.length >= 10 
        && password.length <= 20 
        && /.[a-z]/.test(password) 
        && /.[A-Z]/.test(password) 
        && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
        && /.\d/.test(password)
        && !/\s/.test(password)
        && !forbiddenWords.includes(password.toLowerCase())
        && /^[\u0000-\u007f]*$/.test(password)) {
            console.log("The password is valid.")
    } else {
        console.log("The password is invalid.")
    }
});