/** @type {import('tailwindcss').Config} */

const backgroundColors = {
    primary: '#F8F8F9',
    'light-blue': '#f2fafc',
    'gray-light': '#F0F0F0',
    'green-light': '#DAF8E6',
}

const textColors = {
    primary: '#111439',
    secondary: '#F8F8F9',
    gray: '#666666',
    'validation-text': '#F23030',
    'dark-green': '#004434'
}

const inputColors = {
    primary: '#e3d5d6',
    error: '#F23030',
    hover: '#3758F9',
    gray: '#9CA3AF',
}

const borderColors = {
    gray: '#D5D7DB',
    'gray-light': '#F0F0F0',
    error: '#BC1C21',
    gray2: '#DFE4EA',
    blue: '#3758F9',
    yellow: '#F59E0B',
    'btn-layout': 'rgba(0, 0, 0, 0.06)'
}

const iconColors = {
    'dark-gray': '#656F77'
}

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{css,scss}"
    ],
    theme: {
        extend: {
            colors: {
                bg: backgroundColors,
                border: borderColors,
                input: inputColors,
                text: textColors,
                icon: iconColors
            }
        },
    },
    plugins: [],
}

