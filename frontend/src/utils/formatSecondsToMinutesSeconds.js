export default function formatSecondsToMinutesSeconds(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = (totalSeconds % 60).toFixed(0);
    
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    
    return `${minutes}:${formattedSeconds}`;
  }