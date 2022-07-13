import { readFile } from "node:fs/promises";

async function doReadFile(path: string) {
  try {
    const controller = new AbortController();
    const { signal } = controller;
    const promise = readFile(path, { signal });

    // Abort the request before the promise settles.
    //controller.abort(); //send abort signal

    console.log(await promise); //return buffer if no encoding
    let buf = await promise;
    console.log(buf.toString("ascii"));
    console.log(buf.toString("utf-8"));
  } catch (err) {
    // When a request is aborted - err is an AbortError
    console.error(err);
  }
}

doReadFile("./.gitignore");
