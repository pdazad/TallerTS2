export class Serie{
     id: number;
     name: string;
     channel: string;
     seasons: number;
     image: string;
     info: string;
     link: string;

    constructor(id: number, name: string, channel: string, seasons: number, image: string, info: string, link: string){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.image  = image;
        this.info = info;
        this.link = link;
    }
}