/*const mammoth = require("mammoth");
const fs = require("fs");
const path = require("path");

async function convertWordToHtml() {

    const inputPath = path.join(
        __dirname,
        "../templates/PTW_Formular_Template_Vorlage.dotx"
    );

    const outputPath = path.join(
        __dirname,
        "../templates/template.html"
    );

    try {

        const result = await mammoth.convertToHtml({
            path: inputPath
        });

        fs.writeFileSync(
            outputPath,
            result.value,
            "utf8"
        );

        console.log("HTML erstellt");

    } catch (err) {

        console.error(err);

    }
}

module.exports = {
    convertWordToHtml
};*/