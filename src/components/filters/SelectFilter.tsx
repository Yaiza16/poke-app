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
      <SelectTrigger className="w-full sm:w-[140px] bg-slate-700/50 border-slate-600/50 text-slate-200 hover:bg-slate-600/60 hover:text-white hover:border-slate-500 focus:bg-slate-600/60 focus:text-white focus:border-slate-500 transition-all duration-300">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm border-slate-700/50 shadow-xl">
        <SelectItem
          value="all"
          className="text-slate-200 hover:bg-slate-700/60 hover:text-white focus:bg-slate-700/60 focus:text-white transition-colors duration-200"
        >
          {placeholder}
        </SelectItem>
        {data
          .sort((a, b) => a.value.localeCompare(b.value))
          .map(item => (
            <SelectItem
              key={item.value}
              value={item.value}
              className="text-slate-200 hover:bg-slate-700/60 hover:text-white focus:bg-slate-700/60 focus:text-white transition-colors duration-200"
            >
              {item.label}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  )
}

export default SelectFilter
