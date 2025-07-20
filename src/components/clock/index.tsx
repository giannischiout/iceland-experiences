
export function Clock({time}: {time: string}) {
  const [hour, minutes] = time.split(':')
  console.log({hour, minutes})
  const minuteAngle = parseInt(minutes, 10) * 6
  return (
    <div className=" w-7 h-7 bg-primary rounded-full relative">
      <div className='w-[2px] h-[2px] rounded-full bg-white absolute left-1/2 top-1/2 ' />

      {/* minutes */}
      {/* Minute hand */}
      <div
        className="h-[35%] w-[1px] bg-white/80 absolute left-1/2 top-1/2 origin-bottom"
        style={{ transform: `rotate(${minuteAngle}deg) ` }}
      />
    </div>
  )
}