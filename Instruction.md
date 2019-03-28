# Storytailor. Инструкция
[Презентация storytailor](https://github.com/freewebtime/storyscriptOrigins/blob/master/README.md)

Актуально для версий 0.0.x. Примите во внимание, что Storytailor работает в экспериментальном режиме, и некоторые правила могут быть в дальнейшем изменены

Это - краткая инструкция пользователя языка программирования [Storytailor](https://github.com/jack-storytailor/storytailor) в [Microsoft Visual Studio Code](https://code.visualstudio.com/)

## Начало работы
Установите [Microsoft Visual Studio Code](https://code.visualstudio.com/)
![vscode](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/vscode_new.png)

Установите [Storytailor плагин для vscode](https://marketplace.visualstudio.com/items?itemName=jackstorytailor.storytailor-vscode)
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

	// Вставка в текст начинается со звездочки (*) и заканчивается точкой с запятой (;)
	// Например:
	Текст до вставки переменной, *Переменная; текст после вставки переменной

А вот переменная вставлена в текст, и что из этого получается:
![outer variables inserted](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/outer_variable_inserted.png)

#### Многоуровневые переменные
![outer variables hierarchy](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/outer_variables_hierarchy.png)

	// если содержание переменной задается через знак "=", то у нее не может быть вложенных переменных:
	
	* Переменная = 100500
	  * Подпеременная // Ошибка! Значение переменной "Переменная" - цифра, у нее не может быть вложенных переменных

#### Вставка в текст мат. выражения
А вот переменная вставлена в текст, и что из этого получается:
![include expression](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/include_expression.png)

#### Операции над данными
А вот так можно между строк совершать операции над данными:
![insert operations](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/insert_operations.png)

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
Storytailor задуман как диалект javascript по аналогии с [typescript](https://www.typescriptlang.org/).
Каждый sts модуль из папки projectRoot/story компилируется в соответствующий .ts файл и складывается это все в папке projectRoot/src. После чего typescript компилирует содержимое папки projectRoot/src в projectRoot/out - это уже javascript файлы. 
![compiled typescript](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/storyscript_compiled_to_typescript.png)
![compiled javascript](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/storyscript_compiled_to_javascript.png)

### Как это работает
строка формата (звездочка, пробел, скоп с инструкциями "{}")

	-> storytailor
	* {
	  instructions;
	}

компилируется как скоп с инструкциями

	-> typescript
	{
	  instructions;
	}

![operations](https://raw.githubusercontent.com/freewebtime/storyscriptOrigins/master/resources/operation_include.png)

Строка без спец-символов компилируется как инструкция:

	  -> storytailor:
	  строка без спец-символов

	  -> typescript
	  __context['__text'] = [...__context['__text'], `строка без спец-символов`];

Строка с вставкой:

	  -> storytailor
	  строка с *Переменная;

	  -> typescript
	  __context['__text'] = [...__context['__text'], `строка с ${__serializer.serialize( __context['Переменная'], '\r\n' )} `];

Переменная

	  -> storytailor
	  * Переменная

	  -> typescript
	  __context['Переменная'] = __context['Переменная'] || { __text: [] };

№2

	  -> storytailor
	  * Переменная = 100500

	  -> typescript
	  __context['Переменная'] = 100500;

Raw-переменная (с префиксом "@")

	  -> storytailor
	  * { @Переменная = 100500; }

	  -> typescript
	  Переменная = 100500;


### Синтаксис

#### Строки, числа, булевые
Строка

	 "Содержание строки"

Строка с инклудами (инклуд пишется так: звездочка, потом без пробела экспрешн, а в конце перенос строки или точка с запятой: *includeExpression;)

	 "Содержание строки *include1; *include2;"

Число

	 100500

Булевые

	  true false

#### Операторы
	  +
	  -
	  /
	  *
	  = 
	  ==
	  ===
	  !
	  != 
	  !==
	  <
	  >
	  <=
	  >=
	  |
	  ||
	  &
	  &&
	  ++
	  --

#### Функции

	varname = function (params) {
	  instruction1;
	  ...
	  instruction2;
	}

#### Объекты, массивы
Объекты

	let obj = {
	  ...otherObj,
	  fieldName: "fieldValue",
	  otherVariable,
	  "fieldName2": 100500,
	  "isTrue": false
	}

Конструктор

	let obj = new Object(prototype);

Массивы

	let array = [
	  ...otherArray,
	  newValue
	] 

#### Инструкции

Import

	import * as varname from './module/Path'

If

	if (condition) {
	  instructions;
	} else if (condition2) {
	  instructions2;
	} else {
	  instructions3
	}

For

	for (var i; @i < 10; @i++) {
	 instructions;  
	}

For In

	for (let key in obj) {
	  instructions;
	}

While

	while (condition) {
	  instructions;
	}

Do while

	do {
	  instructions;
	} while (condition)

Switch case

	switch (condition) {
	
	  case condition: 
	    instructions;
	  break;
	
	  default:
	    instructions;
	  break;
	
	}

Delete

	delete obj.field;

##  
[Сидоренко Евгений](https://www.facebook.com/evgeny.sydorenko), февраль 2019