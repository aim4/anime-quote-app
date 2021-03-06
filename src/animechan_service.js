import * as CONST from './constants.js';

// Wrapper for anime-chan API
export default class APIWrapper {
    constructor() {
        this.baseUrl = CONST.API_URL;
        this.quotesUri = CONST.QUOTES_URI;
    }

    // Gets the default quotes (order never changes, depends on API (as of 7/26/20))
    async getDefaultQuotes(page = 1) {
        try {
            return $.get({
                url: `${this.baseUrl}/${this.quotesUri}?page=${page}`,
                dataType: CONST.JSON,
                async: true,
            });
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    // Get a random quote
    async getRandomQuote() {
        try {
            return $.get({
                url: `${this.baseUrl}/${this.quotesUri}/random`,
                dataType: CONST.JSON,
                async: true,
            });
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    // Get random quotes by anime
    async getQuotesByAnime(anime) {
        const animeParam = anime || CONST.ANIME_DEFAULT;
        try {
            return $.get({
                url: `${this.baseUrl}/${this.quotesUri}?anime=${animeParam}`,
                dataType: CONST.JSON,
                async: true,
            });
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    // Get random quotes by character
    async getQuotesByCharacter(character) {
        const charParam = character || CONST.CHARACTER_DEFAULT;
        try {
            return $.get({
                url: `${this.baseUrl}/${this.quotesUri}?char=${charParam}`,
                dataType: CONST.JSON,
                async: true,
            });
        } catch (e) {
            console.error(e);
            return null;
        }
    }
}
