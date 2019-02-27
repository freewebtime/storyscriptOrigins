# Storyscript. Инструкция
Актуально для версий 1.4.x. Примите во внимание, что Storyscript работает в экспериментальном режиме, и некоторые правила могут быть в дальнейшем изменены

Это - краткая инструкция пользователя языка программирования [storyscript](https://github.com/freewebtime/storyscript) в [Microsoft Visual Studio Code](https://code.visualstudio.com/)

## Начало работы
Установите [Microsoft Visual Studio Code](https://code.visualstudio.com/)
![vscode](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/vscode_new.png)

Установите [Storyscript плагин для vscode](https://marketplace.visualstudio.com/items?itemName=jackstorytailor.storyscript-vscode)
![пустая папка](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/install_extension.png)

#### Начинаем

Самый простой способ приступить к работе - это открыть пустую папку в vscode и скопировать в нее тестовый проект

Откройте пустую папку
![пустая папка](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/vscode_empty.png)

Кликните правой клавишей мыши в корне проекта и выберите из выпадающего меню "Initialize example project in a working root"
![скопировать тестовый проект в корневую папку](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/init_example_project.png)

Эта операция скопирует в корневую папку тестовый проект. Учтите, что если в корневой папке уже есть такие файлы, то они будут перетерты. Подтверждайте копирование
![подтвердить копирование](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/confirm_init_example_project.png)

Тестовый проект скопирован в корневую папку. Примерно так должна выглядеть файловая структура проекта
![тестовый проект создан](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/example_project_created.png)

Обновите node-модули. Для этого

Откройте терминал
![npm install в терминале](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/open_terminal.png)

Вбейте комманду "npm install" или "npm i" и нажмите "ENTER"
![npm install в терминале](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/npm_install.png)

node-модули обновлены
![npm install в терминале](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/node_modules_created.png)

терминал можно закрыть
![закрыть терминал](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/close_terminal.png)


Исходные файлы истории хранятся в папке story (*.sts)
![исходники истории](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/story_source_files.png)

Подготовка проекта завершена. Это его рабочее состояние

#### Теперь выполним сборку тестового проекта. 
Откройте файл с исходниками истории. Например, story/index.sts

Открывайте Command Palette (Меню View -> Command Palette или комбинация клавиш Ctrl+Shift+P) 
![command palette](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/command_palette.png)

![command palette openned](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/command_palette_openned.png)

Выбирайте комманду "Compile: Compile and show preview" (по-умолчанию Ctrl+Alt+P)
![compile and show preview](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/compile_and_show_preview.png)

В папке src сохраняется история на typescript. В папке out будет эта история на javascript
![compiled story](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/compiled_story.png)

Когда сборка истории завершена, открывается предпросмотр
![compiled story](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/preview_story.png)

Окно предпросмотра можно размещать как удобно
![compiled story](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/layout_2.png)
![compiled story](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/layout_3.png)

Текст, показанный в окне предпросмотра, сохраняется в файл "story output.txt" в корне проекта
![story output](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/story_output.png)


## Для всех (база)
Упрощенная инструкция затрагивает только базовый функционал.
Этого хватит, чтобы собрать сценарий, и предполагается, что пользователю не понадобится никаких технических знаний

### Текст истории

Давайте удалим все содержимое файла story/index.sts и начнем историю с чистого листа


#### Обычный текст
Обычный текст попадает в финальную сборку "как есть", без изменений
![simple text](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/simple_text.png)

#### Комментарии
Комментарии - это фрагмент текста, который не пойдет в финальную сборку. Комментарии нужны для самих разработчиков истории. Весь текст от символов // и до конца строки будет считаться комментарием
![comments](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/comments.png)

#### Спец-символы (перенос строки, табуляция)
Есть три спец-символа, которые попадают в финальную сборку нестандартно. 

Это символ переноса строки
![endline symbol](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/endline_symbol.png)

Символы конца строки и табуляции
![endline and tab symbols](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/endline_and_tab.png)

#### Экранирование спец-символов
Экранирование спец-символов - это маркировка этих символов таким образом, чтобы компилятор не считал их спец-символами. Вот пример:
![escaped symbols](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/escaped_symbols.png)

### Переменные
Если оформить текст в виде списка, то элементы этого списка можно будет вставлять в других местах истории
Переменная пишется так (отступ из пробелов, потом звездочка, потом пробел, потом название переменной):

	* Название Переменной
	  Содержание переменной пишется
	  с новой строки и отступом от края 
	  на 2 (два) пробела больше, чем у названия
	  
	  * Подпеременная
	    Содержание подпеременной

Вот пример объявленной переменной
![outer variables](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/outer_variable.png)


### Вставки в текст
А вот переменная вставлена в текст, и что из этого получается:
![outer variables inserted](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/outer_variable_inserted.png)

#### Многоуровневые переменные
![outer variables hierarchy](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/outer_variables_hierarchy.png)

	// если содержание переменной задается через знак "=", то у нее не может быть вложенных переменных:
	
	* Переменная = 100500
	  * Подпеременная // Ошибка! Значение переменной "Переменная" - это цифра, у нее не может быть вложенных переменных

### Импорт других файлов
Мы работаем в файле story/index.sts
Давайте посмотрим, что у нас еще есть в папке story:
![external file](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/external_file.png)

Импортируем этот файл к нам
![import characters](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/import_characters.png)

И вставим персонажа из того файла в наш текст
![inserted imported characters](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/inserted_imported_character.png)


## Для программистов
Усложненная инструкция. Предполагается, что без объяснений ее должны понять программисты и всякие технари

### Идея
Storyscript задуман как диалект javascript по аналогии с [typescript](https://www.typescriptlang.org/).
Каждый sts модуль из папки projectRoot/story компилируется в соответствующий .ts файл и складывается это все в папке projectRoot/src. После чего typescript компилирует содержимое папки projectRoot/src в projectRoot/out - это уже javascript файлы. 
![compiled typescript](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/storyscript_compiled_to_typescript.png)
![compiled javascript](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/storyscript_compiled_to_javascript.png)


### Синтаксис
Строка без спец-символов компилируется как инструкция:
	  строка без спец-символов
  ->
	  __context['__text'] = [...__context['__text'], \`строка без спец-символов\`];

Строка с вставкой:
	  строка с *Переменная; 
  -> 
	  __context['__text'] = [...__context['__text'], \`строка с ${__serializer.serialize( __context['Переменная'], '\r\n' )} \`];

### Как это работает 

## _
[Сидоренко Евгений](https://www.facebook.com/evgeny.sydorenko), февраль 2019