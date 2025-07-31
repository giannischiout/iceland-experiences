export function Clock({ time }: { time: string }) {
  const [hour, minutes] = time.split(":");
  const minuteAngle = parseInt(minutes, 10) * 6;
  return (
    <div className="bg-primary relative h-7 w-7 rounded-full">
      <div className="absolute top-1/2 left-1/2 h-[2px] w-[2px] rounded-full bg-white" />

      {/* minutes */}
      {/* Minute hand */}
      <div
        className="absolute top-1/2 left-1/2 h-[35%] w-[1px] origin-bottom bg-white/80"
        style={{ transform: `rotate(${minuteAngle}deg) ` }}
      />
    </div>
  );
}
