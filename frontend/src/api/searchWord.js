const url = 'https://witcher-elder-speech-translator-backend.onrender.com';

export default async function searchWord(inputText, setIsLoading, from, to) {
    if (inputText.trim().length <= 1) return;
    setIsLoading(true);
    try {
        const input = encodeURIComponent(inputText.trim());

        const res = await fetch(
            `${url}/api/v1/translations/translate?word=${input}&from=${from}&to=${to}`,
        );
        if (!res.ok) {
            throw new Error('Something went wrong!');
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    } finally {
        setIsLoading(false);
    }
}