import * as cheerio from 'cheerio';

export abstract class PluginBase {
    abstract id: string;
    abstract name: string;
    abstract icon: string;
    abstract baseUrl: string;
    abstract version: string;

    protected async fetchHtml(url: string): Promise<cheerio.CheerioAPI> {
        const response = await fetch(url);
        const html = await response.text();
        return cheerio.load(html);
    }

    abstract searchNovels(searchTerm: string, page?: number): Promise<NovelItem[]>;
    abstract getNovelDetails(url: string): Promise<SourceNovel>;
    abstract getChapterContent(url: string): Promise<string>;
}