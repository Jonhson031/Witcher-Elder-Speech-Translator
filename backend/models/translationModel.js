import mongoose from "mongoose";

const translationSchema = new mongoose.Schema({
    elderWord: {
        type: [String],
        required: [true, 'Should be a word'],
        trim: true
    },
    englishMeaning: {
        type: [String],
        required: [true, 'Should have an English Meaning'],
        trim: true
    },
    note: {
        type: String,
        trim: true
    }
}, { strict: true });

const Translation = mongoose.model('Translation', translationSchema);

export default Translation;