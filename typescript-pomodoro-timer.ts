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

  //Multiply the 'duration' by 60 to get the duration in seconds.
  let remainingSeconds = duration * 60;

  //setInterval that prints to the log every second.
  const interval = setInterval(() => {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

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
  
}
