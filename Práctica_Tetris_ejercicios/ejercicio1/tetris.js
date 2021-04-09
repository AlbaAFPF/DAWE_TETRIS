// ************************************
// *     EJERCICIO 1                   *
// ************************************

// ============== Point =======================

// Representa la posición (x,y) de un punto en pantalla
function Point (x, y) {
	this.x = x;
	this.y = y;    
}

// ============== Rectangle ====================
function Rectangle() {}

Rectangle.prototype.init = function(p1,p2) {
	this.px = p1.x;
	this.py = p1.y;
	this.width = p2.x - p1.x;
	this.height = p2.y - p1.y;
	this.lineWidth= 1;
	this.color = 'black';
}

Rectangle.prototype.draw = function() {

	// TU CÓDIGO AQUÍ:
	// pinta un rectángulo del color actual en pantalla en la posición px,py, con
	// la anchura y altura actual y una línea de anchura=lineWidth. Ten en cuenta que 
	// en este ejemplo la variable ctx es global y que guarda el contexto (context) 
	// para pintar en el canvas.

	// Rectángulo
	ctx.fillStyle = this.color;
	ctx.fillRect(this.px, this.py, this.width, this.height);
	// Contorno del cuadrado
	ctx.strokeStyle = "black";
	ctx.lineWidth = this.lineWidth;
	ctx.strokeRect(this.px, this.py, this.width, this.height);


}


Rectangle.prototype.setLineWidth = function(width) { this.lineWidth=width}
Rectangle.prototype.setFill = function(color) { this.color = color}

// ============== Block ===============================

function Block (pos, color) {

	// TU CÓDIGO AQUÍ: este es el constructor de la clase Block. Recibe dos parámetros,
	// pos y color. Pos = posición de la celda, por ejemplo, (9,19).
	// color = color que hay que emplear para pintar el bloque.
	// Internamente este método crea dos puntos (empleando las coordenadas del pixel)
	// y llama al método init de la clase Rectangle, pasándole como parámetro,
	// estos dos puntos.
	// Sería interesante que emplearas las constantes Block.BLOCK_SIZE y Block.OUTLINE_WIDTH,
	// para establecer la anchura del bloque y la anchura de la línea.


	// Cogemos las posiciones
	this.x = pos.x;
	this.y = pos.y;
	// Y el color
	this.color = color;

	// Llamamos al método init de la clase Rectangle
	var p1 = new Point((this.x*Block.BLOCK_SIZE), (this.y*Block.BLOCK_SIZE));
	var p2 = new Point(((this.x+1)*Block.BLOCK_SIZE), ((this.y+1)*Block.BLOCK_SIZE));

	this.init(p1,p2);
	this.setLineWidth(Block.OUTLINE_WIDTH);
	this.setFill(color);

}

Block.BLOCK_SIZE = 30;
Block.OUTLINE_WIDTH = 2;

// TU CÓDIGO: emplea el patrón de herencia (Block es un Rectangle)

// Block hereda de Rectangle
Block.prototype = new Rectangle();



