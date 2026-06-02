//const { convertWordToHtml } = require("./src/modules/word");

const { app, BrowserWindow } = require("electron");
const path = require("path");

async function createWindow() {
    // 1. Конвертация DOTX → HTML
    //await convertWordToHtml();

    // 2. Создание окна
    const win = new BrowserWindow({
        width: 1400,
        height: 900,

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    // 3. Загрузка HTML
    win.loadFile(path.join(__dirname, "src/index.html"));
}

app.whenReady().then(createWindow);
