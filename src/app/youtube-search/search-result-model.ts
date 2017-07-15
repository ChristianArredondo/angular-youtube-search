/**
 * SearchResult is a data-structure thath olds an individual
 * record from a YouTube video search
 */
export class SearchResult {
    id: string;
    title: string;
    description: string;
    thumbnaillUrl: string;
    videoUrl: string;

    constructor(obj?: any) {
        this.id             = obj && obj.id             || null;
        this.title          = obj && obj.title          || null;
        this.description    = obj && obj.description    || null;
        this.thumbnaillUrl  = obj && obj.thumbnaillUrl  || null;
        this.videoUrl       = obj && obj.videoUrl       ||
                                        `https://youtube.com/watch?v=${this.id}`;
    }
}
