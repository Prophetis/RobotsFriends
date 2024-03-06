import {createAside} from "../../scripts/factories/createAside.js";
import {createHeader} from "../../scripts/factories/createHeader";

document.addEventListener('DOMContentLoaded', async () => {
  await createHeader(
    'RobotFriends',
    null,
    "Joseph Joe",
    'Josephjoe.gmail.com'
  );
  await createAside();
});
