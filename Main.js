function Main() {
  // Basic Stage Generation
  this.stage = new PIXI.Stage(0x66FF99);
  renderer = PIXI.autoDetectRenderer(
      512,
      384,
      document.getElementById('game-canvas')
  );

  //Background Sprites
//  var backSprite = PIXI.Texture.fromImage('resources/draddet.png');
//  backTile = new PIXI.Sprite(backSprite);
//  backTile.position.x = 0;
//  backTile.position.y = 0;
//  this.stage.addChild(backTile);
 
  this.loadSpriteSheet();

}

Main.prototype.loadSpriteSheet = function() {
  var assetsToLoad = ['resources/draddet.json'];
  loader = new PIXI.AssetLoader(assetsToLoad);
  loader.onComplete = this.spriteSheetLoaded.bind(this);
  loader.load();
}

Main.prototype.spriteSheetLoaded = function() {
  board = new Board();
  pieces = new Pieces();

  requestAnimFrame(this.update.bind(this));
}

Main.prototype.update = function() {

  renderer.render(this.stage);
  requestAnimFrame(this.update.bind(this));
}

