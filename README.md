# Mastering Node.js

 Learning Path For Deno | With Gun



# Table of Contents





----

*Last touched on 14 August 2022*

| Parameter         | Value                                   | Note |
| ----------------- | --------------------------------------- | ---- |
| Official Website  | [Click Here](https://nodejs.org/en/)    |      |
| Github Repository | [Click Here](https://github.com/nodejs) |      |
| Node.js Blog      |                                         |      |



----



## Resources

| Parameter          | Value                                              | Note              |
| ------------------ | -------------------------------------------------- | ----------------- |
| Repository bcrypto | [Click Here](https://github.com/bcoin-org/bcrypto) | JS Crypto Library |
|                    |                                                    |                   |
|                    |                                                    |                   |



----



# Node Binaries



## Node Version

For check installed node on your machine, execute this command :

```bash
$ deno --version
```





---



# API Implementations



## Buffer

What is Buffer? you can read my repository [here](https://github.com/Cryptolibertarian-id/The-Computer-Architecture-Course#memory). 



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



---



# FAQs



## Difference Between Buffer & Stream

So what is the difference between Stream & Buffer? **A buffer has a specified, definite length whereas a stream does not**. A stream is a sequence of bytes that is read and/or written to, while a buffer is a sequence of bytes that is stored.