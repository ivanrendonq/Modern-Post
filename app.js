const {
    app,
    BrowserWindow,

} = require('electron')

let appWindow

function createWindow(){
    appWindow = new BrowserWindow({
        width: 1200,
        height: 700
    })

    appWindow.loadFile('dist/modern-post/browser/index.html');

    appWindow.on('closed', function(){
        appWindow = null;
    })

    appWindow.setMenu(null);
}

app.whenReady().then(() => {
    createWindow();
})
