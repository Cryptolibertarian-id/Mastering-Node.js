# Mastering Node.js





# API Implementations



## Buffer



1. Create Buffer from String

   ```javascript
   const buf = Buffer.from("hello world", "utf8");
   console.log(buf); //<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
   ```

2. Check Buffer Object

   ```javascript
   console.log(typeof buf); //object
   console.log(buf instanceof Buffer); // true
   ```

3. Convert Buffer to Base64 String

   ```javascript
   console.log(buf.toString("base64")); //aGVsbG8gd29ybGQ=
   ```

4. Convert Buffer to Hex

   ```javascript
   console.log(buf.toString("hex")); //68656c6c6f20776f726c64
   ```

5. Convert Buffer to ASCII

   ```javascript
   console.log(Buffer.from("SGVsbG8gV29ybGQ=", "base64").toString("ascii")); //Hello World
   ```

6. Reserved



---



## File System



1. Promise-based Unlink - [Click Here](https://github.com/Cryptolibertarian-id/Mastering-Node.js/blob/main/Filesystem/unlink.ts)
2. Synchronous Unlink - [Click Here](https://github.com/Cryptolibertarian-id/Mastering-Node.js/blob/main/Filesystem/unlinkSync.ts)
3. Promise-based Read File - [Click Here](https://github.com/Cryptolibertarian-id/Mastering-Node.js/blob/main/Filesystem/readfile.ts)
4. Synchronous Read File - [Click Here](https://github.com/Cryptolibertarian-id/Mastering-Node.js/blob/main/Filesystem/readfileSync.ts)
6. Reserved



### Applications

- Read & Write File Apps





----



# Just For Fun Examples



1. Playing with Buffer
2. Reserved