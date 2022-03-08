import Inputs from "../components/input";
const max = Inputs["max_stars"];
class Song {
  constructor(name, children) {
    this.name = name;
    this.children = children;
  }
}
let rootSong = new Song(0, []);
let idx = 1;
let songs = [rootSong];

function GenTree() {
  while (songs[0] && idx < max) {
    let song = songs.shift();
    let num_child = Math.floor(2 + Math.random() * 3);
    for (let i = 0; i < num_child; i++) {
      let newSong = new Song(idx, []);
      songs.push(newSong);
      song.children.push(newSong);
      idx++;
    }
  }
  return rootSong;
}

export default GenTree;
