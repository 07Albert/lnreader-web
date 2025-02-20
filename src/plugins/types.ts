export interface NovelItem {
    id: string;
    name: string;
    cover?: string;
    author?: string;
    genres?: string[];
    status?: string;
    url: string;
  }
  
  export interface ChapterItem {
    id: string;
    name: string;
    url: string;
    releaseDate?: string;
  }
  
  export interface SourceNovel extends NovelItem {
    description?: string;
    chapters: ChapterItem[];
  }