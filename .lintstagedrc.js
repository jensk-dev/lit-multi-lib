module.exports = {
  "*.ts": ["prettier -w --list-different", "eslint --fix"],
  "!*.ts": "prettier -w --list-different",
};
