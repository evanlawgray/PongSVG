import {SVG_NS} from '../settings.js';

export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  render(svg) {

  	let rect = document.createElementNS(SVG_NS, 'rect');
  	rect.setAttributeNS(null, 'width', this.width);
  	rect.setAttributeNS(null, 'height', this.height);
  	rect.setAttributeNS(null, 'fill', '#353535');

  	let dividingLine = document.createElementNS(SVG_NS, 'line');
  	dividingLine.setAttributeNS(null, 'x1', this.width/2);
  	dividingLine.setAttributeNS(null, 'y1', 0);
  	dividingLine.setAttributeNS(null, 'x2', this.width/2);
  	dividingLine.setAttributeNS(null, 'y2', this.height);
  	dividingLine.setAttributeNS(null, 'stroke', 'white');
  	dividingLine.setAttributeNS(null, 'stroke-width', '4');
  	dividingLine.setAttributeNS(null, 'stroke-dasharray', '20, 15');

  	svg.appendChild(rect);
  	svg.appendChild(dividingLine);

    
  }
}