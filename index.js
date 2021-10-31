const element = document.createElement('div');

document.body.appendChild(element);

const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.innerHTML = (i + 1).toString();
    ul.appendChild(li);
}
element.appendChild(ul);

element.style.fontSize = `18px`;
element.style.color = `red`;
element.style.lineHeight = `2`;

document.getElementById("main").remove();

const newHeader = document.createElement('h1');
newHeader.id = `victory`;
newHeader.innerHTML = `<h1>Benjamin Noble is the champion</h1>`;
