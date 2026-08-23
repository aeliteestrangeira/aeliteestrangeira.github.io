import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../../", import.meta.url));

export async function buildApplication(rootDirectory = projectRoot) {
  const outputDirectory = resolve(rootDirectory, "_build");
  const templateFile = resolve(
    rootDirectory,
    "lib/my_app_web/controllers/page_html/home.html",
  );

  await rm(outputDirectory, { force: true, recursive: true });
  await mkdir(outputDirectory, { recursive: true });
  await cp(resolve(rootDirectory, "priv/static"), outputDirectory, { recursive: true });
  await cp(resolve(rootDirectory, "assets/css"), resolve(outputDirectory, "css"), {
    recursive: true,
  });
  await cp(resolve(rootDirectory, "assets/js"), resolve(outputDirectory, "js"), {
    recursive: true,
  });
  await cp(resolve(rootDirectory, "assets/vendor"), resolve(outputDirectory, "vendor"), {
    recursive: true,
  });

  const homePage = await readFile(templateFile, "utf8");
  const outputFile = resolve(outputDirectory, "index.html");
  await mkdir(dirname(outputFile), { recursive: true });
  await writeFile(outputFile, homePage);

  return outputDirectory;
}

const currentFile = fileURLToPath(import.meta.url);

if (process.argv[1] && resolve(process.argv[1]) === currentFile && process.argv.includes("--build")) {
  await buildApplication();
}
