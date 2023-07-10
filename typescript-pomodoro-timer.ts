//Define timer durations for work and break (0.* added for testing).
const WORK_DURATION = 0.25; 
const BREAK_DURATION = 0.5;

//Using padstart, print time in the format: MM:SS.
function formatTime(minutes: number, seconds: number): string {
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

//Print Initial output to log
console.log("Pomodoro Timer");
//Initiate the 'Work Session' timer
startTimer(WORK_DURATION, "Work Session");

//Timeout functionality, between the work and break sessions
setTimeout(() => {
  console.log("Take a short break!");
  startTimer(BREAK_DURATION, "Break Session");
  //Work duration in milliseconds
}, WORK_DURATION * 60 * 1000);

//Timer Maths and output
function startTimer(duration: number, message: string): void {
  console.log(`Starting ${message}`);
  //Multiply the 'duration' by 60 to get the duration in seconds.
  let remainingSeconds = duration * 60;

  //setInterval that prints to the log every second.
  const interval = setInterval(() => {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    //Prints the time remaining in a MM:SS format
    console.log(formatTime(minutes, seconds));

    //Print a completed message when finished.
    if (remainingSeconds === 0) {
      //Clear the timer data
      clearInterval(interval);
      console.log(`${message} completed!`);
    }
    //Reduce 1 second every second.
    remainingSeconds--;
  }, 1000);
}
