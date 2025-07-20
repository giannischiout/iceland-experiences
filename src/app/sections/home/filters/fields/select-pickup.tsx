import { FieldWrapper } from '@/app/sections/home/filters/field-wrapper'
import { getTruncatedValue } from '@/utills/get-truncated-value'
import { Popover } from '@/components/popover'
import { usePopover } from '@/components/popover/usePopover'
import { pickupIcons } from '@/_mockup'
import { cn } from '@/lib/utils'


type Value = {
  value: string;
  label: string;
  icon: 'busstop' | 'airport' | 'area';
}
type Props = {
  options: Value[]
  value: Value,
  onChange: (value: Value) => void;
}
export function SelectPickup({options, value, onChange }: Props) {
  const { anchorRef, open, onClose, onToggle } = usePopover<HTMLDivElement>()
  const label =  getTruncatedValue(value.label, 20)

  const handleChange = (newValue: typeof options[number]) => {
    onChange(newValue)
    onClose()
  }
  return (
    <>
      <FieldWrapper  isPrimary  label="Pickup">
        <div  ref={anchorRef} onClick={onToggle} className="cursor-pointer font-medium text-xl">{label}</div>
      </FieldWrapper>
      <Popover
        anchorRef={anchorRef}
        open={open}
        onClose={onClose}
      >
        {options.map((option, index) => {
          const isActive = option.value === value.value
          return (
            <div
              onDragStart={(e) => e.preventDefault()}
              onClick={() => handleChange(option)}
              className={cn(
              "flex  gap-2 p-2 pb-3  items-center cursor-pointer ",
              isActive ? 'text-foreground font-medium' : 'text-gray-500',
                index !== options.length - 1 && 'border-b border-gray-200 '
            )} key={option.value}>
              {pickupIcons[option.icon]}
              {option.label}
            </div>
          )
        })}
      </Popover>
    </>
  )
}