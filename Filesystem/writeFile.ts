import { writeFile } from "node:fs/promises";
import { Buffer } from "node:buffer";

async function doWriteFile(path: string) {
  try {
    const controller = new AbortController();
    const { signal } = controller;
    const data = new Uint8Array(Buffer.from("Hello Node.js"));
    const promise = writeFile("message.txt", data, { signal });

    // Abort the request before the promise settles.
    //controller.abort(); //send abort signal

    await promise;
  } catch (err) {
    // When a request is aborted - err is an AbortError
    console.error(err);
  }
}

doWriteFile("ss");
