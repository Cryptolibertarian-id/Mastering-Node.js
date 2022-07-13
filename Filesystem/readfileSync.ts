import { readFileSync } from "node:fs";

function doreadFileSync(path: string) {
  try {
    const result = readFileSync(path);

    // Abort the request before the promise settles.
    //controller.abort(); //send abort signal

    console.log(result); //return buffer if no encoding
    let buf = result;
    console.log(buf.toString("ascii"));
    console.log(buf.toString("utf-8"));
  } catch (err) {
    // When a request is aborted - err is an AbortError
    console.error(err);
  }
}

doreadFileSync("./.gitignore");
