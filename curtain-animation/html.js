let h1 = document.createElement('h1');
h1.innerText = 'Credit Corp';
let sect = document.createElement('section')

document.body.appendChild(h1)
document.body.appendChild(sect)

for(let i = 0; i<10; i++){
    let div = document.createElement('div')
    sect.appendChild(div)
}