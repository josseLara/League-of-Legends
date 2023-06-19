export interface IChamps {
    id: string;
    title: string;
    image: string;
    tags: string[];
    info: IChampsInfo;
}

export interface IChampsInfo {
    
        attack: string
        defense: string
        difficulty: string
        magic: string
  
}