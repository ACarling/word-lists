// {"爱": {
//     "word": "爱",
//     "level": 1,
//     "pronounciation": "ài",
//     "radicals": "爫",
//     "strokes": "10",
//     "translations": {
//         "en": [
//             "to love",
//         ]
//     }
// },...

const readFile = "zh-raw.json";
const file = Bun.file(readFile);
const zhRaw = await file.json();


let parsed = {}


zhRaw.forEach(el => {
    let obj = {
        word: el.hanzi,
        level: el.level,
        pronunciation: el.pinyin,
        radicals: el.radicals,
        strokes: el.strokes,
        translations: el.translations
    }
    parsed[el.hanzi] = obj
});






const writeFile = "zh.json";
await Bun.write(writeFile, JSON.stringify(parsed));



