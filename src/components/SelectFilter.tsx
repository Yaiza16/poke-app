import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

interface SelectFilterProps {
  data: { value: string; label: string }[]
  placeholder: string
  currentValue: string
  setValue: (value: string) => void
}

const SelectFilter = ({ data, placeholder, currentValue, setValue }: SelectFilterProps) => {
  return (
    <Select value={currentValue || 'all'} onValueChange={v => setValue(v === 'all' ? '' : v)}>
      <SelectTrigger className="w-full sm:w-[140px] glass border-border text-foreground">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="glass-strong border-border">
        <SelectItem value="all" className="text-foreground hover:bg-primary/20">
          {placeholder}
        </SelectItem>
        {data
          .sort((a, b) => a.value.localeCompare(b.value))
          .map(item => (
            <SelectItem key={item.value} value={item.value} className="text-foreground hover:bg-primary/20">
              {item.label}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  )
}

export default SelectFilter
