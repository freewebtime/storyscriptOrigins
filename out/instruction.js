"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let __env = require(`./environment`);
let __context = { __text: [] };
let __serializer = __env.getSerializer();
__context['ссылка'] = function (урл, текст) {
    return `[${__serializer.serialize(текст, '\r\n')}](${__serializer.serialize(урл, '\r\n')})`;
};
__context['фото'] = function (урл, текст, imgRoot) {
    if (!imgRoot) {
        imgRoot = `https:\//raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/`;
    }
    ;
    return `![${__serializer.serialize(текст, '\r\n')}](${__serializer.serialize(imgRoot, '\r\n')}${__serializer.serialize(урл, '\r\n')})`;
};
__context['__text'] = [...__context['__text'], `# Storyscript. Инструкция`];
;
__context['__text'] = [...__context['__text'], `Это - краткая инструкция пользователя языка программирования ${__serializer.serialize(__context['ссылка'](`https:\//github.com/freewebtime/storyscript`, `storyscript`), '\r\n')} в ${__serializer.serialize(__context['ссылка'](`https:\//code.visualstudio.com/`, `Microsoft Visual Studio Code`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `## Начало работы`];
;
__context['__text'] = [...__context['__text'], `Установите ${__serializer.serialize(__context['ссылка'](`https:\//code.visualstudio.com/`, `Microsoft Visual Studio Code`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`vscode_new.png`, `vscode`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Установите ${__serializer.serialize(__context['ссылка'](`https:\//marketplace.visualstudio.com/items?itemName=jackstorytailor.storyscript-vscode`, `Storyscript плагин для vscode`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`install_extension.png`, `пустая папка`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Начинаем`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Самый простой способ приступить к работе - это открыть пустую папку в vscode и скопировать в нее тестовый проект`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Откройте пустую папку`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`vscode_empty.png`, `пустая папка`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Кликните правой клавишей мыши в корне проекта и выберите из выпадающего меню "Initialize example project in a working root"`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`init_example_project.png`, `скопировать тестовый проект в корневую папку`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Эта операция скопирует в корневую папку тестовый проект. Учтите, что если в корневой папке уже есть такие файлы, то они будут перетерты. Подтверждайте копирование`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`confirm_init_example_project.png`, `подтвердить копирование`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Тестовый проект скопирован в корневую папку. Примерно так должна выглядеть файловая структура проекта`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`example_project_created.png`, `тестовый проект создан`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Обновите node-модули. Для этого`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Откройте терминал`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`open_terminal.png`, `npm install в терминале`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Вбейте комманду "npm install" или "npm i" и нажмите "ENTER"`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`npm_install.png`, `npm install в терминале`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `node-модули обновлены`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`node_modules_created.png`, `npm install в терминале`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `терминал можно закрыть`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`close_terminal.png`, `закрыть терминал`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Исходные файлы истории хранятся в папке story (\*.sts)`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`story_source_files.png`, `исходники истории`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Подготовка проекта завершена. Это его рабочее состояние`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Теперь выполним сборку тестового проекта. `];
;
__context['__text'] = [...__context['__text'], `Откройте файл с исходниками истории. Например, story/index.sts`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Открывайте Command Palette (Меню View -> Command Palette или комбинация клавиш Ctrl+Shift+P) `];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`command_palette.png`, `command palette`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`command_palette_openned.png`, `command palette openned`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Выбирайте комманду "Compile: Compile and show preview" (по-умолчанию Ctrl+Alt+P)`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`compile_and_show_preview.png`, `compile and show preview`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `В папке src сохраняется история на typescript. В папке out будет эта история на javascript`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`compiled_story.png`, `compiled story`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Когда сборка истории завершена, открывается предпросмотр`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`preview_story.png`, `compiled story`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Окно предпросмотра можно размещать как удобно`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`layout_2.png`, `compiled story`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`layout_3.png`, `compiled story`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Текст, показанный в окне предпросмотра, сохраняется в файл "story output.txt" в корне проекта`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`story_output.png`, `story output`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `## Для всех (база)`];
;
__context['__text'] = [...__context['__text'], `Упрощенная инструкция затрагивает только базовый функционал.`];
;
__context['__text'] = [...__context['__text'], `Этого хватит, чтобы собрать сценарий, и предполагается, что пользователю не понадобится никаких технических знаний`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Текст истории`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Давайте удалим все содержимое файла story/index.sts и начнем историю с чистого листа`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Обычный текст`];
;
__context['__text'] = [...__context['__text'], `Обычный текст попадает в финальную сборку "как есть", без изменений`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`simple_text.png`, `simple text`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Комментарии`];
;
__context['__text'] = [...__context['__text'], `Комментарии - это фрагмент текста, который не пойдет в финальную сборку. Комментарии нужны для самих разработчиков истории. Весь текст от символов /\/ и до конца строки будет считаться комментарием`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`comments.png`, `comments`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Спец-символы (перенос строки, табуляция)`];
;
__context['__text'] = [...__context['__text'], `Есть три спец-символа, которые попадают в финальную сборку нестандартно. `];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Это символ переноса строки`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`endline_symbol.png`, `endline symbol`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `Символы конца строки и табуляции`];
;
__context['__text'] = [...__context['__text'], `${__serializer.serialize(__context['фото'](`endline_and_tab.png`, `endline and tab symbols`), '\r\n')}`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `#### Экранирование спец-символов`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Переменные`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Вставки в текст`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Импорт других файлов`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `## Для программистов`];
;
__context['__text'] = [...__context['__text'], `Усложненная инстркукция. Предполагается, что без объяснений ее должны понять программисты и всякие технари`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Синтаксис`];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `### Как это работает `];
;
__context['__text'] = [...__context['__text'], ``];
;
__context['__text'] = [...__context['__text'], `## _`];
;
__context['__text'] = [...__context['__text'], `[Сидоренко Евгений](https:\//www.facebook.com/evgeny.sydorenko), февраль 2019`];
;
// INFO: this trick is for making this file node module
exports.default = __context;
module.exports = Object.assign({}, __context);
//# sourceMappingURL=instruction.js.map