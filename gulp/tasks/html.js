import fileInclude from "gulp-file-include";
import versionNumber from 'gulp-version-number';
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import htmlmin from "gulp-htmlmin";

export const html = () => {
    return app.gulp.src(app.path.src.html)     //Получаем путь к папке с исходниками из глобального объекта
        .pipe(app.plugins.plumber(                      //Ошибки в виндоус
            app.plugins.notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        // .pipe(include({
        //     includePaths: `src/html`                //Где брать компоненты
        // }))
        .pipe(fileInclude())
        .pipe(app.plugins.replace(/@img\//g, 'assets/images/')) //Замена путей к файлам
        //формат webp
        // .pipe(webpHtmlNosvg())
        .pipe(app.plugins.if(
            app.isBuild, versionNumber({                           //Кэширевание
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            })
        ))

        //очистить комментарии в html
        .pipe(htmlmin({
            // collapseWhitespace: true, // Удаляет пробелы
            removeComments: true     // Удаляет комментарии
            }))

        .pipe(app.gulp.dest(app.path.build.html))                  //Указываем куда перенести файлы HTML
        .pipe(app.plugins.browserSync.stream())                 //Обновления в браузере
}              