//Define timer durations for work and break (0.* added for testing).
const WORK_DURATION = 0.25; 
const BREAK_DURATION = 0.5;

//Using padstart, print time in the format: MM:SS.
function formatTime(minutes: number, seconds: number): string {
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

//Timer Maths and output
function startTimer(duration: number, message: string): void {
  console.log(`Starting ${message}`);

//Consistent output
