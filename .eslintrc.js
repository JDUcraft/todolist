module.exports = {
    extends: ["eslint:recommended", "airbnb-base"],
    plugins: ["jest"],
    env: {
        node: true,
        "jest/globals": true
    },
    rules: {
        indent: ["error", 4],
        "import/prefer-default-export": 0,
    }
};
