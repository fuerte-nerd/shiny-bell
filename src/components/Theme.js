import store from "../state/store";
import axios from "axios";
import uniqid from "uniqid";
import FontFaceObserver from "fontfaceobserver";
import nameGenerator from "project-name-generator";
import tinycolor from "tinycolor2";
import { setValidationFont } from "../state/components/actions";
import { setCurrentAppState } from "../state/appState/actions";

class Theme {
  constructor(config = {}) {
    const state = store.getState();
    const { appState, components } = state;
    const name = nameGenerator().raw;
    this.id = uniqid();
    this.name = components.siteTitle.locked
      ? appState.current.name
      : name.map((i) => i.charAt(0).toUpperCase() + i.substr(1)).join(" ");
    this.filename = name.join("_");
    this.createDate = new Date();
    this.primary = components.palette.locked
      ? appState.current.primary
      : this.getRandomColor();
    this.secondaryColorMix = appState.current
      ? appState.current.secondaryColorMix
      : "complement";
    this.secondary = components.palette.locked
      ? appState.current.secondary
      : this.getSecondaryColor(this.secondaryColorMix);
    this.body = components.fonts.body.locked
      ? appState.current.body
      : this.fetchRandomFont("body");
    this.header = components.fonts.header.locked
      ? appState.current.header
      : this.fetchRandomFont("header");
    this.twoFonts = appState.current ? appState.current.twoFonts : false;
    this.fontSize = appState.current ? appState.current.fontSize : 14;
    this.responsiveFontSizes = appState.current
      ? appState.current.responsiveFontSizes
      : true;
    this.mode = appState.current ? appState.current.mode : "light";
    this.rounding = appState.current ? appState.current.rounding : 4;
    this.spacing = appState.current ? appState.current.spacing : 8;
    this.buttonTextTransform = appState.current
      ? appState.current.buttonTextTransform
      : "uppercase";

    this.fontSelectionMode = "auto";
    this.backgrounds = appState.current
      ? appState.current.backgrounds
      : {
          page: "transparent",
          box: "transparent",
        };

    this.hero = {
      img: null,
      position: appState.current ? appState.current.hero.position : "flex-end",
      overlay: appState.current ? appState.current.hero.overlay : true,
      overlayDirection: appState.current
        ? appState.current.hero.overlayDirection
        : "top",
      overlayColor: appState.current
        ? appState.current.hero.overlayColor
        : "none",
    };

    // overwrites
    const params = Object.entries(config);
    for (const [key, value] of params) {
      this[key] = value;
    }
    if (this.secondaryColorMix !== "manual") {
      this.secondary = this.getSecondaryColor(this.secondaryColorMix);
    }
    this.lastModified = new Date();
  }

  getProp(key) {
    return this[key];
  }

  setImage(img) {
    this.hero.img = img;
  }

  getImage(query = this.name) {
    return new Promise((res, rej) => {
      if (store.getState().components.heroImage.locked) {
        console.log("reached");
        this.setImage(store.getState().appState.current.hero.img);
        res();
      } else {
        axios
          .get(`https://source.unsplash.com/1901x968/?${query}`)
          .then((response) => {
            this.setImage(response.request.responseURL);
            res();
          })
          .catch(rej);
      }
    });
  }

  getRandomColor() {
    const generateRandomNumber = () => {
      return Math.floor(Math.random() * 255);
    };

    const rgb = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;

    return tinycolor(rgb).toHexString();
  }

  getSecondaryColor(mix) {
    switch (mix) {
      case "complement":
        return tinycolor(this.getProp("primary")).complement().toHexString();
      case "desaturate":
        return tinycolor(this.getProp("primary")).desaturate(50).toHexString();
      case "saturate":
        return tinycolor(this.getProp("primary")).saturate(50).toHexString();
      case "darken":
        return tinycolor(this.getProp("primary")).darken().toHexString();
      case "lighten":
        return tinycolor(this.getProp("primary")).lighten().toHexString();
      case "manual":
        return store.getState().appState.current.secondary;
      default:
        return;
    }
  }

  setFont(target, font) {
    this[target] = font;
  }

  fetchRandomFont(target) {
    const fontSearchList = store.getState().library.fonts.filter((i) => {
      return store
        .getState()
        .components.fonts[target].searchCategories.includes(i.category);
    });
    return fontSearchList[Math.floor(Math.random() * fontSearchList.length)];
  }

  validateFont(target) {
    return new Promise((res, rej) => {
      const runValidator = async () => {
        await store.dispatch(
          setValidationFont(this[target].family.replace(/ /g, "+"))
        );
        const f = new FontFaceObserver(this[target].family);
        f.load().then(
          async () => {
            await store.dispatch(setValidationFont(null));
            res();
          },
          () => {
            if (this.fontSelectionMode === "manual") {
              rej(target);
            } else {
              console.log("failed");
              this.setFont(target, this.fetchRandomFont(target));
              runValidator();
            }
          }
        );
      };
      runValidator();
    });
  }

  validateFonts() {
    return new Promise((res, rej) => {
      this.validateFont("body")
        .then(() => {
          this.validateFont("header").then(res);
        })
        .catch((err) => rej(err));
    });
  }

  commit() {
    return new Promise(async (res, rej) => {
      store.dispatch(setCurrentAppState(this));
      const img = new Image();
      img.src = this.hero.img;
      img.onload = () => {
        const body = new FontFaceObserver(this.body.family);
        const header = new FontFaceObserver(this.header.family);
        const runValidator = async () => {
          body.load().then(
            () => header.load().then(res, () => runValidator()),
            () => runValidator()
          );
        };
        runValidator();
      };
    });
  }

  save(overwrite = false) {
    return new Promise((res, rej) => {
      const savedThemes = localStorage.getItem("saved");
      if (savedThemes) {
        let parsedSavedThemes = JSON.parse(savedThemes);
        if (!overwrite) {
          const filenames = parsedSavedThemes.map((i) => {
            return i.filename;
          });
          if (filenames.includes(this.filename)) {
            console.log("reached");
            rej("already exists");
            return;
          }
        }
        if (overwrite) {
          parsedSavedThemes = parsedSavedThemes.filter((i) => {
            return i.filename !== this.filename;
          });
        }
        localStorage.setItem(
          "saved",
          JSON.stringify([...parsedSavedThemes, this])
        );
      } else {
        localStorage.setItem("saved", JSON.stringify([this]));
      }
      res();
    });
  }
}

export default Theme;
