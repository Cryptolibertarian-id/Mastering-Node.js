import { Buffer } from "node:buffer";

// Create Buffer from String
const buf = Buffer.from("hello world", "utf8");
console.log(buf); //<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log(typeof buf); //object
console.log(buf instanceof Buffer); // true);

// Buffer to Base64 String
console.log(buf.toString("base64")); //aGVsbG8gd29ybGQ=

// Buffer to Hex
console.log(buf.toString("hex")); //68656c6c6f20776f726c64

// Buffer to ASCII
console.log(Buffer.from("SGVsbG8gV29ybGQ=", "base64").toString("ascii")); //Hello World

//Buffer.from(2).toString("ascii");
console.log(Buffer.from([1, 2, 3])); //<Buffer 01 02 03>
console.dir(Buffer.alloc(3, 3).toString());
