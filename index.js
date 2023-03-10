module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "react-hooks",
        "eslint-plugin-import-helpers"
    ],

    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "prettier/prettier": ["error", {
            "useTabs": true,
            "tabWidth": 2,
            "singleQuote": true,
            "trailingComma": "none",
            "arrowParens": "always",
            "semi": false,
            "endOfLine": "auto"
        }
        ],
        "import-helpers/order-imports": ["warn",
            {
                "newlinesBetween": "always",
                "groups": [
                    ["/^react/", "/^next/", "/^@next/"],
                    "/components/",
                    "/module/",
                    "/^@shared/",
                    "/absolute/",
                    ["parent", "sibling", "index"]
                ],
                "alphabetize": { "order": "asc", "ignoreCase": true }
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
}
