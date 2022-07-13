import { unlinkSync } from "node:fs";

function doUnlinkSync(path: string) {
  try {
    unlinkSync(`./${path}`);
    console.log(`Successfully deleted ${path}`);
  } catch (error: any) {
    console.error("There was an error:", error?.message);
  }
}

doUnlinkSync("delete.txt");
