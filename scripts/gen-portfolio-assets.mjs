import sharp from "sharp";
import path from "path";

const dir = path.resolve(import.meta.dirname);
const pub = path.resolve(dir, "..", "public");

async function run() {
  await sharp(path.join(dir, "portfolio-professional-alignment.svg"))
    .resize(1600, 1200)
    .jpeg({ quality: 88 })
    .toFile(path.join(pub, "portfolio-professional-alignment.jpg"));

  await sharp(path.join(dir, "portfolio-jean-la-barber.svg"))
    .resize(1600, 1200)
    .jpeg({ quality: 88 })
    .toFile(path.join(pub, "portfolio-jean-la-barber.jpg"));

  console.log("Portfolio preview placeholders generated.");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
