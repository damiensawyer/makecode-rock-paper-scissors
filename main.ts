let Hand = 0
let a_score = 0
let b_score = 0
let x = 0
let y = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Hand = Math.randomRange(1, 3)
    if (Hand == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    a_score += 1
    doSomething(a_score)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    b_score += 1
    doSomething(b_score)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    if (a_score > b_score) {
        basic.showString("A:" + a_score + ("B:" + b_score))
    } else if (b_score > a_score) {
        basic.showString("B:" + b_score + ("A:" + a_score))
    } else {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
function doSomething(num: number) {
    basic.clearScreen()
    x = 0
    y = 0
    for (let i = 0; i < num; i++) {
        led.plot(x, y)
        x += 1
        if (x == 5) {
            y += 1
            x = 0
        }
    }
}
