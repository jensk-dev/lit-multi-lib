module.exports = {
  "*.ts": [
    "prettier -w --list-different",
    "eslint --fix",
    "lit-analyzer --strict",
  ],
  "!*.ts": "prettier -w --list-different",
};
