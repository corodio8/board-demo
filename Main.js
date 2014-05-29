function Main() {
  // Basic Stage Generation
  this.stage = new PIXI.Stage(0x66FF99);
  renderer = PIXI.autoDetectRenderer(
      512,
      384,
      document.getElementById('game-canvas')
  );

  //Background Sprites
  var backSprite = PIXI.Texture.fromImage('resources/draddet.png');
  backTile = new PIXI.Sprite(backSprite);
  backTile.position.x = 0;
  backTile.position.y = 0;
  this.stage.addChild(backTile);
 
  this.loadSpriteSheet();

  // Render
  renderer.render(this.stage);
}

Main.prototype.loadSpriteSheet = function() {
  var assetsToLoad = ['resources/draddet.json'];
  loader = new PIXI.AssetLoader(assetsToLoad);
  loader.onComplete = this.spriteSheetLoaded.bind(this);
  loader.load();
}

Main.prototype.spriteSheetLoaded = function() {
  this.pool = new BoardPiecePool();
  this.boardTiles = [];

  board = new Board();
//  this.createBoard()

}

Main.prototype.createBoard = function() {
  this.borrowTiles(10);
  renderer.render(this.stage);
}

Main.prototype.borrowTiles = function(num) {
  for (var i = 1; i < num; i++) {
    var sprite = this.pool.borrowTile();
    sprite.position.x = -32 + (i * 32);
    sprite.position.y = 128;
    
    this.boardTiles.push(sprite);

    this.stage.addChild(sprite);
  }

  renderer.render(this.stage);
}

Main.prototype.returnTiles = function() {
  for (var i = 1; 1 < this.boardTiles.length; i++) {
    var sprite = this.boardTiles[i];
    this.stage.removeChild(sprite);
    this.pool.returnTile(sprite);
  }

  this.boardTiles = [];

}
