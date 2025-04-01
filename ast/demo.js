// const acorn = import('acorn');
const acorn = require('acorn');
const fs = require('fs');

const code = 'const sum = a + b; function foo() { return a + b; }';

// 解析代码并生成 AST
const ast = acorn.parse(code, { sourceType: 'module' });
const tokens = acorn.tokenizer(code, { sourceType: 'module' });
const jsonString = JSON.stringify(ast, null, 2);
fs.writeFileSync('./ast/output.json', jsonString, 'utf8');
