// const os = require("os");

// //info about current user
// const user = os.userInfo();
// console.log(user);

// // method returns the system uptime in seconds
// console.log(`The System Uptime is ${os.uptime()} seconds`);

// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };
// console.log(currentOS);

const path = require("path");
const fs = require("fs");
// console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
// console.log(filePath);

//
// const base = path.basename(filePath);
// console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");

const first = fs.readFileSync("./content/first.txt", "utf-8");
const second = fs.readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// a -- append
// w - write(default)
fs.writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first},${second}`,
  { flag: "a" }
);
