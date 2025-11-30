class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.position = "absolute";
    this.element.style.width = `${width}`;
    this.element.style.height = `${height}`;
    this.element.style.left = `${left}`;
    this.element.style.top = `${top}`;
    this.gameScreen.appendChild(this.element);
  }
}
