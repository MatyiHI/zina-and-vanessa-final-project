sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.confetti, 100)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let clover: Sprite = null
scene.setBackgroundImage(assets.image`Background`)
let bunny = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 . . . 1 1 1 . . . 
    . . . . 1 1 1 . . . 1 1 1 . . . 
    . . . . 1 1 1 . . . 1 1 1 . . . 
    . . . . 1 1 1 . . . 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 f 1 1 f 1 1 1 1 . . 
    . . . . 1 1 1 3 3 1 1 1 1 1 1 . 
    . . . . 1 1 1 3 3 1 1 1 1 1 1 . 
    . . . . 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 . . . 1 1 1 . . . 
    . . . . 1 1 1 . . . 1 1 1 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(bunny)
bunny.setStayInScreen(true)
game.onUpdateInterval(5000, function () {
    clover = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . f 7 7 f 7 7 f . . . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . f f . f 7 7 7 f . f f . . . 
        . f 7 7 f . f 7 f . f 7 7 f . . 
        . f 7 7 7 f . f . f 7 7 7 f . . 
        . . f 7 7 7 f . f 7 7 7 f . . . 
        . f 7 7 7 f . f . f 7 7 7 f . . 
        . f 7 7 f . f 7 f . f 7 7 f . . 
        . . f f . f 7 7 7 f . f f . . . 
        . . . . f 7 7 7 7 7 f . . . . . 
        . . . . f 7 7 f 7 7 f . . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), 50)
    bee = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . 1 1 . . . 1 . . . . . . . . 
        . 1 1 1 1 . 1 1 1 . . . f f . . 
        . 1 1 1 1 1 1 1 . . . f f f . . 
        . . 1 1 . 1 1 . . . f . . . . . 
        . . . 1 . 1 . f f f . . f f f . 
        . . f f 5 5 f f 5 5 f f . f f . 
        . 5 f f 5 5 f 5 5 5 5 . . . . . 
        . 5 f 5 5 f f 5 5 5 5 5 . . . . 
        f 5 f 5 5 f f 5 5 f 5 5 . . . . 
        f 5 f 5 5 f f 5 5 5 f f . . . . 
        . 5 f f 5 5 f f 5 5 5 . . . . . 
        . . f f 5 5 f f 5 5 . . . . . . 
        . . . . f . . f . . . . . . . . 
        . . . f . . f . . . . . . . . . 
        . . f . . f . . . . . . . . . . 
        `, randint(-50, 50), 50)
    bee.setKind(SpriteKind.Enemy)
})
