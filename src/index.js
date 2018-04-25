const style = `
body {
  background: black;
  color: lightGray;
  font-family: 'COURIER';
}
.red {
  color: red;
}
.yellow {
  color: yellow;
}
`;

const initHtml = `
<h1>===== HC.js =====</h1>
<style>
${style}
</style>
<ol id="console"></ol>
`;

document.body.innerHTML = initHtml;
const logger = (obj, color) => {
  const node = document.createElement("li");
  node.className = color;
  const textnode = document.createTextNode(JSON.stringify(obj));
  node.appendChild(textnode);
  document.getElementById("console").appendChild(node);
};
window.console.log = obj => logger(obj);
window.console.error = obj => logger(obj, 'red');
window.console.debug = obj =>  logger(obj, 'yellow');
