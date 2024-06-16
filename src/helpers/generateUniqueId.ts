const ID_LENGTH = 12;
const CHARACTERS =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function generateUniqueId() {
    let uniqueId = '';

    for (let i = 0; i < ID_LENGTH; i++) {
        const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
        uniqueId += CHARACTERS.charAt(randomIndex);
    }

    return uniqueId;
}
