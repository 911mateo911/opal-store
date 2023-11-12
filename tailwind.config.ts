import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-tablet': {
          max: '1000px'
        },
        'max-tablet-sm': {
          max: '860px'
        },
      },
      fontFamily: {
        red_hat_display: ['--font-red_hat_display'],
        inter: ['--font-inter']
      },
      colors: {
        'grey-1': '#f6f6f7',
        'grey-2': '#f2f2f3',
        'grey-5': '#f0f0f1',
        'grey-10': '#e1e1e3',
        'grey-20': '#d2d2d6',
        'grey-30': '#b4b4bb',
        'grey-40': '#9696a0',
        'grey-50': '#787885',
        'grey-60': '#5a5b6a',
        'grey-70': '#4a4b57',
        'grey-75': '#5a5b68',
        'grey-80': '#3a3a44',
        'grey-85': '#3b3c45',
        'grey-90': '#292a31',
        'grey-95': '#1e1f25',
        'grey-100': '#19191d',

        'blue-5': '#ebf2ff',
        'blue-10': '#d8e6ff',
        'blue-20': '#c4daff',
        'blue-30': '#9dc2ff',
        'blue-40': '#76a9ff',
        'blue-50': '#4f91ff',
        'blue-60': '#2979ff',
        'blue-70': '#2264d1',
        'blue-80': '#1b4ea3',
        'blue-90': '#133774',
        'blue-100': '#0c2146',

        'green-5': '#edf6ee',
        'green-10': '#dceddd',
        'green-20': '#cbe5cc',
        'green-30': '#a9d3ab',
        'green-40': '#87c289',
        'green-50': '#65b168',
        'green-60': '#43a047',
        'green-70': '#37833b',
        'green-80': '#2b662e',
        'green-90': '#1f4921',
        'green-100': '#132c14',

        'yellow-5': '#fff8ea',
        'yellow-10': '#fff1d6',
        'yellow-20': '#ffeac1',
        'yellow-30': '#ffdc99',
        'yellow-40': '#ffcf70',
        'yellow-50': '#ffc147',
        'yellow-60': '#ffb41f',
        'yellow-70': '#d1941a',
        'yellow-80': '#a37314',
        'yellow-90': '#74520f',
        'yellow-100': '#463209',

        'red-5': '#feedec',
        'red-10': '#fddcda',
        'red-20': '#fccbc8',
        'red-30': '#faa9a3',
        'red-40': '#f8877f',
        'red-50': '#f6655a',
        'red-60': '#f44336',
        'red-70': '#c8372d',
        'red-80': '#9c2b23',
        'red-90': '#6f1f19',
        'red-100': '#43130f'
      },
      width: {
        navbar_width: 'calc(100% - 20px)'
      },
      boxShadow: {
        navbar_shadow: '0px 30px 60px rgb(0 0 0 / 4%)'
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        }
      },
      animation: {
        'fadeIn': 'fadeIn .2s ease-in-out forwards'
      }
    }
  },
  plugins: [],
}
export default config
