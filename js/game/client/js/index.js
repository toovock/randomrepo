import SoundObject from "agk-soundobject";
import TTS from "agk-tts";
SoundObject.directory = "./sounds/";
SoundObject.extension = ".ogg";
const sound = SoundObject.create("meow");
sound.stop();
sound.play();