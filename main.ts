scene.onOverlapTile(SpriteKind.Player, myTiles.tile14, function (sprite, location) {
    info.changeScoreBy(1)
    music.powerUp.play()
    Panther_Power += 1
    game.splash("Thank you", "We must save my brothers")
    game.splash("We cannot win by ourselves", "We lack the IQ points required")
    tiles.setTileAt(tiles.getTileLocation(14, 2), sprites.castle.tileDarkGrass1)
    scene.cameraShake(4, 100)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    info.changeScoreBy(1)
    music.powerUp.play()
    Panther_Power += 1
    if (Panther_Power == 3) {
        game.splash("We're all together now", "Lets get this bread")
    } else {
        game.splash("Now to get my last brother...")
    }
    tiles.setTileAt(tiles.getTileLocation(4, 7), sprites.castle.tilePath5)
    scene.cameraShake(4, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true, effects.dissolve)
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile16, function (sprite, location) {
    game.splash("WARNING: GNOME WEARING TIE", "HIGHLY DANGEROUS")
    tiles.setTileAt(tiles.getTileLocation(10, 0), sprites.castle.tileDarkGrass3)
    tiles.setTileAt(tiles.getTileLocation(15, 5), sprites.castle.tileDarkGrass3)
    tiles.setTileAt(tiles.getTileLocation(13, 0), myTiles.tile9)
    tiles.setTileAt(tiles.getTileLocation(15, 4), myTiles.tile9)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile15, function (sprite, location) {
    game.splash("Oh?", "You think you can challenge me?")
    game.splash("You know I'm sapient")
    game.splash("You cannot defeat me")
    if (Panther_Power < 3) {
        game.splash("subscribe to my onlyfans :)")
        info.changeLifeBy(-1)
        music.wawawawaa.play()
    } else {
        info.changeScoreBy(1)
        music.baDing.play()
        game.splash("No... But my IQ was off that charts")
        game.splash("My post-modern education wasn't enough")
        game.splash("Sorry master.... I have failed you")
        scene.cameraShake(5, 100)
        tiles.setTileAt(tiles.getTileLocation(14, 15), sprites.dungeon.floorDark3)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile9, function (sprite, location) {
    if (Noodle_Energy == 0) {
        game.splash("Oh? You don't like play functions?", "hehehehehehehehe")
        info.changeLifeBy(-1)
        music.wawawawaa.play()
    } else {
        game.splash("But the joke isnt funny!!!!!!", "NOOOOOOOO")
        info.changeScoreBy(1)
        music.baDing.play()
        tiles.setTileAt(tiles.getTileLocation(13, 0), sprites.castle.tileDarkGrass2)
        tiles.setTileAt(tiles.getTileLocation(15, 4), sprites.castle.tileDarkGrass2)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile12, function (sprite, location) {
    info.changeScoreBy(1)
    music.powerUp.play()
    Panther_Power += 1
    game.splash("Thank you Max Jesus")
    game.splash("Our friends are our power")
    tiles.setTileAt(tiles.getTileLocation(15, 13), sprites.castle.tileGrass1)
    scene.cameraShake(4, 100)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile7, function (sprite, location) {
    if (Potable == 0) {
        game.splash("You Died")
        info.changeLifeBy(-1)
        music.wawawawaa.play()
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    game.splash("Immeasurable power flows through your body")
    info.changeScoreBy(1)
    music.powerUp.play()
    Potable += 1
    tiles.setTileAt(tiles.getTileLocation(15, 9), sprites.castle.tileGrass1)
    scene.cameraShake(1, 100)
    tiles.setTileAt(tiles.getTileLocation(13, 9), sprites.castle.tileGrass3)
    tiles.setTileAt(tiles.getTileLocation(0, 8), sprites.castle.tilePath5)
    tiles.setTileAt(tiles.getTileLocation(8, 9), sprites.castle.shrub)
    tiles.setTileAt(tiles.getTileLocation(7, 3), sprites.castle.tileDarkGrass2)
})
info.onLifeZero(function () {
    game.over(false, effects.melt)
    music.siren.play()
    music.stopAllSounds()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile13, function (sprite, location) {
    info.changeScoreBy(1)
    music.powerUp.play()
    Noodle_Energy += 1
    tiles.setTileAt(tiles.getTileLocation(12, 7), sprites.castle.tileDarkGrass3)
})
let Noodle_Energy = 0
let Panther_Power = 0
let Potable = 0
game.splash("MAX JESUS", "AND CEREAL BOWL OF JUSTICE")
game.splash("W E L C O M E  T O  T H E", "~ T H U N D E R D O M E ~")
effects.clouds.startScreenEffect(500)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e d d d d e e . . . . 
    . . . . e e d f d f e e . . . . 
    . . . . . e d d d d e . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . c c 1 c c c c 1 c c . . . 
    . . . c c 1 1 c c c 1 c c . . . 
    . . . . c c 1 c c c 1 c . . . . 
    . . . . . c 1 c c 1 1 . . . . . 
    . . . . . . c c c 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 140, 140)
scene.setBackgroundColor(0)
tiles.setTilemap(tiles.createTilemap(hex`100010002a1614160b0c0d1414162b14141514150b0c0e1414161516071216090a1411141416151409080808080a16090a142516150b0d11141414031615141116090a1514070f0c0c0c0c0d1607090a140712141c1b1c171b1c1b07141516141514072b220713121007171210111210131611161907191902071e2222221d102415071603191912190720111211181110071315190f0c0d190720120112181b17031b03191007101907201111111807101b12171919071119071f2121211a10071c071c10190f0e1909080808080a13101b101b111907101919191919041010111c172307190f08080a1911100405040410120712191919191919191906130728292627`, img`
    . . . . 2 2 2 . . . . . . . . . 
    2 2 2 . . . . . 2 2 . 2 2 . 2 . 
    . . . . 2 2 2 2 2 2 . 2 2 . . . 
    . 2 2 2 . . . . . . . 2 . 2 2 . 
    . 2 2 2 2 2 2 2 . 2 2 2 . 2 2 . 
    . . . . . . . 2 . . . . . . 2 . 
    . 2 2 2 2 2 . 2 2 2 2 2 2 . 2 . 
    . 2 . . . 2 . . . . . 2 . . 2 . 
    . . . 2 . 2 . 2 2 2 . 2 2 2 2 . 
    . 2 2 2 . 2 . 2 . 2 . . . . . . 
    . 2 2 2 . 2 . 2 . 2 . 2 2 . 2 . 
    . . 2 2 . 2 . . . . . 2 2 . 2 . 
    2 . 2 2 . 2 2 2 2 2 2 . 2 . 2 . 
    2 . 2 2 . . . . . . 2 2 2 . . . 
    2 . 2 2 2 2 . 2 2 . . . . 2 2 2 
    2 . . . . . . . . . 2 2 . . . . 
    `, [myTiles.transparency16,myTiles.tile6,myTiles.tile4,myTiles.tile7,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight1,sprites.dungeon.floorLight0,sprites.builtin.forestTiles0,sprites.builtin.forestTiles2,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3,sprites.builtin.forestTiles21,sprites.builtin.forestTiles22,sprites.builtin.forestTiles23,sprites.builtin.forestTiles20,sprites.builtin.forestTiles16,sprites.builtin.forestTiles4,sprites.castle.saplingPine,sprites.castle.saplingOak,sprites.castle.shrub,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass1,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.castle.tilePath9,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath2,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,sprites.dungeon.stairLarge,sprites.dungeon.floorMixed,sprites.dungeon.floorDark3,sprites.dungeon.collectibleInsignia,myTiles.tile16], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(mySprite)
info.setLife(1)
info.startCountdown(60)
info.setScore(0)
Potable = 0
let Christlike = 0
Panther_Power = 0
let Six_Plus = 0
let God_Mode = 0
let Divine_Sandwich = 0
let big_brain = 0
forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
game.onUpdateInterval(500, function () {
    if (Christlike == 1) {
        God_Mode += 1
    }
    if (Panther_Power == 3) {
        God_Mode += 1
    }
    if (Potable == 1) {
        God_Mode += 1
    }
    if (Six_Plus == 1) {
        God_Mode += 1
    }
})
