//Основной модуль
import gulp from "gulp";
//Импорт модулей
import { path } from "./gulp/config/path.js"

//Передаем значение в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: process.argv.includes('--dev'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

//Импорт задач
import { copy } from "./gulp/tasks/copy.js"
import { reset } from "./gulp/tasks/reset.js"
import { html } from "./gulp/tasks/html.js"
import { plugins } from "./gulp/config/plugins.js"
import { server } from "./gulp/tasks/server.js"
import { scss } from "./gulp/tasks/scss.js"
import { vendorCss } from "./gulp/tasks/scss.js"
import { js } from "./gulp/tasks/js.js"
import { img } from "./gulp/tasks/img.js"
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js"
import { zip } from "./gulp/tasks/zip.js"
import { ftp } from "./gulp/tasks/ftp.js"

// Последовательность обработки шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

//Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss, vendorCss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.img, img)
}

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, vendorCss, js, img))

//Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployZIP = gulp.series(reset, mainTasks, zip)
const deployFTP = gulp.series(reset, mainTasks, ftp)

//Экспорт сценариев
export { dev }
export { build }
export { deployZIP }
export { deployFTP }

//Выполнение сценария по умолчанию
gulp.task('default', dev)