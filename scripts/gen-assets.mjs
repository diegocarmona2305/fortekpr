import sharp from "sharp";
import path from "path";

const dir = path.resolve(import.meta.dirname);
const pub = path.resolve(dir, "..", "public");

async function run() {
  await sharp(path.join(dir, "logo-navbar.svg"))
    .resize(480, 120)
    .png()
    .toFile(path.join(pub, "logo-navbar.png"));

  await sharp(path.join(dir, "logo-nosotros.svg"))
    .resize(600, 600)
    .png()
    .toFile(path.join(pub, "logo-nosotros.png"));

  await sharp(path.join(dir, "favicon.svg"))
    .resize(512, 512)
    .png()
    .toFile(path.join(pub, "favicon.png"));

  await sharp(path.join(dir, "hero-bg.svg"))
    .resize(1920, 1080)
    .jpeg({ quality: 90 })
    .toFile(path.join(pub, "hero-bg.jpg"));

  console.log("Assets generated.");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
