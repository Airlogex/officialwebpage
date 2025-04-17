import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderPath = path.join(__dirname, "src/component");
let idCounter = 1;

const slugify = (text) => {
  const words = text.trim().split(/\s+/).slice(0, 3);
  return words
    .join("-")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const addIdsToTags = async () => {
  const translations = {};

  try {
    const files = await fs.readdir(folderPath);

    for (const file of files) {
      if (file.endsWith(".jsx")) {
        const fullPath = path.join(folderPath, file);
        let content = await fs.readFile(fullPath, "utf8");

        // Match tags with direct inner text
        const regex = /<(\w+)([^>]*)>([^<]+)<\/\1>/g;

        content = content.replace(regex, (match, tag, attrs, innerText) => {
          const cleanText = innerText.trim();

          // Skip if empty, already has id, or no visible text
          if (!cleanText || /\sid=/.test(attrs)) return match;

          const id = `${slugify(cleanText)}-${idCounter++}`;
          translations[id] = cleanText;

          // Inject id safely before closing ">" of opening tag
          return match.replace(
            new RegExp(`<${tag}([^>]*)>`),
            `<${tag}$1 id="${id}">`
          );
        });

        await fs.writeFile(fullPath, content, "utf8");
      }
    }

    // Save translations
    await fs.writeFile("translation.json", JSON.stringify(translations, null, 2), "utf8");
    console.log("✅ IDs added and translations saved.");
  } catch (err) {
    console.error("❌ Error occurred:", err);
  }
};

const undoIdsFromTags = async () => {
  try {
    const files = await fs.readdir(folderPath);

    for (const file of files) {
      if (file.endsWith(".jsx")) {
        const fullPath = path.join(folderPath, file);
        let content = await fs.readFile(fullPath, "utf8");

        // Remove all id attributes
        content = content.replace(/\s+id="[^"]*"/g, "");

        await fs.writeFile(fullPath, content, "utf8");
      }
    }

    console.log("↩️ Reverted IDs from JSX files.");
  } catch (err) {
    console.error("❌ Error while undoing IDs:", err);
  }
};

// Run the one you need:
addIdsToTags();
// undoIdsFromTags(); // Uncomment this to revert changes
