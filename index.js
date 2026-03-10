// index.js - Micro Goal Management App

const readline = require('readline');

// In-memory storage for goals
let goals = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log("\n=== Micro Goal Management ===");
  console.log("1. Add a goal");
  console.log("2. View all goals");
  console.log("3. Exit");

  rl.question("Choose an option: ", function(option) {
    if(option === '1') {
      rl.question("Enter your goal: ", function(goal) {
        goals.push(goal);
        console.log("Goal added!");
        showMenu();
      });
    } else if(option === '2') {
      console.log("\nYour Goals:");
      if(goals.length === 0) console.log("No goals yet!");
      else goals.forEach((g, i) => console.log(`${i + 1}. ${g}`));
      showMenu();
    } else if(option === '3') {
      console.log("Goodbye!");
      rl.close();
    } else {
      console.log("Invalid option, try again.");
      showMenu();
    }
  });
}

// Start the app
showMenu();