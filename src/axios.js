import axios from "axios";

const instance = axios.create({
  baseURL: `https://us.api.blizzard.com/hearthstone/cards?locale=en_US`,
});
export default instance;
