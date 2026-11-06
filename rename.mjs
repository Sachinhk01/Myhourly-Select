import fs from "fs";
import path from "path";

const SKIP = ["node_modules", "dist", ".git"];
const EXT = [".js", ".jsx", ".json", ".html", ".css", ".md"];

// Order matters: most specific first
const RULES = [
  [/MyHourly Select/gi, "Vintage Fashion"],
  [/Myhourly-Select/g, "Vintage-Fashion"],
  [/myhourly-select/g, "vintage-fashion"],
  [/MyHourly/gi, "Vintage Fashion"],
];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP.includes(name)) continue;
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (EXT.includes(path.extname(name))) {
      let text = fs.readFileSync(full, "utf8");
      let updated = text;
      for (const [pattern, replacement] of RULES) {
        updated = updated.replace(pattern, replacement);
      }
      if (updated !== text) {
        fs.writeFileSync(full, updated);
        console.log("Updated:", full);
      }
    }
  }
}

walk(".");
