import { combineReducers } from "redux";

const songs = [
  { title: "Ninjago Overtue", duration: "4:05" },
  { title: "The Weekend Whip", duration: "8:54" },
  { title: "The Croc Swamp", duration: "7:35" },
  { title: "Hills of Chima", duration: "3:33" }
];

const songsReducer = () => {
  return songs;
};

export default combineReducers({
  songs: songsReducer
});
