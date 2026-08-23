export default Object.freeze({
  applicationName: "aeliteestrangeira.github.io",
  host: "127.0.0.1",
  port: 4000,
  outputDirectory: new URL("../_build/", import.meta.url),
  staticDirectory: new URL("../priv/static/", import.meta.url),
  templateFile: new URL("../lib/my_app_web/controllers/page_html/home.html", import.meta.url),
});
