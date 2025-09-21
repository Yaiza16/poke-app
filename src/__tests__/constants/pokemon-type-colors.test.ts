import { getTypeColors } from '@/lib/constants/pokemon-type-colors'

describe('getTypeColors', () => {
  it('should return correct colors for fire type', () => {
    const result = getTypeColors('fire')

    expect(result).toEqual({
      background: expect.stringContaining('red'),
      border: expect.stringContaining('red'),
      main: expect.any(String),
      shadow: expect.stringContaining('red'),
    })
  })

  it('should return default colors for unknown type', () => {
    const result = getTypeColors('unknown-type')

    expect(result).toBeDefined()
    expect(result.background).toBeDefined()
    expect(result.border).toBeDefined()
    expect(result.main).toBeDefined()
  })

  it('should handle empty string gracefully', () => {
    const result = getTypeColors('')

    expect(result).toBeDefined()
    expect(() => getTypeColors('')).not.toThrow()
  })
})
