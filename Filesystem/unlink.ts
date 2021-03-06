import { unlink } from "node:fs/promises";

async function doUnlink(path: string) {
  try {
    await unlink(`./${path}`);
    console.log(`Successfully deleted ${path}`);
  } catch (error: any) {
    console.error("There was an error:", error?.message);
  }
}

doUnlink("delete.txt");
