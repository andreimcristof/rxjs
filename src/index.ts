import { emitKeypressEvents } from "readline";

emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) process.stdin.setRawMode(true);

process.stdin.on("keypress", (...ar) => {
  console.log(JSON.stringify(ar));

  const ctrlX = "\u0018";
  if (ar[1].sequence === ctrlX) process.exit(0);
});
