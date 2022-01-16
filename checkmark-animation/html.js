let svg = document.createElement('svg');
svg.setAttribute('width', '100px');
svg.setAttribute('height', '100px');
svg.setAttribute('id', 'Morph');
// svg.setAttribute('viewBox', '0 0 1920 1080');
// svg.setAttribute('preserveAspectRatio', 'none');

let path = document.createElement('path');
path.setAttribute('class', 'morph');
path.setAttribute('d', 'M6.09155 10.3867L6.06726 10.4116L3 7.26676L3.61345 6.63779L6.19591 9.28555L11.3511 4L11.9646 4.62896L6.2202 10.5186L6.09155 10.3867Z');
path.setAttribute('fill', '#000');
document.body.appendChild(svg);
svg.appendChild(path);

// define a background color
let bg = document.createElement('div');
bg.setAttribute('id', 'bg');
document.body.appendChild(bg);

