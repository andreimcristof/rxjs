import { interval, timer } from "rxjs";

timer(1000).pipe(
  () => console.log("hi");
);

