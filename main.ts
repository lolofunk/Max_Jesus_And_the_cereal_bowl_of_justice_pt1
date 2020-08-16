scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.splash("6+")
    info.changeScoreBy(6)
    music.powerUp.play()
    Six_Plus += 6
    tiles.setTileAt(tiles.getTileLocation(1, 14), sprites.dungeon.floorDarkDiamond)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile30, function (sprite, location) {
    if (Divine_Sandwich == 0) {
        game.splash("You Died LOL")
        info.changeLifeBy(-2)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 15))
    } else {
        game.splash("Your brain.... its too strong")
        music.pewPew.play()
        tiles.setTileAt(tiles.getTileLocation(10, 1), sprites.dungeon.floorDark5)
        tiles.setTileAt(tiles.getTileLocation(5, 1), sprites.dungeon.floorDark5)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.splash("Music Fills the air", "Angels sing")
    game.splash("Your power is limitless")
    game.splash("You are", "E N L I G H T E N E D")
    info.changeScoreBy(6)
    music.powerUp.play()
    Divine_Sandwich += 1
    scene.cameraShake(5, 1000)
    mySprite.startEffect(effects.halo)
    tiles.setTileAt(tiles.getTileLocation(1, 1), sprites.dungeon.floorDarkDiamond)
    tiles.setTileAt(tiles.getTileLocation(7, 7), myTiles.tile25)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile14, function (sprite, location) {
    info.changeScoreBy(1)
    music.powerUp.play()
    Panther_Power += 1
    game.splash("Thank you", "We must save my brothers")
    game.splash("We cannot win by ourselves", "We lack the IQ points required")
    tiles.setTileAt(tiles.getTileLocation(14, 2), sprites.castle.tileDarkGrass1)
    scene.cameraShake(4, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(hex`10001000030404040406090e0e0a030404040406020d0d0d0d050901010a020c0c0c0c05020d0d0d0d050901010a020c0c0c0c05020d0d0d0d050901010a020c0c0c0c05020d0d0d0d050901010a020c0c0c0c05020d0d0d0d050901010a020c0c0c0c05020d0d0d0d050901010a020c0c0c0c05020d0d0d0d050901010a020c0c0c0c05020d0d0d0d050901010a020c0c0c0c05020d0d0d0d050901010a020c0c0c0c05020d0d0d0d050901010a020c0c0c0c05020d0d0d0d050901010a020c0c0c0c05020d0d0d0d050901010a020c0c0c0c05020d0d0d0d050901010a020c0c0c0c05020d0d0d0d050901010a020c0c0c0c05080d0d0d0d07090b0b0a080c0c0c0c07`, img`
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.builtin.forestTiles9,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.builtin.forestTiles15,sprites.builtin.forestTiles13,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.doorClosedSouth,myTiles.tile32,myTiles.tile33,sprites.dungeon.doorClosedNorth], TileScale.Sixteen))
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile28, function (sprite, location) {
    if (Divine_Sandwich == 0) {
        game.splash("Expect Hell")
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 15))
        info.changeLifeBy(-1)
    }
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
    info.stopCountdown()
    Stage_Level = 2
    info.setLife(3)
    tiles.setTilemap(tiles.createTilemap(hex`1000100024041b191919192d2d191919191c2b212206170e0b0b0b28280b0b0b0d1807212106170810111011111011110918070521061708111529151429151109180722240617081013032914271310091807212206170811141314291314110918071222061708102914151415161009180712210617081111101513101110091807050522170c0a0a0a1f1f0a0a0a0f18201220211a1e1e1e1e12121e1e1e1e1d122325052621050120122212242412122c26250526222020200525252520202520262002242122212224252526202105222325212025262020202022052221202026200520202620202620212025052020262521052221220521052326202222212a`, img`
        . . 2 2 2 2 2 . . 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 . . 2 2 2 2 2 2 . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . 2 2 2 . . . . . . . . 2 2 2 . 
        . . 2 2 2 2 2 . . 2 2 2 2 2 2 . 
        2 . 2 2 2 2 2 . . 2 2 2 2 2 . . 
        2 . 2 . . . 2 . . . . . . . . 2 
        2 . 2 . 2 2 2 . 2 2 2 2 2 2 2 2 
        2 . . . . . . . 2 2 2 2 . . . . 
        2 . 2 2 2 2 2 2 2 . . . . 2 2 2 
        2 . 2 2 2 2 2 2 2 . 2 2 . 2 2 2 
        2 . . . . . . . . . 2 2 . . . . 
        `, [myTiles.transparency16,myTiles.tile5,myTiles.tile8,myTiles.tile10,myTiles.tile11,sprites.dungeon.floorLight0,sprites.dungeon.doorLockedEast,sprites.dungeon.doorLockedWest,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,sprites.dungeon.floorMixed,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4,sprites.dungeon.floorDark3,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.doorOpenNorth,sprites.castle.rock2,sprites.dungeon.floorLight1,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight3,sprites.dungeon.floorLight4,sprites.castle.rock0,sprites.castle.rock1,myTiles.tile18,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark5,sprites.dungeon.stairWest,myTiles.tile19,myTiles.tile20,sprites.dungeon.stairNorth], TileScale.Sixteen))
    game.splash("LEVEL 2")
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile29, function (sprite, location) {
    game.splash("Watch out for the fireballs!")
    game.splash("I'll protect you from the notifications!")
    info.changeScoreBy(6)
    music.powerUp.play()
    Rodent_Companion += 1
    tiles.setTileAt(tiles.getTileLocation(9, 14), sprites.dungeon.floorDarkDiamond)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.splash("What's cookin?")
    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 15))
    info.changeLifeBy(-1)
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
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    if (big_brain == 0) {
        game.splash("Downvoted")
        info.changeLifeBy(-1)
        music.wawawawaa.play()
        tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 15))
    } else {
        game.splash("President Don Quito announces ban of reddit")
        reddit = 1
        info.changeScoreBy(1)
        music.baDing.play()
        tiles.setTileAt(tiles.getTileLocation(1, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(2, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(3, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(4, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(5, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(6, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(7, 12), sprites.dungeon.floorLight0)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile31, function (sprite, location) {
    game.splash("I've seen things you people wouldn't believe")
    game.splash("Attack ships on fire off the shoulder of Orion.")
    game.splash("I watched C-beams glitter in the dark near the Tannhäuser Gate.")
    game.splash("All those moments will be lost in time, like tears in rain.")
    game.splash("Time to die.")
    game.over(true, effects.starField)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile19, function (sprite, location) {
    game.splash("Thank you for saving me Max Jesus")
    info.changeScoreBy(1)
    music.powerUp.play()
    Rodent_Companion += 1
    tiles.setTileAt(tiles.getTileLocation(14, 0), sprites.dungeon.floorLight1)
    tiles.setWallAt(tiles.getTileLocation(7, 8), false)
    tiles.setWallAt(tiles.getTileLocation(8, 8), false)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile9, function (sprite, location) {
    if (Noodle_Energy == 0) {
        game.splash("Wanna see my tie collection?")
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
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, function (sprite, location) {
    game.splash("Stand Acquired", "[R O B O T  R O C K]")
    info.changeScoreBy(1)
    music.powerUp.play()
    Christlike += 1
    tiles.setTileAt(tiles.getTileLocation(1, 0), sprites.dungeon.floorLight0)
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
scene.onOverlapTile(SpriteKind.Player, myTiles.tile26, function (sprite, location) {
    if (Rodent_Companion < 2) {
        game.splash("Expect Hell")
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 15))
        info.changeLifeBy(-1)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile27, function (sprite, location) {
    game.splash("Your cereal bowl finally flows", "Filled to the brim with bone juice")
    info.changeScoreBy(1)
    music.powerUp.play()
    Bone_Juice += 1
    tiles.setTileAt(tiles.getTileLocation(14, 14), sprites.dungeon.floorDarkDiamond)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.splash("What's cookin?")
    info.changeLifeBy(-1)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 15))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedSouth, function (sprite, location) {
    info.stopCountdown()
    info.setLife(99)
    Stage_Level = 4
    tiles.setTilemap(tiles.createTilemap(hex`100010000a0d0d0d0d0d0d0d140d0d0d0d0d0d090705030f0f190f020f0f190f020f170807031a1c020f1a1f1f1c0f0f1a1c0f08070f1b1d0f0f1b1e1e1d0f0f1b1d0208070f0f0f170f010f0f010f170f0f0f0807010f020f170f0f0f0f170f0f0f0108070f0f0f010f010f0f010f010f0f0f0807171a1c0f0f0f10110f0f021a1c0f0807021b1d0f0f0f12130f0f0f1b1d1708070f0f0f010f010f0f010f010f0f0f0807010f0f0f170f0f0f0f170f020f010807150f0f170f010f02010f170f0f1508070f1a1c0f0f0f01010f0f0f1a1c0208070f1b1d0f0f010f0f010f0f1b1d0f0807040f0f17010f020f180115021716080b0e0e0e0e0e0c06060b0e0e0e0e0e0c`, img`
        2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark5,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.dungeon.doorOpenSouth,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.floorDark2,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,sprites.dungeon.purpleSwitchUp,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouth1], TileScale.Sixteen))
    game.splash("LEVEL 3")
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . e e d d d d e e . . . . 
        . . . . . e d f d f e . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . 6 6 1 6 6 6 6 1 6 6 . . . 
        . . . 6 6 1 6 6 6 6 1 6 6 . . . 
        . . . . 6 1 6 6 6 1 1 6 . . . . 
        . . . . 1 1 6 6 6 1 6 6 . . . . 
        . . . . . 1 1 6 6 1 6 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorOpenSouth)
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
scene.onOverlapTile(SpriteKind.Player, myTiles.tile18, function (sprite, location) {
    if (bossy1 == 0) {
        game.splash("I will lead you to safety")
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 6))
        bossy1 += 1
    } else {
        if (lang1 == 0) {
            game.splash("You must speak with the other")
        }
        game.splash("Thank you for believing me")
        game.splash("You Died")
        info.changeLifeBy(-3)
        music.wawawawaa.play()
    }
})
info.onLifeZero(function () {
    game.over(false, effects.melt)
    music.siren.play()
    music.stopAllSounds()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    if (Divine_Sandwich == 1) {
        game.splash("You begin to pull the lever")
        game.splash("Looks like you turned off the electricity")
        game.splash("The Giant Magical Robot stops moving")
        game.splash("\"I thought I paid my electricity bill!", "It's already too high!")
        scene.cameraShake(2, 5000)
        tiles.setTileAt(tiles.getTileLocation(7, 7), myTiles.tile31)
        tiles.setTileAt(tiles.getTileLocation(7, 8), sprites.dungeon.floorDarkDiamond)
        tiles.setTileAt(tiles.getTileLocation(8, 8), sprites.dungeon.floorDarkDiamond)
        tiles.setTileAt(tiles.getTileLocation(8, 7), sprites.dungeon.floorDarkDiamond)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile10, function (sprite, location) {
    if (lang1 == 0) {
        game.splash("I will lead you to safety")
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 6))
        lang1 += 1
    } else {
        if (bossy1 == 0) {
            game.splash("You must speak with the other")
        }
        game.splash("Thank you for saving me")
        game.splash("Now I can go back to destroying youtube")
        info.changeScoreBy(1)
        music.baDing.play()
        tiles.setTileAt(tiles.getTileLocation(6, 4), sprites.dungeon.floorDarkDiamond)
        tiles.setTileAt(tiles.getTileLocation(9, 4), sprites.dungeon.floorDarkDiamond)
        tiles.setTileAt(tiles.getTileLocation(7, 2), sprites.dungeon.floorDarkDiamond)
        tiles.setTileAt(tiles.getTileLocation(8, 2), sprites.dungeon.floorDarkDiamond)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile20, function (sprite, location) {
    game.splash("I cannot let you free matt rodent")
    if (Christlike == 0) {
        game.splash("Pathetic")
        info.changeLifeBy(-1)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 15))
        music.wawawawaa.play()
    } else {
        game.splash("Your stand... its too powerful...")
        info.changeScoreBy(1)
        music.baDing.play()
        tiles.setTileAt(tiles.getTileLocation(14, 10), sprites.dungeon.floorLight1)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    if ((Bone_Juice || Six_Plus) == 0) {
        game.splash("You Died LOL")
        info.changeLifeBy(-1)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 15))
    } else {
        game.splash("*caveman noise*", "We will defeat you..")
        music.pewPew.play()
        tiles.setTileAt(tiles.getTileLocation(1, 2), sprites.dungeon.floorDark5)
        tiles.setTileAt(tiles.getTileLocation(2, 1), sprites.dungeon.floorDark5)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    game.splash("Brain Basta Acquired")
    info.changeScoreBy(1)
    music.powerUp.play()
    big_brain += 1
    tiles.setTileAt(tiles.getTileLocation(5, 10), sprites.dungeon.floorLightMoss)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile13, function (sprite, location) {
    info.changeScoreBy(1)
    game.splash("My comrade is trapped in the dungeon", "Dark forces are controlling him")
    game.splash("He is the only one that believed in me", "You must trust him")
    music.powerUp.play()
    Noodle_Energy += 1
    tiles.setTileAt(tiles.getTileLocation(12, 7), sprites.castle.tileDarkGrass3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    if (Rodent_Companion == 0) {
        game.splash("Doors are locked", "")
        game.splash("There is a rat-sized hole that leads to the other side")
        tiles.setWallAt(tiles.getTileLocation(7, 8), true)
        tiles.setWallAt(tiles.getTileLocation(8, 8), true)
    } else {
        if (big_brain == 2) {
            game.splash("Matt Rodent scurries through the hole")
            game.splash("The gates begin to open")
            game.splash("Two Guardians Block Your Path")
            game.splash("One tells only trues", "The other only lies")
        }
    }
    big_brain += 1
})
let Noodle_Energy = 0
let Bone_Juice = 0
let lang1 = 0
let bossy1 = 0
let Rodent_Companion = 0
let reddit = 0
let big_brain = 0
let Divine_Sandwich = 0
let Six_Plus = 0
let Panther_Power = 0
let Christlike = 0
let Potable = 0
let Stage_Level = 0
let mySprite: Sprite = null
game.splash("MAX JESUS", "AND CEREAL BOWL OF JUSTICE")
game.splash("W E L C O M E  T O  T H E", "~ T H U N D E R D O M E ~")
effects.clouds.startScreenEffect(500)
mySprite = sprites.create(img`
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
controller.moveSprite(mySprite, 120, 120)
scene.setBackgroundColor(15)
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
info.startCountdown(90)
info.setScore(0)
Stage_Level = 1
Potable = 0
Christlike = 0
Panther_Power = 0
Six_Plus = 0
let God_Mode = 0
Divine_Sandwich = 0
big_brain = 0
reddit = 0
Rodent_Companion = 0
bossy1 = 0
lang1 = 0
Bone_Juice = 0
forever(function () {
    if (Stage_Level == 2 && reddit == 0) {
        tiles.setTileAt(tiles.getTileLocation(1, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(2, 12), myTiles.tile8)
        pause(500)
        tiles.setTileAt(tiles.getTileLocation(2, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(3, 12), myTiles.tile8)
        pause(500)
        tiles.setTileAt(tiles.getTileLocation(3, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(4, 12), myTiles.tile8)
        pause(500)
        tiles.setTileAt(tiles.getTileLocation(4, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(5, 12), myTiles.tile8)
        pause(500)
        tiles.setTileAt(tiles.getTileLocation(5, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(6, 12), myTiles.tile8)
        pause(500)
        tiles.setTileAt(tiles.getTileLocation(6, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(7, 12), myTiles.tile8)
        pause(500)
        tiles.setTileAt(tiles.getTileLocation(7, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(6, 12), myTiles.tile8)
        pause(500)
        tiles.setTileAt(tiles.getTileLocation(6, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(5, 12), myTiles.tile8)
        pause(500)
        tiles.setTileAt(tiles.getTileLocation(5, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(4, 12), myTiles.tile8)
        pause(500)
        tiles.setTileAt(tiles.getTileLocation(4, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(3, 12), myTiles.tile8)
        pause(500)
        tiles.setTileAt(tiles.getTileLocation(3, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(2, 12), myTiles.tile8)
        pause(500)
        tiles.setTileAt(tiles.getTileLocation(2, 12), sprites.dungeon.floorLight0)
        tiles.setTileAt(tiles.getTileLocation(1, 12), myTiles.tile8)
        pause(500)
    }
})
forever(function () {
    if (Divine_Sandwich == 0) {
        music.playMelody("E B C5 A B G A F ", 120)
    } else {
        music.playMelody("F G A G A C5 B G ", 150)
    }
})
forever(function () {
    if (Stage_Level == 4) {
        tiles.setTileAt(tiles.getTileLocation(5, 5), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(5, 6), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(5, 6), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(5, 7), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(5, 7), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(5, 8), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(5, 8), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(5, 9), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(5, 9), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(5, 10), myTiles.tile28)
    }
})
forever(function () {
    if (Stage_Level == 4) {
        tiles.setTileAt(tiles.getTileLocation(10, 5), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(9, 5), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(9, 5), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(8, 5), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(8, 5), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(7, 5), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(7, 5), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(6, 5), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(6, 5), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(5, 5), myTiles.tile28)
    }
})
forever(function () {
    if (Stage_Level == 4) {
        tiles.setTileAt(tiles.getTileLocation(5, 10), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(6, 10), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(6, 10), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(7, 10), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(7, 10), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(8, 10), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(8, 10), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(9, 10), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(9, 10), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(10, 10), myTiles.tile28)
    }
})
forever(function () {
    if (Stage_Level == 4) {
        tiles.setTileAt(tiles.getTileLocation(10, 10), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(10, 9), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(10, 9), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(10, 8), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(10, 8), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(10, 7), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(10, 7), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(10, 6), myTiles.tile28)
        pause(1000)
        tiles.setTileAt(tiles.getTileLocation(10, 6), sprites.dungeon.floorDark2)
        tiles.setTileAt(tiles.getTileLocation(10, 5), myTiles.tile28)
    }
})
