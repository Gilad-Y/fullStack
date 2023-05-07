import songOBJ from "./songOBJ";

class youtube {
    song: songOBJ;
    songList: string[];

    constructor(song: URL, songList: string[]) {
        song = song;
        songList = songList;
    }
    addSong = (song: URL) => {
        this.song = song;
        this.songList.push(this.song.toString());
    }
    getSongs = () => {
        this.songList.map((item) => {
            console.log(item);
        })
    }
    findSong = (keyWord: string) => {
        this.songList.filter((item) => item.includes(keyWord));
    }
}