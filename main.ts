basic.forever(function () {
    for (let I = 0; I <= 3; I++) {
        for (let J = 0; J <= I; J++) {
            led.plot(J * 2 + (2 - I), 2)
            led.plot(2, J * 2 + (2 - I))
        }
        basic.pause(200)
    }
    basic.clearScreen()
})
