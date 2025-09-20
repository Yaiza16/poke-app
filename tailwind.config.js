module.exports = {
  theme: {
    extend: {
      animation: {
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'rotate-slow': 'rotate 8s linear infinite',
        'twinkle-1': 'twinkle 3s ease-in-out infinite',
        'twinkle-2': 'twinkle 2s ease-in-out infinite 1s',
      },
      keyframes: {
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-3px) rotate(0.5deg)' },
          '66%': { transform: 'translateY(-1px) rotate(-0.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(0.9)', opacity: '0.2' },
          '50%': { transform: 'scale(1.1)', opacity: '0.4' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
    },
  },
}
