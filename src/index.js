const style = `
body {
  background: black;
  color: lightGray;
  font-family: 'COURIER';
  counter-reset: item;
}
.red {
  color: #f37;
}
.yellow {
  color: #efa;
}
#cr{
  position: fixed;
  bottom: 5px;
  right: 5px;
  font-size: 15px;
  background: #222;
  color: #888;
  padding: 9px;
  border-radius: 5px;
}
ol {
  padding:0;
  list-style: none;
}
li {
  counter-increment: item;
  margin-bottom: 5px;
  border-bottom: solid 1px #333;
}
li:hover {
 background-color: #333;
 cursor:pointer;
}
li:before {
  margin-right: 10px;
  content: counter(item);
  background: #333;
  color: #888;
  width: 1.2em;
  text-align: center;
  display: inline-block;
}
`;

const initHtml = `
<div id="cr">Powered by HC.js</div>
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
window.console.error = obj => logger(obj, "red");
window.console.debug = obj => logger(obj, "yellow");
