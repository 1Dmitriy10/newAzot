import { configFTP } from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';

export const ftp = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    
    return app.gulp.src(`dist/assets/**/*`)
        //Ошибки
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FTP",
                message: "Error: <%= error.message %>"
            })
        ))
        //Соединение
        // Оборачивает все в папку с названием проекта
        // .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
         .pipe(ftpConnect.dest(`/${app.path.ftp}`));
}
