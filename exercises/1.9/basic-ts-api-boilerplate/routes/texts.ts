import { Router } from "express";
import { NewText } from "../types";
import {
  readAllTexts,
  readOneText,
  createOneText,
  deleteOneText,
  updateOneText,
} from "../services/texts";

const router = Router();

router.get("/", (req, res) => {
  const level = req.query.level as string | undefined;
  const allTexts = readAllTexts(level);
  return res.json(allTexts);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const text = readOneText(id);
  if(!text){
    return res.status(404).json({ message: "Text not found" });
  }
  return res.json(text);
});

router.post("/", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("content" in body) ||
    !("level" in body) ||
    typeof body.content !== "string" ||
    typeof body.level !== "string" ||
    !body.content.trim() ||
    !body.level.trim() ||
    (body.level != "easy" && body.level != "medium" && body.level != "hard")
  ) {
    return res.sendStatus(400);
  }
  
  const {content, level} = body as NewText;

  const newText = createOneText({content, level});

  return res.json(newText);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const deletedText = deleteOneText(id);
  if(!deletedText){
    return res.status(404).json({ message: "Text not found" });
  }
  return res.json(deletedText);
});

router.put("/:id", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("content" in body) ||
    !("level" in body) ||
    typeof body.content !== "string" ||
    typeof body.level !== "string" ||
    !body.content.trim() ||
    !body.level.trim() ||
    (body.level != "easy" && body.level != "medium" && body.level != "hard")
  ) {
    return res.sendStatus(400);
  }
  const id = req.params.id;

  if (typeof id !== "string") {
    return res.sendStatus(400);
  }

  const {content, level} = body as NewText;

  const updatedText = updateOneText(id, {content, level});
  if(!updatedText){
    return res.sendStatus(404); 
  }

  return res.send(updatedText);
});

export default router;
