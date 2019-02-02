import * as babylon from "babylon";
import traverse from "babel-traverse";
import * as _ from 'lodash';
import * as t from "babel-types";
import generate from "babel-generator";
import * as uuid from 'uuid';

const fs = require('fs');
import {demoCodeString} from './demoCode';

const ast = babylon.parse(demoCodeString, {
  sourceType: 'module',
  plugins: ["jsx"]
});
const styleObjects = [];
traverse(ast, {
  JSXAttribute(path) {
    if (path.node.name.name !== 'style') {
      return;
    }
    if (path.node.value.expression.type === 'ObjectExpression') {
      // TODO check binding
      // if (path.scope.hasBinding("n")) {
      //   //...
      // }
      console.log(path.scope)
      const test = `a${randomString()}`;
      styleObjects.push(t.objectProperty(t.identifier(test), path.node.value.expression));
      path.node.value.expression = (
        t.memberExpression(
          t.identifier('styles'),
          t.identifier(test)
        )
      );
    }
  }
});

function randomString() {
  var expect = 8;//期望的字符串长度
  var str = Math.random().toString(36).substring(2);
  while (str.length < expect) {
    str = Math.random().toString(36).substring(2)
  }
  return str.substring(0, expect);
}


// let styleSheetStatement = t.expressionStatement(
//
// );

let styleSheetStatement = t.variableDeclaration(
  'const',
  [
    t.variableDeclarator(
      t.identifier('styles'),
      t.callExpression(
        t.memberExpression(
          t.identifier('StyleSheet'),
          t.identifier('create')
        ),
        [
          t.objectExpression(
            styleObjects
          )
        ]
      )
    )
  ]
)


ast.program.body.push(styleSheetStatement);


const a = generate(ast, {}, demoCodeString);
console.log(a);

fs.writeFileSync('./temp.js', a.code)



