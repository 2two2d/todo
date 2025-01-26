/** @type {import('tailwindcss').Config} */

const backgroundColors = {
    primary: '#F8F8F9',
    green: '#49d33b',
    gray: '#D6D6D6',
    'light-green': '#DCFFEE',
    'light-blue': '#f2fafc',
    'light-gray': '#eeeeee',
}

const textColors = {
    primary: '#222429',
    secondary: '#F8F8F9',
    gray: '#666666',
    'light-gray': '#A6A6A6',
    'validation-text': '#F23030',
    green: '#49d33b',
    'dark-green': '#004434'
}

const inputColors = {
    primary: '#e3d5d6',
    error: '#F23030',
    hover: '#3758F9',
    gray: '#9CA3AF',
}

const borderColors = {
    gray: '#666666',
    green: '#49d33b',
    error: '#BC1C21',
    gray2: '#DFE4EA',
    'light-gray': '#CED4DA',
    blue: '#3758F9',
}

const iconColors = {
    'dark-gray': '#656F77',
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

