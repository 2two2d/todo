import react from 'eslint-plugin-react'
import * as tseslint from "typescript-eslint";

export default tseslint.config({
    settings: { react: { version: '18.3' } },
    plugins: {
        react,
    },
    rules: {
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
    },
})