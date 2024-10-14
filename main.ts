basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (kBit.ultra() < 9) {
        kBit.carStop()
        kBit.run(KBitDir.RunForward, 50)
        basic.pause(500)
        kBit.run(KBitDir.TurnLeft, 30)
        basic.pause(500)
        kBit.run(KBitDir.RunForward, 60)
    } else {
        kBit.run(KBitDir.RunForward, 80)
    }
})
