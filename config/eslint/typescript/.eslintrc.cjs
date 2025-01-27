module.exports = {
    rules: {
        "@typescript-eslint/no-throw-literal": "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                allowExpressions: false,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: true,
            },
        ],
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                accessibility: "explicit",
                overrides: {
                    accessors: "no-public",
                    constructors: "no-public",
                    methods: "explicit",
                    properties: "explicit",
                    parameterProperties: "no-public",
                },
            },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                multiline: {
                    delimiter: "none",
                    requireLast: false,
                },
                singleline: {
                    requireLast: false,
                },
            },
        ],
        "@typescript-eslint/member-ordering": [
            "error",
            {
                classes: [
                    "public-field",
                    "protected-field",
                    "private-field",
                    "constructor",
                    "public-constructor",
                    "protected-constructor",
                    "private-constructor",
                    "public-method",
                    "protected-method",
                    "private-method",
                ],
                interfaces: ["field", "constructor", "method", "signature"],
                typeLiterals: ["field", "constructor", "method", "signature"],
            },
        ],
        "@typescript-eslint/method-signature-style": ["error", "method"],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "variable",
                modifiers: ["const", "exported"],
                format: ["UPPER_CASE"],
                leadingUnderscore: "allow",
            },
            {
                selector: "variable",
                types: ["boolean"],
                format: ["PascalCase"],
                prefix: ["is", "should", "has", "can", "did", "will"],
            },
            {
                selector: "variableLike",
                format: ["camelCase", "UPPER_CASE"],
                leadingUnderscore: "allow",
            },
            {
                selector: "memberLike",
                modifiers: ["private"],
                format: ["camelCase"],
                leadingUnderscore: "require",
            },
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: true,
                },
            },
            {
                selector: "typeLike",
                format: ["PascalCase"],
            },
        ],
        "@typescript-eslint/no-confusing-void-expression": "error",
        "@typescript-eslint/parameter-properties": 2,
        "@typescript-eslint/no-redundant-type-constituents": "error",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-useless-empty-export": "error",
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/strict-boolean-expressions": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        // styling rules
        "@typescript-eslint/brace-style": "error",
        "@typescript-eslint/comma-dangle": "error",
        "@typescript-eslint/comma-spacing": "error",
        "@typescript-eslint/default-param-last": "error",
        "@typescript-eslint/dot-notation": "error",
        "@typescript-eslint/func-call-spacing": "error",
        "@typescript-eslint/indent": ["error", 2],
        "@typescript-eslint/keyword-spacing": "error",
        "@typescript-eslint/lines-between-class-members": ["error", "always"],
        "@typescript-eslint/no-dupe-class-members": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-extra-parens": [
            "error",
            "all",
            {
                ignoreJSX: "multi-line",
            },
        ],
        "@typescript-eslint/no-extra-semi": "error",
        "@typescript-eslint/no-invalid-this": "error",
        "@typescript-eslint/no-loss-of-precision": "error",
        "@typescript-eslint/no-magic-numbers": [
            "error",
            {
                ignore: [-1, 0, 1, 2],
                ignoreArrayIndexes: true,
                ignoreDefaultValues: true,
                ignoreEnums: true,
                ignoreTypeIndexes: true,
            },
        ],
        "@typescript-eslint/no-redeclare": "error",
        "@typescript-eslint/no-shadow": [
            "error",
            {
                hoist: "all",
            },
        ],
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/object-curly-spacing": [
            "error",
            "always",
            {
                arraysInObjects: false,
                objectsInObjects: false,
            },
        ],
        "@typescript-eslint/quotes": [
            "error",
            "single",
            {
                avoidEscape: false,
                allowTemplateLiterals: false,
            },
        ],
        "@typescript-eslint/return-await": "error",
        "@typescript-eslint/semi": ["error", "never"],
        "@typescript-eslint/space-before-blocks": "error",
        "@typescript-eslint/space-before-function-paren": "error",
        "@typescript-eslint/space-infix-ops": "error",
        "@typescript-eslint/no-misused-promises": "off",
    },
    overrides: [
        {
            files: ["src/**/*.tsx", "src/**/*.ts"],
            rules: {
                "@typescript-eslint/naming-convention": [
                    "error",
                    {
                        selector: "variable",
                        modifiers: ["const", "exported"],
                        format: ["UPPER_CASE", "PascalCase"],
                        leadingUnderscore: "allow",
                    },
                    {
                        selector: "variable",
                        types: ["function"],
                        modifiers: ["const", "exported"],
                        format: ["PascalCase", "camelCase"],
                    },
                    {
                        selector: "variable",
                        types: ["boolean"],
                        format: ["PascalCase"],
                        prefix: ["is", "should", "has", "can", "did", "will"],
                    },
                    {
                        selector: "variableLike",
                        format: ["camelCase", "PascalCase", "UPPER_CASE"],
                        leadingUnderscore: "allow",
                    },
                    {
                        selector: "memberLike",
                        modifiers: ["private"],
                        format: ["camelCase"],
                        leadingUnderscore: "require",
                    },
                    {
                        selector: "interface",
                        format: ["PascalCase"],
                        custom: {
                            regex: "^I[A-Z]",
                            match: true,
                        },
                    },
                    {
                        selector: "typeLike",
                        format: ["PascalCase"],
                    },
                ],
                "@typescript-eslint/comma-dangle": "off",
            },
        },
        {
            files: ["src/**/*.tsx"],
            rules: {
                "@typescript-eslint/unbound-method": "off",
            },
        },
    ]
};
