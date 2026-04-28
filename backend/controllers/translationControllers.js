import Translation from '../models/translationModel.js';
import catchAsync from '../utils/catchAsync.js';

const MAX_PHRASE_LENGTH = 5;

export const newWord = catchAsync(async (req, res) => {
    const newWord = await Translation.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            newWord
        }
    })
})

export const translateWord = catchAsync(async (req, res) => {
    const input = req.query.word;
    const words = input.toLowerCase().trim().split(/\s+/);

    const from = req.query.from ? req.query.from : 'elderWord'; // language translate from
    const to = req.query.to ? req.query.to : 'englishMeaning'; // language that is going translate to

    const result = await Translation.find({ [from]: { $in: words.concat() } }).lean();
    
    // console.log(result);

    // Used to save all words and their meanings, and not only unuqie
    const translationsMap = words.map(word => {
        const doc = result.find(d =>
            d[from].includes(word)
        );
        return {
            word,
            meanings: doc ? doc[to] : [word, "Not found"]
        };
    });

    res.status(200).json({
        status: "success",
        data: translationsMap,
    });
})

export const getAllTranslations = catchAsync(async (req, res) => {
    const translations = await Translation.find();
    res.status(200).json({
        status: 'success',
        results: translations.length,
        data: {
            translations
        }
    })
})
