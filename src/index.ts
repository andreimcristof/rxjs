import { emitKeypressEvents } from "readline";

emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) process.stdin.setRawMode(true);

process.stdin.on("keypress", (...ar) => {
  console.log(JSON.stringify(ar));

  if (ar[1].ctrl && ar[1].sequence === "\u0018") process.exit(0);
});
