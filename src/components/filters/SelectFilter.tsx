import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

interface SelectOption {
  value: string
  label: string
}

interface SelectFilterProps {
  data: SelectOption[]
  placeholder: string
  currentValue: string
  onValueChange: (value: string) => void
}

const SelectFilter = ({ data, placeholder, currentValue, onValueChange }: SelectFilterProps) => {
  const handleValueChange = (value: string) => {
    onValueChange(value === 'all' ? '' : value)
  }
  return (
    <Select value={currentValue || 'all'} onValueChange={handleValueChange}>
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
