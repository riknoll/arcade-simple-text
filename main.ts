//% color=#3d8a59 block="Text Sprites"
namespace simpleText {
    //% blockId="simple_text_create_text"
    //% block="create text sprite $text with foreground $foreground background $background and kind $kind"
    //% kind.shadow=spritekind
    //% foreground.shadow=colorindexpicker
    //% foreground.defl=1
    //% background.defl=0
    //% background.shadow=colorindexpicker
    //% text.defl="hello"
    export function createTextSprite(text: string, foreground: number, background: number, kind: number): Sprite {
        const font = image.getFontForText(text);
        const textImage = image.create(font.charWidth * text.length, font.charHeight);
        if (background) textImage.fill(background);
        textImage.print("text", 0, 0, foreground, font);

        return sprites.create(textImage, kind);
    }
} 