import path from "node:path";
import { Text, NewText } from "../types";
import { parse, serialize } from "../utils/json";
import { v4 as uuidv4 } from 'uuid';
const jsonDbPath = path.join(__dirname, "/../data/texts.json");


const defaultTexts: Text[] = [
  {
    id: uuidv4(),
    content: "Le chat dort sur le canapé.",
    level: "easy",
  },
  {
    id: uuidv4(),
    content: "La pluie tombe doucement sur le toit de la maison.",
    level: "medium",
  },
  {
    id: uuidv4(),
    content: "L'intelligence artificielle transforme radicalement notre façon de vivre et de travailler.",
    level: "hard",
  },
  {
    id: uuidv4(),
    content: "Les fleurs dans le jardin sont magnifiques.",
    level: "easy",
  },
  {
    id: uuidv4(),
    content: "Les technologies émergentes influencent les tendances du marché mondial.",
    level: "medium",
  },
];

function readAllTexts(level?: string): Text[] {
  const texts = parse(jsonDbPath, defaultTexts);
  
  if (!level) {
    return texts;
  }

  const filteredTexts = texts.filter((text) => {
    return text.level === level;
  });

  return filteredTexts;
}

function readOneText(id: string): Text | undefined {
  const texts = parse(jsonDbPath, defaultTexts);

  const text = texts.find((text) => text.id === id);
  if(!text){
    return undefined;
  }
  return text;
}

function createOneText(newText: NewText): Text {
  const texts = parse(jsonDbPath, defaultTexts);

  const newId = uuidv4();

  const createdText = {
    id: newId,
    ...newText,
  };

  console.log(createdText);
  texts.push(createdText);
  serialize(jsonDbPath, texts);

  return createdText;
}

function deleteOneText(id: string): Text | undefined {
  const texts = parse(jsonDbPath, defaultTexts);
  const index = texts.findIndex((text) => text.id === id);
  if (index === -1) {
    return undefined;
  }

  const deletedElements = texts.splice(index, 1);
  serialize(jsonDbPath, texts);
  return deletedElements[0];
}

function updateOneText(
  textId: string, 
  newText: NewText): Text | undefined {

    const texts = parse(jsonDbPath, defaultTexts);

    const text = texts.find((text) => text.id === textId);
    if(!text){
      return undefined;
    }

    text.content = newText.content;
    text.level = newText.level;

    serialize(jsonDbPath, texts);
    return text;
  }

export {
  readAllTexts,
  readOneText,
  createOneText,
  deleteOneText,
  updateOneText,
};