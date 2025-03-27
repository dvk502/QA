function initPage() {
  showContent('SQL');
  showArticle('http_methods');
}
const content = {
    testingTypes: `
<h3>Виды тестирования</h3>
<ul>
<li onclick="showArticle('executionChronology')">По хронологии выполнения</li>
<li onclick="showArticle('formality')">По формальности</li>
<li onclick="showArticle('codeExecution')">По исполнению кода</li>
<li onclick="showArticle('testers')">По исполнителям тестирования</li>
<li onclick="showArticle('testScenarioDevelopment')">По разработке тестовых сценариев</li>
<li onclick="showArticle('systemKnowledge')">По знанию системы</li>
<li onclick="showArticle('testingLevel')">По уровню тестирования</li>
<li onclick="showArticle('positivs')">По позитивности сценария</li>
<li onclick="showArticle('testingGoals')">Функционально и Не функциональное</li>
<ul>
<li>Производительности</li>
<li>Безопасности и Защищености</li>
</ul>
</ul>

<h3 onclick="showArticle('Requirements')">Требования</h3>
<h3 onclick="showArticle('qaVsQc')">QA vs QC</h3>
<h3 onclick="showArticle('testDesign')">Тест дизайн</h3>
<h3 onclick="showArticle('verificationAndValidation')">Верификация и валидация</h3>
<h3 onclick="showArticle('testingGoal')">Тестирования / Цели / Баг</h3>
<h3 onclick="showArticle('testingPrinciples')">Принципы тестирования</h3>
<h3 onclick="showArticle('testingStages')">Этапы тестирования</h3>
<h3 onclick="showArticle('userStory')">User Story</h3>
<h3 onclick="showArticle('resks')">Риски тестирования</h3>
<h3 onclick="showArticle('eta')">Эстимейты</h3>
    `,
    roles: `
    <h2 onclick="showArticle('rolesAll')">Роли все кратко</h2>
    <h2 onclick="showArticle('roleTl')">Роль тимлида</h2>
    <h2 onclick="showArticle('roleManager')">Роль Manager</h2>
    <h2 onclick="showArticle('roleBa')">Роль BA</h2>
    <h2 onclick="showArticle('rolePm')">Роль PM</h2>
    <h2 onclick="showArticle('roleDev')">Роль Developer</h2>
    <h2 onclick="showArticle('roleQa')">Роль QA</h2>
    <h2 onclick="showArticle('roleDesigners')">Роль Designers</h2>
    <h2 onclick="showArticle('roleDevops')">Роль DevOps </h2>
    <h2 onclick="showArticle('roleSeo')">Роль SEO</h2>
    <h2 onclick="showArticle('roleHeadDev')">Роль Head Department</h2>
    `,
    verificationValidation: `
        <h2>Верификация и валидация</h2>
        <ul>
            <li onclick="showArticle('verification')">Верификация</li>
            <li onclick="showArticle('validation')">Валидация</li>
        </ul>
    `,
    testDocumentation: `
        <h2>Тестовая документация</h2>
        <ul>
            <li onclick="showArticle('checklist')">Чек-лист</li>
            <li onclick="showArticle('testCase')">Тест-кейс</li>
            <li onclick="showArticle('reports')">Отчёты</li>
            <li onclick="showArticle('testPlan')">Тест план</li>
            <li onclick="showArticle('bugReport')">Баг Репорт</li>
            <li onclick="showArticle('severityPriority')">Серьёзность и Приоритеты</li>
        </ul>
    `,
        sdlc: `
        <h2>SDLC Жизненный цикл разработки</h2>
        <ul>
            <li onclick="showArticle('requirementAnalysis')">1 Анализ требований</li>
            <li onclick="showArticle('design')">2 Проектирование</li>
            <li onclick="showArticle('implementation')">3 Программирование</li>
            <li onclick="showArticle('testingAndDebugging')">4 Тестирование и отладка</li>
            <li onclick="showArticle('maintenance')">5 Эксплуатация, сопровождение и поддержка</li>
        </ul>
            <h2>STLC Жизненный цикл тестирования</h2>
            <ul>
            <li onclick="showArticle('requirementAnalysisTest')">1 Анализ требований</li>
            <li onclick="showArticle('testPlanning')">2 Планирование испытаний</li>
            <li onclick="showArticle('testCaseDevelopment')">3 Разработка тестового примера</li>
            <li onclick="showArticle('testEnvironmentSetup')">4 Настройка тестовой среды</li>
            <li onclick="showArticle('testExecution')">5 Выполнение теста</li>
            <li onclick="showArticle('testClosure')">6 Закрытие теста
        </ul>
        <h2 onclick="showArticle('developmentModels')">Модели разработки</h2>
        <ul>
            <li onclick="showArticle('waterfallModel')">1 Каскадная модель</li>
            <li onclick="showArticle('vModel')">2 V модель</li>
            <li onclick="showArticle('iterativeModel')">3 Итерационные модели</li>
            <li onclick="showArticle('incrementalModel')">4 Инкрементная модель</li>
            <li onclick="showArticle('spiralModel')">5 Спиральная модель</li>
            <li onclick="showArticle('agileModel')">6 Agile Model</li>
            <li onclick="showArticle('kanbanModel')">7 Kanban</li>
        </ul>
        <h2 onclick="showArticle('Requirements')">Требования</h2>
        `,
        ci_cd_doker: `
        <h2 onclick="showArticle('ci_cd')">CI / CD</h2>
        <h2 onclick="showArticle('doker')">Doker</h2>
        `,
        mobile: `
    <p onclick="showArticle('AndroidArch')">Android Архитектура</p>
    <p onclick="showArticle('iosArch')">iOS Архитектура</p>
    <p onclick="showArticle('androidVsIos')">Android vs IOS</p>
    <p onclick="showArticle('androidVsIosArch')">Android, IOS архитектура</p>
    <p onclick="showArticle('emulators')">Emulator / Simulator</p>
    <p onclick="showArticle('opitRazresheniaScreen')">Опыт тестирования на различных устройствах и разрешениях экрана</p>
    <p onclick="showArticle('guidLine')">Гадлайны</p>
    `,
        API: `
        <h4 onclick="showArticle('protokoly')">Типы протоколов передачи данных</h4>
            <ul>
            <li onclick="showArticle('protokoly1')">HTTP / HTTPS</li>
            <li onclick="showArticle('protokoly2')">WebSocket (WS / WSS)</li>
            <li onclick="showArticle('protokoly3')">TCP</li>
            <li onclick="showArticle('protokoly4')">UDP</li>
            <li onclick="showArticle('protokoly5')">FTP / SFTP</li>
            <li onclick="showArticle('protokoly6')">MQTT</li>
            <li onclick="showArticle('protokoly7')">ICMP</li>
            <li onclick="showArticle('protokolyTest')">Как тестировать протоколы передачи данных?</li>
             </ul>

<div style="text-align: center; position: relative;">
  <hr style="border: 1px solid black;">
  <span style="position: absolute; top: -10px; background-color: white">API</span>
</div>
             <h4 onclick="showArticle('htmlZagolovki')"HTTP запросы и ответы</h4>
             <h4 onclick="showArticle('http_methods')">HTTP методы</h4>
             <h4 onclick="showArticle('http_methods_2')">Безопасные и идемпотентные методы</h4>
             <h4 onclick="showArticle('http_header')">Заголовки HTTP</h4>
                <h4 onclick="showArticle('http_code')">Статусные коды</h4>
                <div style="display: flex; gap: 10px; pointer-events: none;">
                <div onclick="showArticle('http_code_100')" style="cursor: pointer; pointer-events: auto;">100</div>
                <div onclick="showArticle('http_code_200')" style="cursor: pointer; pointer-events: auto;">200</div>
                <div onclick="showArticle('http_code_300')" style="cursor: pointer; pointer-events: auto;">300</div>
                <div onclick="showArticle('http_code_400')" style="cursor: pointer; pointer-events: auto;">400</div>
                <div onclick="showArticle('http_code_500')" style="cursor: pointer; pointer-events: auto;">500</div>
                </div>

             <h4 onclick="showArticle('postman')">Postman</h4>
             <h4 onclick="showArticle('restVsSoap')">REST/SOAP</h4>
           
<div style="text-align: center; position: relative;">
<hr style="border: 1px solid black;">
<span style="position: absolute; top: -10px; background-color: white">WEB</span>
</div>

             <h4 onclick="showArticle('backVsFront')">Характеристика frontend и backend</h4>
             <h4 onclick="showArticle('WS')">WS - Web service worker</h4>
             <h4 onclick="showArticle('WebDevTools')">WebDevTools</h4>
             <h4 onclick="showArticle('htmlCss')">HTML и CSS</h4>
             <h4 onclick="showArticle('webCookies')">Web Cookies и Кеш</h4>
        
        `,
        SQL:`
         <h4 onclick="showArticle('operators')">Операторы</h4>
         <li onclick="showArticle('operators_arif')">Арифметические</li>
         <li onclick="showArticle('operators_srav')">Сравнения</li>
         <li onclick="showArticle('xxxxxxx')">Логические:</li>
                <div style="display: flex; gap: 30px; pointer-events: none;">
                <div onclick="showArticle('xxxxx')" style="cursor: pointer; pointer-events: auto;">ANY</div>
                <div onclick="showArticle('xxxxx')" style="cursor: pointer; pointer-events: auto;">ALL</div>
                <div onclick="showArticle('xxxxx')" style="cursor: pointer; pointer-events: auto;">AND OR NOT</div>
                <div onclick="showArticle('xxxxx')" style="cursor: pointer; pointer-events: auto;">BETWEEN</div>
                </div>
                <div style="display: flex; gap: 30px; pointer-events: none;">
                <div onclick="showArticle('xxxxx')" style="cursor: pointer; pointer-events: auto;">EXISTS</div>
                <div onclick="showArticle('xxxxx')" style="cursor: pointer; pointer-events: auto;">IN</div>
                <div onclick="showArticle('xxxxx')" style="cursor: pointer; pointer-events: auto;">LIKE</div>
                <div onclick="showArticle('xxxxx')" style="cursor: pointer; pointer-events: auto;">IS NULL</div>
                </div>


        `,
    // Добавьте остальные разделы здесь
};

const articles = {
    article: `
`,
    article: `
`,
    article: `
`,
    article: `
`,
operators_srav: `
    <table style="width: 286px; border-style: solid;" border="1">
<tbody>
<tr>
<td style="width: 95.825px; text-align: center;"><strong><span class="raznui_kolir_td">Оператор</span></strong></td>
<td style="width: 176.575px; text-align: center;"><strong><span class="raznui_kolir_td">Описание</span></strong></td>
</tr>
<tr>
<td style="width: 95.825px; text-align: center;">=</td>
<td style="width: 176.575px; text-align: center;">Равно</td>
</tr>
<tr>
<td style="width: 95.825px; text-align: center;">&lt;</td>
<td style="width: 176.575px; text-align: center;">Меньше чем</td>
</tr>
<tr>
<td style="width: 95.825px; text-align: center;">&gt;</td>
<td style="width: 176.575px; text-align: center;">Больше чем</td>
</tr>
<tr>
<td style="width: 95.825px; text-align: center;">&lt;=</td>
<td style="width: 176.575px; text-align: center;">Меньше или равно</td>
</tr>
<tr>
<td style="width: 95.825px; text-align: center;">&gt;=</td>
<td style="width: 176.575px; text-align: center;">Больше или равно</td>
</tr>
<tr>
<td style="width: 95.825px; text-align: center;">&lt;&gt;, !=</td>
<td style="width: 176.575px; text-align: center;">Не равно</td>
</tr>
</tbody>
</table>
<pre><code class="language-sql">SELECT order_id, item, amount
FROM Orders
WHERE customer_id = 4;</code></pre>
<pre><code class="language-sql">SELECT item, amount, amount-20 AS offer_price
FROM Orders;</code></pre>
<pre><code class="language-sql">SELECT order_id, item, amount
FROM Orders
WHERE amount < 400;</code></pre>
<pre><code class="language-sql">SELECT order_id, item, amount
FROM Orders
WHERE amount > 400;</code></pre>
<pre><code class="language-sql">SELECT order_id, item, amount
FROM Orders
WHERE amount <= 400;</code></pre>
<pre><code class="language-sql">SELECT order_id, item, amount
FROM Orders
WHERE amount >= 400;</code></pre>
<pre><code class="language-sql">SELECT order_id, item, amount
FROM Orders
WHERE amount != 400;</code></pre>
`,
operators_arif: `<table style="border-style: solid;">
<tbody>
<tr>
<td style="text-align: center;"><strong><span>Оператор</span></strong></td>
<td style="text-align: center;"><strong><span>Описание</span></strong></td>
</tr>
<tr>
<td style="text-align: center;">+</td>
<td style="text-align: center;">Сложение</td>
</tr>
<tr>
<td style="text-align: center;">&minus;</td>
<td style="text-align: center;">Вычитание</td>
</tr>
<tr>
<td style="text-align: center;">*</td>
<td style="text-align: center;">Умножение</td>
</tr>
<tr>
<td style="text-align: center;">/</td>
<td style="text-align: center;">Деление</td>
</tr>
<tr>
<td style="text-align: center;">%</td>
<td style="text-align: center;">Остаток от деления</td>
</tr>
</tbody>
</table>
<pre><code class="language-sql">SELECT item, amount, amount+100 AS total_amount
FROM Orders;</code></pre>
<pre><code class="language-sql">SELECT item, amount, amount-20 AS offer_price
FROM Orders;</code></pre>
<pre><code class="language-sql">SELECT item, amount, amount*4 AS total_amount
FROM Orders;</code></pre>
<pre><code class="language-sql">SELECT item, amount, amount/2 AS half_amount
FROM Orders;</code></pre>
<pre><code class="language-sql">SELECT 10 % 3 AS result;</code></pre>
`,
http_code_500: `
<p class="padding"><span><strong>5xx (Ошибки сервера)</strong>: Ошибка на стороне сервера (например, 500 Internal Server Error).</span></p>

<p class="padding">
  <strong>500 Internal Server Error&nbsp;</strong>&mdash; Произошла внутренняя ошибка сервера. Она может быть вызвана некорректной конфигурацией или программной ошибкой.
</p>
<p class="padding">
  <strong>501 Not Implemented&nbsp;</strong>&mdash; Сервер не поддерживает функционал, необходимый для обработки запроса.
</p>
<p class="padding">
  <strong>502 Bad Gateway&nbsp;</strong>&mdash; Сервер, работающий в качестве шлюза или прокси, получил некорректный ответ от вышестоящего сервера.
</p>
<p class="padding">
  <strong>503 Service Unavailable&nbsp;</strong>&mdash; Сервер временно недоступен из-за перегрузки или проведения технического обслуживания.
</p>
<p class="padding">
  <strong>504 Gateway Timeout&nbsp;</strong>&mdash; Сервер, работающий в качестве шлюза или прокси, не дождался ответа от вышестоящего сервера в установленный срок.
</p>
<p class="padding">
  <strong>505 HTTP Version Not Supported&nbsp;</strong>&mdash; Сервер не поддерживает используемую в запросе версию HTTP.
</p>
<p class="padding">
  <strong>506 Variant Also Negotiates&nbsp;</strong>&mdash; Неправильная конфигурация сервера, которая вызывает круговые зависимости при содержательном согласовании.
</p>
<p class="padding">
  <strong>507 Insufficient Storage&nbsp;</strong>&mdash; Сервер не может сохранить данные запроса из-за нехватки места. (WebDAV.)
</p>
<p class="padding">
  <strong>508 Loop Detected&nbsp;</strong>&mdash; Сервер обнаружил бесконечную петлю в запросе. (WebDAV.)
</p>
<p class="padding">
  <strong>510 Not Extended&nbsp;</strong>&mdash; Требуемые для обработки запроса расширения не указаны.
</p>
<p class="padding">
  <strong>511 Network Authentication Required&nbsp;</strong>&mdash; Для получения доступа требуется аутентификация в сети.
</p>
`,
http_code_400: `
<p class="padding"><span><strong>4xx (Ошибки клиента)</strong>: Ошибка на стороне клиента (например, 404 Not Found).</span></p>

<p>
  <strong>400 Bad Request&nbsp;</strong>&mdash; Сервер не может обработать запрос из-за синтаксической ошибки клиента.
</p>
<p>
  <strong>401 Unauthorized&nbsp;</strong>&mdash; Клиент не прошёл аутентификацию для доступа к ресурсу. Требуется заголовок Authorization.
</p>
<p>
  <strong>402 Payment Required&nbsp;</strong>&mdash; Код зарезервирован для использования в системах оплаты. (Редко используется.)
</p>
<p>
  <strong>403 Forbidden&nbsp;</strong>&mdash; Сервер понял запрос, но отказывается его выполнять из-за ограничений доступа.
</p>
<p>
  <strong>404 Not Found&nbsp;</strong>&mdash; Запрашиваемый ресурс не найден. Клиент может проверить URI или наличие ресурса.
</p>
<p>
  <strong>405 Method Not Allowed&nbsp;</strong>&mdash; Метод запроса не поддерживается сервером для указанного ресурса.
</p>
<p>
  <strong>406 Not Acceptable&nbsp;</strong>&mdash; Ресурс недоступен в формате, указанном в заголовках Accept клиента.
</p>
<p>
  <strong>407 Proxy Authentication Required&nbsp;</strong>&mdash; Требуется аутентификация клиента через указанный прокси-сервер.
</p>
<p>
  <strong>408 Request Timeout&nbsp;</strong>&mdash; Сервер не получил полный запрос от клиента в установленный срок.
</p>
<p>
  <strong>409 Conflict&nbsp;</strong>&mdash; Запрос не может быть обработан из-за конфликта с текущим состоянием ресурса.
</p>
<p>
  <strong>410 Gone&nbsp;</strong>&mdash; Запрашиваемый ресурс больше не доступен и не будет восстановлен.
</p>
<p>
  <strong>411 Length Required&nbsp;</strong>&mdash; Сервер требует указания длины содержимого запроса в заголовке Content-Length.
</p>
<p>
  <strong>412 Precondition Failed&nbsp;</strong>&mdash; Одна или более условий, указанных клиентом, не выполнены.
</p>
<p>
  <strong>413 Payload Too Large&nbsp;</strong>&mdash; Размер запроса превышает ограничения сервера.
</p>
<p>
  <strong>414 URI Too Long&nbsp;</strong>&mdash; Запрашиваемый URI превышает допустимую длину.
</p>
<p>
  <strong>415 Unsupported Media Type&nbsp;</strong>&mdash; Формат данных запроса не поддерживается сервером.
</p>
<p>
  <strong>416 Range Not Satisfiable&nbsp;</strong>&mdash; Указанный диапазон данных невозможен для запрашиваемого ресурса.
</p>
<p>
  <strong>417 Expectation Failed&nbsp;</strong>&mdash; Сервер не может выполнить указанные в заголовке Expect требования.
</p>
<p>
  <strong>418 I'm a teapot&nbsp;</strong>&mdash; Шутливый код ошибки, предназначенный для чайников. (RFC 2324.)
</p>
<p>
  <strong>421 Misdirected Request&nbsp;</strong>&mdash; Запрос был направлен на сервер, не способный его обработать.
</p>
<p>
  <strong>422 Unprocessable Entity&nbsp;</strong>&mdash; Сервер понимает запрос, но не может его обработать из-за семантических ошибок. (WebDAV.)
</p>
<p>
  <strong>423 Locked&nbsp;</strong>&mdash; Доступ к ресурсу заблокирован. (WebDAV.)
</p>
<p>
  <strong>424 Failed Dependency&nbsp;</strong>&mdash; Запрос не выполнен из-за сбоя в другой зависимости. (WebDAV.)
</p>
<p>
  <strong>425 Too Early&nbsp;</strong>&mdash; Сервер отказывается рисковать обработкой запроса, который может быть повторен.
</p>
<p>
  <strong>426 Upgrade Required&nbsp;</strong>&mdash; Сервер требует использования другого протокола, указанного в заголовке Upgrade.
</p>
<p>
  <strong>428 Precondition Required&nbsp;</strong>&mdash; Сервер требует выполнения условий, указанных в запросе, до его обработки.
</p>
<p>
  <strong>429 Too Many Requests&nbsp;</strong>&mdash; Клиент отправил слишком много запросов за короткий промежуток времени.
</p>
<p>
  <strong>431 Request Header Fields Too Large&nbsp;</strong>&mdash; Заголовки запроса слишком велики для обработки сервером.
</p>
<p>
  <strong>451 Unavailable For Legal Reasons&nbsp;</strong>&mdash; Доступ к ресурсу ограничен по юридическим причинам.
</p>
`,
http_code_300: `
<p class="padding"><span><strong>3xx (Перенаправления)</strong>: Требуется дополнительное действие (например, 301 Moved Permanently).</span></p>

<p class="padding">
  <strong>300 Multiple Choices&nbsp;</strong>&mdash; Сервер предоставляет несколько вариантов для одного ресурса, и клиент может выбрать один из них.
</p>
<p class="padding">
  <strong>301 Moved Permanently&nbsp;</strong>&mdash; Запрашиваемый ресурс был перемещён на постоянной основе. Новый адрес указывается в заголовке Location.
</p>
<p class="padding">
  <strong>302 Found&nbsp;</strong>&mdash; Ресурс временно доступен по другому адресу. Клиенту рекомендуется использовать исходный URI для будущих запросов.
</p>
<p class="padding">
  <strong>303 See Other&nbsp;</strong>&mdash; Клиент должен использовать GET-запрос для получения ресурса по указанному в заголовке Location URI.
</p>
<p class="padding">
  <strong>304 Not Modified&nbsp;</strong>&mdash; Данные ресурса не изменились. Клиент может использовать закэшированную версию.
</p>
<p class="padding">
  <strong>305 Use Proxy&nbsp;</strong>&mdash; Клиенту необходимо использовать указанный прокси-сервер для доступа к ресурсу. (Редко используется.)
</p>
<p class="padding">
  <strong>306 Unused&nbsp;</strong>&mdash; Код зарезервирован, но не используется. Ранее указывал на переключение прокси, но был исключён.
</p>
<p class="padding">
  <strong>307 Temporary Redirect&nbsp;</strong>&mdash; Ресурс временно доступен по другому URI. Метод запроса не должен изменяться.
</p>
<p class="padding">
  <strong>308 Permanent Redirect&nbsp;</strong>&mdash; Ресурс перемещён на постоянной основе. Клиент должен использовать новый URI в будущем.
</p>
`,
http_code_200: `
<p class="padding"><span><strong>2xx (Успешные)</strong>: Запрос успешно выполнен (например, 200 OK).</span></p>

    <p class="padding">
  <strong>200 OK&nbsp;</strong>&mdash; Успешный запрос. Если клиентом запрашивались какие-либо данные, они находятся в заголовке и/или теле сообщения.
</p>
<p class="padding">
  <strong>201 Created&nbsp;</strong>&mdash; Новый ресурс был успешно создан. Сервер может указать адреса созданного ресурса в заголовке Location.
</p>
<p class="padding">
  <strong>202 Accepted&nbsp;</strong>&mdash; Запрос принят на обработку, но она ещё не завершена. Клиенту не обязательно ожидать её окончания.
</p>
<p class="padding">
  <strong>203 Non-Authoritative Information&nbsp;</strong>&mdash; Информация, переданная сервером, взята из вторичного источника и может быть неактуальной.
</p>
<p class="padding">
  <strong>204 No Content&nbsp;</strong>&mdash; Сервер успешно обработал запрос, но ответ содержит только заголовки без тела сообщения.
</p>
<p class="padding">
  <strong>205 Reset Content&nbsp;</strong>&mdash; Сервер требует сброс введённых данных пользователем. Тело сообщения отсутствует.
</p>
<p class="padding">
  <strong>206 Partial Content&nbsp;</strong>&mdash; Сервер успешно обработал частичный GET-запрос и вернул только часть содержимого.
</p>
`,
http_code_100: `
<p class="padding"><span><strong>1xx (Информационные)</strong>: Запрос принят и обрабатывается.</span></p>
<p class="padding"><strong>100 Continue&nbsp;</strong>&mdash; сервер удовлетворён начальными сведениями о запросе, клиент может продолжать пересылать заголовки.&nbsp;</p>
<p class="padding"><strong>101 Switching Protocols&nbsp;</strong>&mdash; сервер выполняет требование клиента и переключает протоколы в соответствии с указанием, данным в поле заголовка <code>Upgrade</code>. Сервер отправляет заголовок ответа<code>Upgrade</code>, указывая протокол, на который он переключился.</p>
<p class="padding"><strong>102 Processing</strong>&nbsp;&mdash; запрос принят, но на его обработку понадобится длительное время. Используется сервером, чтобы клиент не разорвал соединение из-за превышения времени ожидания. Клиент при получении такого ответа должен сбросить таймер и дожидаться следующей команды в обычном режиме.&nbsp;</p>
<p class="padding"><strong>103 Early Hints</strong>&nbsp;&mdash; сервер предварительно передаёт часть заголовков; используется в случаях, когда заголовки полного ответа не могут быть быстро сформированы.</p>`,
protokolyTest: `
    <h2>🚀 <strong>Как тестировать протоколы передачи данных?</strong></h2>
<p>✅ <strong>Инструменты</strong>:</p>
<ul>
<li>
<p><strong>Postman</strong> &ndash; тестирование API</p>
</li>
<li>
<p><strong>Wireshark</strong> &ndash; анализ сетевого трафика</p>
</li>
<li>
<p><strong>Charles Proxy / Fiddler</strong> &ndash; перехват запросов</p>
</li>
<li>
<p><strong>JMeter / Locust</strong> &ndash; нагрузочное тестирование</p>
</li>
<li>
<p><strong>Burp Suite</strong> &ndash; тестирование безопасности</p>
</li>
</ul>
<p>✅ <strong>Ключевые проверки</strong>:</p>
<ul>
<li>
<p><strong>Передача данных</strong> &ndash; HTTP-запросы, WebSocket-сообщения</p>
</li>
<li>
<p><strong>Производительность</strong> &ndash; скорость, задержки</p>
</li>
<li>
<p><strong>Безопасность</strong> &ndash; защита данных, HTTPS, аутентификация</p>
</li>
<li>
<p><strong>Корректность заголовков</strong> &ndash; CORS, Content-Type</p>
</li>
</ul>
`,
protokoly7: `
    <h3>7️⃣ <strong>ICMP (Internet Control Message Protocol)</strong></h3>
<ul>
<li>
<p><strong>Применение:</strong> диагностика сети (ping, traceroute).</p>
</li>
<li>
<p><strong>Пример:</strong><code>ping google.com</code></p>
</li>
<li>
<p>Используется для определения доступности хоста.</p>
</li>
</ul>
<p>✅ <strong>Что тестировать?</strong></p>
<ul>
<li>
<p>Время отклика сервера</p>
</li>
<li>
<p>Потерю пакетов</p>
</li>
</ul>
`,
protokoly6: `
<h3>6️⃣ <strong>MQTT (Message Queuing Telemetry Transport)</strong></h3>
<ul>
<li>
<p><strong>Применение:</strong> IoT-устройства, умные дома, датчики.</p>
</li>
<li>
<p>Работает по принципу <strong>"publish-subscribe"</strong>.</p>
</li>
<li>
<p>Поддерживает <strong>QoS (Quality of Service)</strong>:</p>
<ul>
<li>
<p><code>0</code> &ndash; без гарантии доставки</p>
</li>
<li>
<p><code>1</code> &ndash; сообщение доставлено минимум 1 раз</p>
</li>
<li>
<p><code>2</code> &ndash; сообщение доставлено ровно 1 раз</p>
</li>
</ul>
</li>
</ul>
<p>✅ <strong>Что тестировать?</strong></p>
<ul>
<li>
<p>Надёжность доставки сообщений</p>
</li>
<li>
<p>Корректность подписок</p>
</li>
<li>
<p>Производительность при высокой нагрузке</p>
</li>
</ul>
`,
protokoly5: `
    <h3>5️⃣ <strong>FTP / SFTP (File Transfer Protocol / Secure File Transfer Protocol)</strong></h3>
<ul>
<li>
<p><strong>Применение:</strong> передача файлов между клиентом и сервером.</p>
</li>
<li>
<p><strong>FTP</strong> &ndash; небезопасен (пароли в открытом виде).</p>
</li>
<li>
<p><strong>SFTP</strong> &ndash; безопасный, работает поверх SSH.</p>
</li>
</ul>
<p>✅ <strong>Что тестировать?</strong></p>
<ul>
<li>
<p>Скорость загрузки / скачивания</p>
</li>
<li>
<p>Доступность серверов (код ответа 2xx)</p>
</li>
<li>
<p>Ошибки доступа (403, 550 &ndash; нет прав)</p>
</li>
<li>
<p>Безопасность передачи (SFTP)</p>
</li>
</ul>
`,
protokoly4: `
    <h3>4️⃣ <strong>UDP (User Datagram Protocol)</strong></h3>
<ul>
<li>
<p><strong>Применение:</strong> VoIP, видеостриминг, онлайн-игры.</p>
</li>
<li>
<p><strong>Отличия от TCP:</strong></p>
<ul>
<li>
<p><strong>Нет подтверждения доставки</strong></p>
</li>
<li>
<p><strong>Меньшая задержка</strong></p>
</li>
<li>
<p><strong>Не гарантирует порядок следования пакетов</strong></p>
</li>
</ul>
</li>
</ul>
<p>✅ <strong>Что тестировать?</strong></p>
<ul>
<li>
<p>Потерю пакетов и деградацию качества</p>
</li>
<li>
<p>Работу на нестабильных сетях</p>
</li>
<li>
<p>Производительность под нагрузкой</p>
</li>
</ul>
`,
protokoly3: `
    <h3>3️⃣ <strong>TCP (Transmission Control Protocol)</strong></h3>
<ul>
<li>
<p><strong>Применение:</strong> надежная передача данных (HTTP, WebSocket, FTP).</p>
</li>
<li>
<p><strong>Характеристики:</strong></p>
<ul>
<li>
<p>Контроль целостности (проверка последовательности пакетов)</p>
</li>
<li>
<p>Гарантия доставки</p>
</li>
<li>
<p>Управление потоком</p>
</li>
</ul>
</li>
</ul>
<p>✅ <strong>Что тестировать?</strong></p>
<ul>
<li>
<p>Потеря пакетов и их восстановление</p>
</li>
<li>
<p>Задержки при передаче</p>
</li>
<li>
<p>Стабильность соединения под нагрузкой</p>
</li>
</ul>
`,
protokoly2: `
<h3>2️⃣ <strong>WebSocket</strong> (WS / WSS)</h3>
<ul>
<li>
<p><strong>Применение:</strong> двусторонняя связь клиент-сервер (чаты, live-обновления, стриминг данных).</p>
</li>
<li>
<p>Работает поверх TCP, сохраняет соединение, в отличие от HTTP.</p>
</li>
<li>
<p><strong>Отличия от HTTP:</strong></p>
<ul>
<li>
<p><strong>Не требует постоянных запросов</strong> (long polling)</p>
</li>
<li>
<p><strong>Обеспечивает малую задержку</strong></p>
</li>
<li>
<p><strong>Использует события</strong> (message, open, close, error)</p>
</li>
</ul>
</li>
</ul>
<p>✅ <strong>Что тестировать?</strong></p>
<ul>
<li>
<p>Установка и разрыв соединения</p>
</li>
<li>
<p>Корректность отправки и получения сообщений</p>
</li>
<li>
<p>Нагрузка (многопользовательские подключения)</p>
</li>
<li>
<p>Безопасность (шифрование WSS, защита от утечек данных)</p>
</li>
</ul>
`,
protokoly1: `
<h3>Запросы и Ответы</h3>
<ul>
  <li>
    <p><span><strong>HTTP-запросы</strong>: Это сообщения, которые отправляются клиентом серверу для получения информации или выполнения действий. Запросы включают метод (например, GET, POST), URL, заголовки и тело (в зависимости от метода).</span></p>
  </li>
  <li>
    <p><span><strong>HTTP-ответы</strong>: Это ответы сервера на запросы клиента. Ответы включают статусный код (например, 200 OK, 404 Not Found), заголовки и тело (если есть).</span></p>
  </li>
</ul>

<h3><strong>HTTP / HTTPS (HyperText Transfer Protocol / Secure)</strong></h3>
<ul>
  <li>
    <p><strong>Применение:</strong> передача данных между клиентом и сервером (веб-приложения, REST API).</p>
  </li>
  <li>
    <p><strong>Методы:</strong></p>
    <ul>
      <li><p><code>GET</code> &ndash; получить данные</p></li>
      <li><p><code>POST</code> &ndash; отправить данные</p></li>
      <li><p><code>PUT</code> &ndash; обновить ресурс</p></li>
      <li><p><code>DELETE</code> &ndash; удалить ресурс</p></li>
      <li><p><code>PATCH</code> &ndash; частичное обновление</p></li>
      <li><p><code>HEAD</code>, <code>OPTIONS</code>, <code>TRACE</code></p></li>
    </ul>
  </li>
  <li>
    <p><strong>Коды ответа:</strong> <code>2xx</code> (успех), <code>3xx</code> (редирект), <code>4xx</code> (ошибки клиента), <code>5xx</code> (ошибки сервера).</p>
  </li>
  <li>
    <p><strong>HTTPS</strong> &ndash; защищённая версия HTTP, использующая <strong>TLS/SSL</strong> для шифрования данных. Она предотвращает:</p>
    <ul>
      <li><strong>MITM-атаки (Man-in-the-Middle):</strong> защищает данные от перехвата злоумышленниками во время их передачи.</li>
      <li><strong>Фальсификацию данных:</strong> предотвращает изменения данных в процессе передачи.</li>
      <li><strong>Неавторизованный доступ:</strong> данные шифруются, что делает их бесполезными для третьих лиц без ключа дешифровки.</li>
    </ul>
  </li>
</ul>

<p>✅ <strong>Что тестировать?</strong></p>
<ul>
  <li>
    <p>Правильность HTTP-методов</p>
  </li>
  <li>
    <p>Корректность заголовков (Content-Type, CORS, Authorization)</p>
  </li>
  <li>
    <p>Безопасность:</p>
    <ul>
      <li>Использование HTTPS</li>
      <li>Защита от MITM-атак</li>
      <li>Куки с атрибутами <code>HttpOnly</code> и <code>Secure</code></li>
      <li>Корректные редиректы</li>
    </ul>
  </li>
</ul>
`,
guidLine: `
    <h3><span>Гайдлайны Android и iOS: Основные отличия</span></h3>
<p><span>При разработке мобильных приложений важно учитывать особенности каждой платформы. Google и Apple предоставляют собственные гайдлайны: </span><span><strong>Material Design</strong></span><span> для Android и </span><span><strong>Human Interface Guidelines (HIG)</strong></span><span> для iOS. Эти рекомендации определяют внешний вид и поведение интерфейсов, обеспечивая пользователям комфортное и предсказуемое взаимодействие.</span></p>
<h4><span>1. Общие концепции</span></h4>
<ul>
<li>
<p><span><strong>Material Design (Android)</strong></span></p>
<ul>
<li>
<p><span>Основан на метафоре реального мира с тенями и слоями (Elevation).</span></p>
</li>
<li>
<p><span>Гибкая система цветов и форм.</span></p>
</li>
<li>
<p><span>Ориентирован на анимации и плавные переходы.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>HIG (iOS)</strong></span></p>
<ul>
<li>
<p><span>Простота и минимализм.</span></p>
</li>
<li>
<p><span>Использование четкой типографики (San Francisco).</span></p>
</li>
<li>
<p><span>Плавные и естественные анимации, соответствующие реальной физике.</span></p>
</li>
</ul>
</li>
</ul>
<h4><span>2. Навигация</span></h4>
<ul>
<li>
<p><span><strong>Android</strong></span></p>
<ul>
<li>
<p><span>Поддержка нескольких типов навигации: Bottom Navigation, Navigation Drawer, Tabs.</span></p>
</li>
<li>
<p><span>Кнопка "Назад" встроена на уровне системы.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>iOS</strong></span></p>
<ul>
<li>
<p><span>Основной способ &ndash; </span><span><strong>Tab Bar</strong></span><span>, расположенный внизу экрана.</span></p>
</li>
<li>
<p><span>Кнопки навигации "Назад" присутствуют в верхнем Navigation Bar.</span></p>
</li>
</ul>
</li>
</ul>
<h4><span>3. Размеры и единицы измерения</span></h4>
<ul>
<li>
<p><span><strong>Android</strong></span><span> использует </span><code><span>dp</span></code><span> (Density-independent Pixels), базовая ширина экрана &ndash; 360dp.</span></p>
</li>
<li>
<p><span><strong>iOS</strong></span><span> применяет </span><code><span>pt</span></code><span> (Points), базовая ширина &ndash; 375pt (iPhone X и новее).</span></p>
</li>
</ul>
<h4><span>4. Компоненты интерфейса</span></h4>
<ul>
<li>
<p><span><strong>Кнопки</strong></span></p>
<ul>
<li>
<p><span>Android: Floating Action Button (FAB) для основных действий.</span></p>
</li>
<li>
<p><span>iOS: Кнопки в Navigation Bar или Toolbars.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Диалоговые окна</strong></span></p>
<ul>
<li>
<p><span>Android: Dialog, Snackbar, Bottom Sheet.</span></p>
</li>
<li>
<p><span>iOS: Alerts, Action Sheets.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Поиск</strong></span></p>
<ul>
<li>
<p><span>Android: Встраивается в Top App Bar или вызывается через иконку.</span></p>
</li>
<li>
<p><span>iOS: Может скрываться и вызываться жестом Pull-to-Search.</span></p>
</li>
</ul>
</li>
</ul>
<h4><span>5. Анимации и взаимодействия</span></h4>
<ul>
<li>
<p><span>Android ориентирован на </span><span><strong>материальность и иерархию</strong></span><span>, где элементы "поднимаются" и "опускаются".</span></p>
</li>
<li>
<p><span>iOS использует </span><span><strong>натуральные переходы и плавные жесты</strong></span><span>, такие как скролл-контейнеры и swipe.</span></p>
</li>
</ul>
<h4><span>6. Шрифты и типографика</span></h4>
<ul>
<li>
<p><span><strong>Android</strong></span><span>: Использует шрифт </span><span><strong>Roboto</strong></span><span>.</span></p>
</li>
<li>
<p><span><strong>iOS</strong></span><span>: Предпочитает </span><span><strong>San Francisco</strong></span><span>, обеспечивая единообразие на всех устройствах.</span></p>
</li>
</ul>
<h3><span>Итог</span></h3>
<p><span>Несмотря на общие принципы UI/UX, Android и iOS требуют различного подхода к дизайну. Грамотная адаптация интерфейса под каждую платформу повышает удобство использования, сокращает затраты на разработку и улучшает пользовательский опыт.</span></p>
`,
emulators: `
<p><strong>Что такое эмулятор и симулятор?</strong></p>
<p>🔹 <strong>Эмулятор</strong> &mdash; программное обеспечение, которое полностью воспроизводит аппаратное и программное обеспечение устройства. Он создаёт виртуальную среду, в которой мобильное приложение работает так же, как на реальном устройстве.</p>
<p>🔹 <strong>Симулятор</strong> &mdash; программа, которая имитирует поведение операционной системы, но не копирует её аппаратные характеристики. Он позволяет тестировать логику приложения, но не даёт точного представления о его работе на реальном устройстве.</p>
<p><strong>Android</strong></p>
<p>✅ <strong>Эмулятор</strong>:</p>
<ul>
<li><strong>Android Emulator (AVD, Android Virtual Device)</strong> &mdash; встроенный в Android Studio инструмент, который эмулирует работу смартфонов, планшетов, смарт-часов и даже телевизоров.</li>
<li>Позволяет тестировать различные версии Android и конфигурации устройств.</li>
</ul>
<p>❌ <strong>Симулятор</strong>:</p>
<ul>
<li>Android не использует симуляторы, так как все виртуальные устройства работают на основе эмуляции.</li>
</ul>
<p><strong>iOS</strong></p>
<p>✅ <strong>Симулятор</strong>:</p>
<ul>
<li><strong>iOS Simulator</strong> (входит в Xcode) &mdash; инструмент для тестирования приложений iOS на macOS.</li>
<li>Работает быстрее, чем эмулятор, но не поддерживает ряд функций (например, Bluetooth, датчики и GPS).</li>
<li>Не может полностью эмулировать процессор и архитектуру iPhone.</li>
</ul>
<p>❌ <strong>Эмулятор</strong>:</p>
<ul>
<li>Apple не предоставляет официальных эмуляторов iOS. Все тестирования на &laquo;настоящей&raquo; iOS возможны только на реальных устройствах.</li>
</ul>
<p><strong>Сравнение эмуляторов и симуляторов</strong></h2>
<table>
<thead>
<tr>
<th>Характеристика</th>
<th>Эмулятор</th>
<th>Симулятор</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Как работает</strong></td>
<td>Воссоздаёт как ПО, так и аппаратную часть устройства</td>
<td>Имитирует только программную среду</td>
</tr>
<tr>
<td><strong>Скорость работы</strong></td>
<td>Медленнее, так как эмулирует железо</td>
<td>Быстрее, так как не эмулирует железо</td>
</tr>
<tr>
<td><strong>Точность тестирования</strong></td>
<td>Высокая &mdash; позволяет проверить работу приложения на уровне ОС и железа</td>
<td>Низкая &mdash; не учитывает аппаратные особенности</td>
</tr>
<tr>
<td><strong>Использование реального кода ОС</strong></td>
<td>Да</td>
<td>Нет</td>
</tr>
<tr>
<td><strong>Доступ к функциям устройства</strong></td>
<td>Доступен (например, камера, GPS, сенсоры)</td>
<td>Частично доступен или недоступен</td>
</tr>
<tr>
<td><strong>Применение</strong></td>
<td>Функциональное тестирование, тестирование совместимости и производительности</td>
<td>Тестирование UI/UX и бизнес-логики приложения</td>
</tr>
</tbody>
</table>
`,
eta: `
<h3><strong>Основные методы оценки трудозатрат на тестирование:</strong></h3>
<ol>
<li>
<p><strong>Метод Дельфи</strong>: <span>Предполагает коллективную работу экспертов, которые независимо оценивают трудозатраты, а затем обсуждают результаты для достижения консенсуса.</span>​</p>
</li>
<li>
<p><strong>Метод трёх точек</strong>: <span>Включает три оценки для каждой задачи: оптимистичную (a), пессимистичную (b) и наиболее вероятную (m). Итоговая оценка рассчитывается по формуле: E = (a + 4m + b) / 6.
</li>
<li>
<p><strong>Анализ функциональных точек</strong>: <span>Оценивает сложность системы на основе её функциональных компонентов, таких как входы, выходы и запросы.</span>​</p>
</li>
<li>
<p><strong>Метод COCOMO (COnstructive COst MOdel)</strong>: <span>Использует математическую модель для оценки стоимости и времени разработки программного обеспечения, учитывая различные параметры проекта.</span></p>
</li>
</ol>
<h3 class="compact"><strong>Основные техники оценки</strong></h3>
<ol>
<li>
<p><strong>Техника оценки на основе опыта (Experience-Based Estimation)</strong></p>
<ul>
<li>
<p>Оценка выполняется на основе опыта прошлых проектов.</p>
</li>
<li>
<p>Включает экспертную оценку и аналогичную оценку (когда берутся данные из схожих проектов).</p>
</li>
</ul>
</li>
<li>
<p><strong>Техника разбиения задач (Task-Based Estimation)</strong></p>
<ul>
<li>
<p>Разделяет процесс тестирования на мелкие задачи и оценивает каждую отдельно.</p>
</li>
<li>
<p>Сложение всех задач даёт итоговую оценку.</p>
</li>
</ul>
</li>
<li>
<p><strong>Метод трёх точек (Three-Point Estimation)</strong></p>
<ul>
<li>
<p>Учитывает три значения:</p>
<ul>
<li>
<p>Оптимистичная оценка (O)</p>
</li>
<li>
<p>Пессимистичная оценка (P)</p>
</li>
<li>
<p>Наиболее вероятная (M)</p>
</li>
</ul>
</li>
<li>
<p>Расчёт: (O + 4M + P) / 6.</p>
</li>
</ul>
</li>
<li>
<p><strong>Use-Case Based Estimation (Оценка на основе вариантов использования)</strong></p>
<ul>
<li>
<p>Оценка времени на тестирование каждого пользовательского сценария (use case).</p>
</li>
</ul>
</li>
<li>
<p><strong>Work Breakdown Structure (WBS) (Структурное разбиение работ)</strong></p>
<ul>
<li>
<p>Декомпозиция тестирования на небольшие части, что помогает точнее оценить объёмы работ.</p>
</li>
</ul>
</li>
<li>
<p><strong>Wideband Delphi (Метод Дельфи)</strong></p>
<ul>
<li>
<p>Групповая оценка с привлечением экспертов, обсуждение результатов и корректировка итоговых значений.</p>
</li>
</ul>
</li>
<li>
<p><strong>Function Point Analysis (Анализ функциональных точек)</strong></p>
<ul>
<li>
<p>Оценка на основе количества функций, входов, выходов, запросов и их сложности.</p>
</li>
</ul>
</li>
</ol>
<p><a href="https://www.tutorialspoint.com/estimation_techniques/estimation_techniques_testing.htm">Estimation Techniques - Testing</a></p>
<p><a href="https://vladislaveremeev.gitbook.io/qa_bible/obshee/tekhniki-ocenki-testov-ocenka-trudozatrat-na-testirovanie-test-estimation">Техники оценки тестов/оценка трудозатрат на тестирование (Test Estimation</a></p>
`,
iosArch: `
    <h3><strong>Архитектура iOS</strong></h3>
<p>iOS &mdash; облегчённая версия macOS, основанная на Darwin. Она включает ядро XNU (гибрид Mach и FreeBSD) и обеспечивает надёжность, безопасность и многозадачность.</p>
<h3><strong>Ядро и операционная система</strong></h3>
<p>XNU управляет памятью, процессами, файловой системой и вводом-выводом. Менеджер памяти оптимизирован для мобильных устройств, что позволяет эффективно использовать ресурсы. Darwin также включает стандартные UNIX-компоненты:</p>
<ul>
<li><strong>launchd</strong> &mdash; управляет процессами и службами,</li>
<li><strong>sandbox</strong> &mdash; ограничивает доступ к системе для безопасности.</li>
</ul>
<h3><strong>Фреймворки и API</strong></h3>
<p>iOS предоставляет высокоуровневые API:</p>
<ul>
<li><strong>Foundation</strong> &mdash; базовые классы, работа с сетью,</li>
<li><strong>UIKit</strong> &mdash; графический интерфейс,</li>
<li><strong>CoreBluetooth, AVFoundation</strong> &mdash; взаимодействие с железом и мультимедиа.<br />Существует публичный API для разработчиков и закрытый API, доступный только Apple.</li>
</ul>
<h3><strong>SpringBoard и BackBoard</strong></h3>
<p>SpringBoard &mdash; главный процесс, отвечающий за домашний экран, уведомления и управление приложениями. BackBoard обрабатывает ввод и работу с жестами.</p>
<h3><strong>Песочница и безопасность</strong></h3>
<p>Приложения работают в <strong>sandbox</strong>, не имея доступа к чужим данным. Между процессами действует <strong>App Transport Security (ATS)</strong>, ограничивающий небезопасные соединения. Подпись кода предотвращает запуск модифицированных приложений.</p>
`,
AndroidArch: `
    <h3><strong>Архитектура Android: Краткий обзор</strong></h3>
<p>Android построен на <strong>ядре Linux</strong> и включает несколько ключевых уровней.</p>
<h4><strong>1. Linux Kernel</strong></h4>
<ul>
<li>Драйверы оборудования (Bluetooth, камера и т. д.).</li>
<li>Управление памятью и процессами.</li>
<li>Энергосбережение (Power Management).</li>
</ul>
<h4><strong>2. Hardware Abstraction Layer (HAL)</strong></h4>
<p>Обеспечивает связь между драйверами и системой, переводя запросы приложений в понятный для оборудования формат.</p>
<h4><strong>3. Android Runtime (ART)</strong></h4>
<p>Виртуальная машина для выполнения Java-приложений:</p>
<ul>
<li><strong>DEX-формат</strong> для оптимизации кода.</li>
<li><strong>JIT-компиляция</strong> (Just-in-Time) &mdash; ускоряет выполнение кода.</li>
<li><strong>AOT-компиляция</strong> (Ahead-of-Time) &mdash; предварительная компиляция для повышения производительности.</li>
</ul>
<h4><strong>4. Native C/C++ Libraries</strong></h4>
<p>Системные библиотеки:</p>
<ul>
<li><strong>WebKit</strong> &mdash; движок браузера.</li>
<li><strong>SQLite</strong> &mdash; встроенная база данных.</li>
<li><strong>OpenGL</strong> &mdash; графический рендеринг.</li>
<li><strong>Media Framework</strong> &mdash; обработка аудио и видео.</li>
</ul>
<h4><strong>5. Java API Framework</strong></h4>
<p>API-интерфейсы для работы с системными компонентами:</p>
<ul>
<li><strong>Activity Manager</strong> &mdash; управление жизненным циклом приложений.</li>
<li><strong>Window Manager</strong> &mdash; управление окнами и UI.</li>
<li><strong>Notification Manager</strong> &mdash; работа с уведомлениями.</li>
<li><strong>Location Manager</strong> &mdash; определение местоположения.</li>
</ul>
<h4><strong>6. System Apps</strong></h4>
<p>Встроенные приложения:</p>
<ul>
<li>Браузер, сообщения, контакты.</li>
<li>Google Play и сервисы Google.</li>
</ul>
<p>Эта архитектура делает Android гибкой, мощной и удобной для разработчиков.</p>

`,
    androidVsIos: `
    <h4><strong>1. Архитектура и ядро</strong></h4>
<ul>
<li><strong>Android:</strong> Основан на ядре Linux, поддерживает открытый код, использует виртуальную машину ART/Dalvik.</li>
<li><strong>iOS:</strong> Основан на ядре XNU (Unix-based), закрытая экосистема, использует собственную среду выполнения.</li>
</ul>
<h4><strong>2. Магазины приложений</strong></h4>
<ul>
<li><strong>Android:</strong> Google Play Store, возможность установки APK-файлов (sideloading).</li>
<li><strong>iOS:</strong> App Store, строгая модерация, sideloading ограничен (возможен только через TestFlight или корпоративные сертификаты).</li>
</ul>
<h4><strong>3. Основные языки разработки</strong></h4>
<ul>
<li><strong>Android:</strong> Kotlin, Java, Jetpack Compose, XML.</li>
<li><strong>iOS:</strong> Swift, Objective-C, SwiftUI, UIKit.</li>
</ul>
<h4><strong>4. Способы тестирования приложений</strong></h4>
<ul>
<li><strong>Android:</strong>
<ul>
<li>Инструменты: UiAutomator, Espresso, Appium, Playwright.</li>
<li>Доступ к файловой системе, эмуляторам, adb-командам.</li>
</ul>
</li>
<li><strong>iOS:</strong>
<ul>
<li>Инструменты: XCTest, XCUITest, Appium.</li>
<li>Ограниченный доступ к файловой системе, сложность работы с эмуляторами.</li>
</ul>
</li>
</ul>
<h4><strong>5. Особенности UI/UX</strong></h4>
<ul>
<li><strong>Android:</strong> Гибкость в кастомизации, разные производители устройств.</li>
<li><strong>iOS:</strong> Единый стандарт UI, строгие гайдлайны Human Interface Guidelines.</li>
</ul>
<h4><strong>6. Обновления и фрагментация</strong></h4>
<ul>
<li><strong>Android:</strong> Высокая фрагментация (разные версии ОС, устройства, оболочки).</li>
<li><strong>iOS:</strong> Более централизованные обновления, поддержка старых устройств.</li>
</ul>
`,
http_methods_2: `
<h3>Безопасные и идемпотентные методы</h3>
<p><strong>Идемпотентные методы</strong><span>&nbsp;</span>- это методы, которые либо не изменяют состояние в базе данных, либо изменяют состояние только при первом запросе. В случае повторной отправки идентичного запроса, состояние в базе данных не изменяется.</p>
<p>Идемпотентными методами являются: GET, PUT, DELETE, HEAD и OPTIONS. POST и PATCH не входят в эту группу.</p>
<p><strong>Безопасные методы</strong><span>&nbsp;</span>- это методы,&nbsp;которые не изменяют состояние в базе данных (read only методы).&nbsp;Примечательно, что все безопасные методы также являются идемпотентными.</p>
<p>Безопасными методами являются: GET, HEAD и OPTIONS.</p>
<p>Отличие идемпотентных методов от безопасных заключается в том, что безопасные методы не меняют состояние базы данных, в то время как идемпотентные методы могут внести изменения при первом запросе, но последующие идентичные запросы уже не будут менять состояние в базе данных.</p>
`,
http_header: `
<h4>Заголовки HTTP</h4>
<p><span>Заголовки HTTP содержат метаинформацию о запросах и ответах. Примеры заголовков:</span></p>
<ul>
  <!-- Общие заголовки -->
  <li>
    <p class="padding"><span><strong>Content-Type</strong>: Указывает тип содержимого (например, text/html).</span></p>
  </li>
  <li>
    <p class="padding"><span><strong>Authorization</strong>: Указывает на данные авторизации (например, токен, логин или пароль). Используется для доступа к защищённым ресурсам.</span></p>
  </li>
  <li>
    <p class="padding"><span><strong>Cache-Control</strong>: Управление кэшированием данных. Например, можно запретить кэширование с помощью значения <code>no-cache</code>.</span></p>
  </li>
  <li>
    <p class="padding"><span><strong>User-Agent</strong>: Информация о клиенте (например, браузере, устройстве или версии мобильного приложения).</span></p>
  </li>
  <li>
    <p class="padding"><span><strong>Cookie</strong>: Содержит данные, сохранённые клиентом, которые сервер использует для аутентификации, хранения сеансов и персонализации данных.</span></p>
  </li>
  <li>
    <p class="padding"><span><strong>Set-Cookie</strong>: Заголовок ответа, который используется сервером для установки или изменения данных в cookie на клиенте.</span></p>
  </li>

  <!-- Пользовательские заголовки -->
  <li>
    <p class="padding"><span><strong>X-App-Platform</strong>: Указывает платформу, с которой был отправлен запрос (например, Android, iOS, Windows).</span></p>
  </li>
  <li>
    <p class="padding"><span><strong>X-App-Version</strong>: Указывает версию приложения, которое инициировало запрос.</span></p>
  </li>
  <li>
    <p class="padding"><span><strong>X-App-Bundle</strong>: Уникальный идентификатор пакета приложения (например, <code>com.example.app</code>).</span></p>
  </li>
  <li>
    <p class="padding"><span><strong>X-Api-Version</strong>: Указывает версию API, которая используется клиентом.</span></p>
  </li>
  <li>
    <p class="padding"><span><strong>X-Device-UUID</strong>: Уникальный идентификатор устройства клиента, используется для идентификации устройства.</span></p>
  </li>

  <!-- Специфичные заголовки -->
  <li>
    <p class="padding"><span><strong>WWW-Authenticate</strong>: Указывает метод аутентификации, который поддерживает сервер (например, Basic или Bearer).</span></p>
  </li>
  <li>
    <p class="padding"><span><strong>Retry-After</strong>: Указывает время ожидания до повторного запроса, используется в ответах 429 и 503.</span></p>
  </li>
</ul>
`,
http_code: `
    <h4>Статусные коды</h4>
<ul>
<li>
<p><span><strong>1xx (Информационные)</strong>: Запрос принят и обрабатывается.</span></p>
</li>
<li>
<p><span><strong>2xx (Успешные)</strong>: Запрос успешно выполнен (например, 200 OK).</span></p>
</li>
<li>
<p><span><strong>3xx (Перенаправления)</strong>: Требуется дополнительное действие (например, 301 Moved Permanently).</span></p>
</li>
<li>
<p><span><strong>4xx (Ошибки клиента)</strong>: Ошибка на стороне клиента (например, 404 Not Found).</span></p>
</li>
<li>
<p><span><strong>5xx (Ошибки сервера)</strong>: Ошибка на стороне сервера (например, 500 Internal Server Error).</span></p>
</li>
</ul>
`,
http_methods: `
<table>
  <tr>
    <td>GET</td>
    <td>
      <strong>Описание:</strong> Запрашивает данные с сервера.<br>
      <strong>Применение:</strong> Получение веб-страницы, загрузка изображений.<br>
      <strong>Тело запроса:</strong> Отсутствует.<br>
      <strong>Пример:</strong> Получение списка пользователей.<br>
      <strong>Идемпотентный:</strong> Повторный запрос не изменяет состояние сервера.
    </td>
  </tr>
  <tr>
    <td>POST</td>
    <td>
      <strong>Описание:</strong> Отправляет данные на сервер.<br>
      <strong>Применение:</strong> Отправка формы авторизации, создание новых записей.<br>
      <strong>Тело запроса:</strong> Присутствует.<br>
      <strong>Пример:</strong> Регистрация нового пользователя.<br>
      <strong>НЕ Идемпотентный:</strong> Повторный запрос может создать дубликаты данных.
    </td>
  </tr>
  <tr>
    <td>PATCH</td>
    <td>
      <strong>Описание:</strong> Частично обновляет данные на сервере.<br>
      <strong>Применение:</strong> Внесение частичных изменений в запись.<br>
      <strong>Тело запроса:</strong> Присутствует.<br>
      <strong>Пример:</strong> Частичное обновление информации о пользователе.<br>
      <strong>НЕ Идемпотентный:</strong> Повторный запрос может внести дополнительные изменения.
    </td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>
      <strong>Описание:</strong> Обновляет существующие данные на сервере.<br>
      <strong>Применение:</strong> Обновление профиля пользователя.<br>
      <strong>Тело запроса:</strong> Присутствует.<br>
      <strong>Пример:</strong> Обновление информации о пользователе.<br>
      <strong>Идемпотентный:</strong> Повторный запрос приводит к тому же состоянию, как и первый.
    </td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>
      <strong>Описание:</strong> Удаляет данные с сервера.<br>
      <strong>Применение:</strong> Удаление учетной записи.<br>
      <strong>Тело запроса:</strong> Отсутствует.<br>
      <strong>Пример:</strong> Удаление пользователя из базы данных.<br>
      <strong>Идемпотентный:</strong> Повторный запрос не изменяет состояние сервера после первого выполнения.
    </td>
  </tr>
  <tr>
    <td>HEAD</td>
    <td>
      <strong>Описание:</strong> Получает только заголовки ответа без тела.<br>
      <strong>Применение:</strong> Проверка доступности ресурса.<br>
      <strong>Тело запроса:</strong> Отсутствует.<br>
      <strong>Пример:</strong> Проверка, доступна ли веб-страница.<br>
      <strong>Идемпотентный:</strong> Повторный запрос не изменяет состояние сервера.
    </td>
  </tr>
  <tr>
    <td>OPTIONS</td>
    <td>
      <strong>Описание:</strong> Получает информацию о поддерживаемых сервером методах.<br>
      <strong>Применение:</strong> Проверка возможностей сервера.<br>
      <strong>Тело запроса:</strong> Отсутствует.<br>
      <strong>Пример:</strong> Получение списка поддерживаемых методов для ресурса.<br>
      <strong>Идемпотентный:</strong> Повторный запрос не изменяет состояние сервера.
    </td>
  </tr>
</table>
`,
doker: `
<h3>Docker</h3>
<p><span><strong>Docker</strong> &mdash; это платформа для создания, распространения и запуска приложений в контейнерах. Основная идея Docker заключается в изоляции приложения и его зависимостей от операционной системы и других приложений. Это позволяет создавать "контейнеры", которые содержат все необходимое для запуска приложения.</span></p>
<h4>Почему Docker важен:</h4>
<ul>
<li>
<p><span><strong>Изоляция сред</strong>: Каждый контейнер работает независимо, что позволяет избежать конфликтов между приложениями.</span></p>
</li>
<li>
<p><span><strong>Портативность</strong>: Контейнеры могут быть запущены на любой платформе, поддерживающей Docker (Windows, Linux, macOS).</span></p>
</li>
<li>
<p><span><strong>Быстрота развертывания</strong>: Возможность быстро создавать среды для тестирования, разработки и производства.</span></p>
</li>
<li>
<p><span><strong>Воспроизводимость</strong>: Возможность создать одинаковую среду для разработчиков, тестировщиков и в производстве.</span></p>
</li>
</ul>
`,
ci_cd: `
<h3>CI/CD</h3>
<p><span><strong>CI/CD</strong> &mdash; это методы и принципы, которые помогают автоматизировать процессы интеграции, доставки и развертывания программного обеспечения.</span></p>
<h4>Основные компоненты CI/CD:</h4>
<ul>
<li>
<p><span><strong>Непрерывная интеграция (CI)</strong>: Постоянное интегрирование изменений кода в основную ветку. Каждое изменение проходит автоматизированное тестирование, что позволяет быстро выявлять ошибки и конфликты.</span></p>
</li>
<li>
<p><span><strong>Непрерывная доставка (CD)</strong>: Автоматизация доставки изменений в программном обеспечении до среды тестирования или staging. Здесь вручную проверяются изменения перед выпуском в производство.</span></p>
</li>
<li>
<p><span><strong>Непрерывное развертывание (CD)</strong>: Автоматизация полного процесса от изменений в исходном коде до их развертывания в производственной среде.</span></p>
</li>
</ul>
<h4>Почему CI/CD важен:</h4>
<ul>
<li>
<p><span><strong>Повышение качества</strong>: Благодаря автоматизированному тестированию, ошибки выявляются на ранних этапах разработки.</span></p>
</li>
<li>
<p><span><strong>Скорость выпусков</strong>: Автоматизация процессов позволяет быстро выпускать новые версии приложений.</span></p>
</li>
<li>
<p><span><strong>Снижение рисков</strong>: Благодаря постоянным небольшим выпускам уменьшается риск больших проблем в производственной среде.</span></p>
</li>
<li>
<p><span><strong>Снижение затрат</strong>: Автоматизация процессов уменьшает затраты на ручную работу и проверку.</span></p>
</li>
</ul>
`,
bezopasnosti: `
<h2><span style="font-weight: 400;">Тестирование безопасности (Функциональное)</span></h2>
<p>Проверяет, защищена ли система от несанкционированного доступа и атак. Это включает проверку авторизации, аутентификации и контроля доступа.</p>
<p></p>
<p><span style="font-weight: 400;"><strong>Аутентификация</strong> &ndash; проверка, что логин/пароль работают корректно, есть ограничения на количество попыток входа, поддерживается двухфакторная аутентификация.</span></p>
<p><span style="font-weight: 400;"><strong>Авторизация</strong> &ndash; проверка, что у разных ролей (пользователь, админ) есть соответствующие права доступа (например, обычный пользователь не может изменить настройки администратора).</span></p>
<p><span style="font-weight: 400;"><strong>Защита данных</strong> &ndash; проверка, что конфиденциальные данные не отображаются неавторизованным пользователям (например, нельзя увидеть чужие заказы, переписку, платежные данные).</span></p>
<p><span style="font-weight: 400;"><strong>Выход из системы</strong> &ndash; после выхода из аккаунта данные не должны сохраняться в кэше, куки должны удаляться.</span></p>
<p><span style="font-weight: 400;"><strong>Восстановление пароля</strong> &ndash; нельзя узнать существующий пароль через форму восстановления, проверяется безопасность токена восстановления.</span></p>
<p><span style="font-weight: 400;"><strong>Работа с сессиями</strong> &ndash; после определенного времени бездействия пользователь должен разлогиниться, токены сессии не должны быть использованы повторно.</span></p>

<h2><span style="font-weight: 400;">Тестирование Защищености (Не функциональное)</span></h2>
<p>Оценивает и улучшает безопасность системы, чтобы найти и устранить уязвимости. Это включает проверку на проникновение, анализ уязвимостей и оценку устойчивости системы к атакам.</p>
<p></p>
<p><span><strong>Оценка уязвимостей:</strong> Идентификация и анализ потенциальных уязвимостей в системе, использование автоматизированных инструментов и ручных методов.</span></p>
<p><span><strong>Тестирование на проникновение:</strong> Симуляция атак на систему с целью выявления слабых мест, моделирование различных сценариев атак.</span></p>
<p><span><strong>Аудит безопасности:</strong> Анализ текущих настроек безопасности и политик, проверка на соответствие стандартам безопасности и требованиям.</span></p>
<p><span><strong>Тестирование доступа:</strong> Проверка прав доступа и управления доступом к различным частям системы, убедиться, что несанкционированные пользователи не могут получить доступ.</span></p>
<p><span><strong>Тестирование конфиденциальности:</strong> Обеспечение защиты данных от несанкционированного доступа, проверка методов шифрования и управления данными.</span></p>
<p><span><strong>Оценка устойчивости:</strong> Проверка способности системы противостоять атакам и восстанавливаться после них, тестирование механизмов обнаружения и реагирования на инциденты.</span></p>
`,
    roleTl: `
    <h3>Роль тим лида на проекте</h3>
<p><span>Тим лид (Team Lead) &mdash; это ключевая фигура в команде разработки, обеспечивающая координацию и мотивацию команды. Основные обязанности тим лида включают:</span></p>
<ul>
<li>
<p><span><strong>Координация работы команды</strong>: Организация и распределение задач между участниками команды, контроль выполнения задач.</span></p>
</li>
<li>
<p><span><strong>Техническое руководство</strong>: Обеспечение технического качества решений, участие в проектировании архитектуры.</span></p>
</li>
<li>
<p><span><strong>Поддержка и обучение</strong>: Наставничество и обучение новых членов команды, помощь в решении сложных технических проблем.</span></p>
</li>
<li>
<p><span><strong>Взаимодействие с другими ролями</strong>: Координация работы с проектным менеджером, разработчиками, QA и другими участниками проекта.</span></p>
</li>
<li>
<p><span><strong>Решение конфликтов</strong>: Урегулирование конфликтных ситуаций внутри команды, обеспечение комфортной рабочей атмосферы.</span></p>
</li>
</ul>
`,
rolesAll: `
<h3>Роли на проекте</h3>
<ol start="1">
<li>
<p><span><strong>Проектный менеджер (PM)</strong></span></p>
<ul>
<li>
<p><span><strong>Функции</strong>: Планирование, управление ресурсами, контроль сроков, взаимодействие с клиентами.</span></p>
</li>
<li>
<p><span><strong>Ответственность</strong>: Завершение проекта в срок и в рамках бюджета.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Разработчики (Developers)</strong></span></p>
<ul>
<li>
<p><span><strong>Функции</strong>: Написание и поддержка кода, разработка новых функций.</span></p>
</li>
<li>
<p><span><strong>Ответственность</strong>: Качество кода, соответствие требованиям.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Тестировщики (QA)</strong></span></p>
<ul>
<li>
<p><span><strong>Функции</strong>: Тестирование ПО, выявление и документирование дефектов.</span></p>
</li>
<li>
<p><span><strong>Ответственность</strong>: Качество продукта, минимизация дефектов.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Тим лиды (Team Leads)</strong></span></p>
<ul>
<li>
<p><span><strong>Функции</strong>: Руководство командой, техническое консультирование.</span></p>
</li>
<li>
<p><span><strong>Ответственность</strong>: Эффективная работа команды, решение технических проблем.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Менеджеры (Managers)</strong></span></p>
<ul>
<li>
<p><span><strong>Функции</strong>: Управление проектом, стратегическое планирование.</span></p>
</li>
<li>
<p><span><strong>Ответственность</strong>: Успех и развитие проекта.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Бизнес-аналитики (Business Analysts)</strong></span></p>
<ul>
<li>
<p><span><strong>Функции</strong>: Анализ требований, взаимодействие с клиентами.</span></p>
</li>
<li>
<p><span><strong>Ответственность</strong>: Точное понимание и реализация требований.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Дизайнеры (Designers)</strong></span></p>
<ul>
<li>
<p><span><strong>Функции</strong>: Разработка интерфейсов, создание макетов.</span></p>
</li>
<li>
<p><span><strong>Ответственность</strong>: Удобство использования продукта.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Девопс инженеры (DevOps Engineers)</strong></span></p>
<ul>
<li>
<p><span><strong>Функции</strong>: Настройка инфраструктуры, автоматизация развертывания.</span></p>
</li>
<li>
<p><span><strong>Ответственность</strong>: Надежность и масштабируемость системы.</span></p>
</li>
</ul>
</li>
</ol>
`,
resks: `
<h3>Риски в тестировании программного обеспечения</h3>
<ol start="1">
<li>
<p><span><strong>Неполное тестирование</strong>:</span></p>
<ul>
<li>
<p><span><strong>Причина</strong>: Недостаток времени или ресурсов, пропуск важных сценариев тестирования.</span></p>
</li>
<li>
<p><span><strong>Последствие</strong>: Необнаруженные дефекты, которые могут проявиться на поздних этапах.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Изменение требований</strong>:</span></p>
<ul>
<li>
<p><span><strong>Причина</strong>: Непостоянство требований со стороны заказчика или бизнес-аналитика.</span></p>
</li>
<li>
<p><span><strong>Последствие</strong>: Необходимость переписывания тестов, увеличение времени и затрат на тестирование.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Человеческий фактор</strong>:</span></p>
<ul>
<li>
<p><span><strong>Причина</strong>: Ошибки, допущенные тестировщиками, недоразумения или недоразумения в коммуникации.</span></p>
</li>
<li>
<p><span><strong>Последствие</strong>: Недостаточное покрытие тестами, ошибки в результатах тестирования.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Технические проблемы</strong>:</span></p>
<ul>
<li>
<p><span><strong>Причина</strong>: Неправильная настройка тестового окружения, несовместимость ПО, сбои в системе.</span></p>
</li>
<li>
<p><span><strong>Последствие</strong>: Невозможность проведения корректного тестирования, неверные результаты тестов.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Автоматизация тестирования</strong>:</span></p>
<ul>
<li>
<p><span><strong>Причина</strong>: Неправильно настроенные автоматические тесты, ошибки в скриптах.</span></p>
</li>
<li>
<p><span><strong>Последствие</strong>: Ложные срабатывания, пропуск критических багов.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Недостаточное взаимодействие с разработчиками</strong>:</span></p>
<ul>
<li>
<p><span><strong>Причина</strong>: Неправильное или недостаточное общение между командами тестирования и разработки.</span></p>
</li>
<li>
<p><span><strong>Последствие</strong>: Несогласованность действий, недопонимание требований и критериев тестирования.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Недостаток документации</strong>:</span></p>
<ul>
<li>
<p><span><strong>Причина</strong>: Отсутствие или неполная документация по тестированию и функционалу системы.</span></p>
</li>
<li>
<p><span><strong>Последствие</strong>: Неполное понимание функциональности, пропуск критически важных тест-кейсов.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Непредвиденные внешние факторы</strong>:</span></p>
<ul>
<li>
<p><span><strong>Причина</strong>: Внешние условия, такие как отключение электричества, проблемы с интернетом, форс-мажорные обстоятельства.</span></p>
</li>
<li>
<p><span><strong>Последствие</strong>: Срывы сроков, невозможность проведения тестирования в запланированные сроки.</span></p>
</li>
</ul>
</li>
</ol>
`,
severityPriority: `
<h4>Серьёзность багов</h4>
<ol start="1">
<li>
<p><span><strong>S1 Блокирующий (Blocker)</strong>: Баг, делающий невозможным дальнейшее использование системы или выполнение критических функций.</span></p>
</li>
<li>
<p><span><strong>S2 Критический (Critical)</strong>: Баг, вызывающий серьёзные проблемы, влияющие на основные функции, но позволяющий продолжить использование системы с ограничениями.</span></p>
</li>
<li>
<p><span><strong>S3 Значительный (Major)</strong>: Баг, влияющий на важные функции системы, но не делающий её использование невозможным.</span></p>
</li>
<li>
<p><span><strong>S4 Незначительный (Minor)</strong>: Баг, влияющий на второстепенные функции или имеющий небольшое воздействие на пользовательский опыт.</span></p>
</li>
<li>
<p><span><strong>S5 Тривиальный (Trivial)</strong>: Незначительный баг, не влияющий на функциональность системы или вызывающий минимальные неудобства.</span></p>
</li>
</ol>
<h4>Приоритет багов</h4>
<ol start="1">
<li>
<p><span><strong>P1 Высокий (High)</strong>: Баг, требующий немедленного исправления, так как он сильно влияет на работу системы или пользовательский опыт.</span></p>
</li>
<li>
<p><span><strong>P2 Средний (Medium)</strong>: Баг, который необходимо исправить в ближайшее время, но он не критичен для немедленного использования системы.</span></p>
</li>
<li>
<p><span><strong>P3 Низкий (Low)</strong>: Баг, который можно исправить в дальнейшем, так как он имеет минимальное влияние на систему или её использование.</span><span></span></p>
<p><span></span><span></span><span></span></p>
</li>
</ol>
<hr />
<p><strong>Высокий приоритет, но низкая серьёзность (P1, S5)</strong></p>
<p><span>Пример: На главной странице сайта неправильно отображается логотип компании.</span></p>
<ul>
<li><span><strong>Причина высокого приоритета</strong>: Ошибка видна всем пользователям и влияет на имидж компании.</span></li>
<li><span><strong>Причина низкой серьёзности</strong>: Логотип не влияет на функциональность сайта.</span></li>
</ul>
<p><strong>Низкий приоритет, но высокая серьёзность (P3, S1)</strong></p>
<p><span>Пример: Редкая ошибка при определённых условиях приводит к сбою, но эти условия практически не встречаются.</span></p>
<ul>
<li><span><strong>Причина низкого приоритета</strong>: Ошибка проявляется только в редких и специфических ситуациях.</span></li>
<li><span><strong>Причина высокой серьёзности</strong>: Если ошибка возникает, она полностью блокирует работу системы.</span></li>
</ul>
`,
proizvoditelnosty: `
<ul>
<li>
<h3>Тестирование производительности&nbsp;<span style="font-size: 16px;">(не функциональное тестирование)</span></h3>
<ul>
<li>
<p><span><strong>Нагрузочное тестирование</strong>: Проверка системы под высокой нагрузкой для оценки её производительности.</span></p>
</li>
<li>
<p><span><strong>Тестирование стабильности (Soak Testing)</strong>: Оценка устойчивости работы системы при длительной эксплуатации, выявление возможных утечек памяти и других проблем.</span></p>
</li>
<li>
<p><span><strong>Стресс-тестирование</strong>: Проверка системы в экстремальных условиях, таких как резкое увеличение нагрузки, чтобы определить её пределы.</span></p>
</li>
<li>
<p><span><strong>Объёмное тестирование</strong>: Оценка работы системы при больших объемах данных, чтобы проверить её производительность и устойчивость.</span></p>
</li>
<li>
<p><span><strong>Тестирование масштабируемости</strong>: Проверка способности системы увеличивать нагрузку и объем данных без потери производительности, анализ масштабируемости инфраструктуры.</span></p>
</li>
</ul>
</li>
</ul>
`,
userStory: `
<h3>Пользовательская история (User Story)</h3>
<ul>
<li>
<p><span><strong>Определение</strong>: Краткое описание функциональности, которое написано с точки зрения конечного пользователя или клиента.</span></p>
</li>
<li>
<p><span><strong>Формат</strong>: Обычно включает в себя шаблон: "Как [роль], я хочу [действие], чтобы [цель]".</span></p>
</li>
<li>
<p><span><strong>Цель</strong>: Помогает команде разработки понять требования и ожидания пользователя, ориентируясь на реальные сценарии использования.</span></p>
</li>
<li>
<p><span><strong>Компоненты</strong>: Роль (кто), Действие (что), Цель (зачем).</span></p>
</li>
<li>
<p><span><strong>Использование</strong>: Основной инструмент в agile и scrum методологиях для управления требованиями и планирования спринтов.</span></p>
</li>
</ul>
`,
positivs: `
<p><span><strong>Позитивное тестирование:</strong></span></p>
<ol start="1">
<li>
<p><span>Проверка правильного выполнения функций при корректном вводе данных.</span></p>
</li>
<li>
<p><span>Убедиться, что приложение работает согласно спецификациям.</span></p>
</li>
<li>
<p><span>Положительные тестовые сценарии, проверяющие корректное поведение системы.</span></p>
</li>
<li>
<p><span>Проверка ожидаемого функционала и результатов.</span></p>
</li>
</ol>
<p><span><strong>Негативное тестирование:</strong></span></p>
<ol start="1">
<li>
<p><span>Проверка обработки некорректных данных и ситуаций.</span></p>
</li>
<li>
<p><span>Убедиться, что система стабильно работает при ошибочных вводах.</span></p>
</li>
<li>
<p><span>Негативные тестовые сценарии, выявляющие дефекты при нестандартных вводах.</span></p>
</li>
<li>
<p><span>Проверка системы на устойчивость к неправильным действиям пользователя.</span></p>
</li>
</ol>
<p><span>Эти два вида тестирования дополняют друг друга и помогают обеспечить высокое качество программного обеспечения.</span></p>
`,
Requirements: `
<h3><span><strong>Требования</strong>:</span></h3>
<ol start="1">
  <li><strong>Корректность</strong>:
    <ul>
      <li>Требования должны быть основаны на реальных потребностях и возможностях системы.</li>
      <li>Требования должны точно отражать желания и потребности пользователей.</li>
    </ul>
  </li>
  <p></p>
  <li><strong>Недвусмысленность</strong>:
    <ul>
      <li>Требования должны быть сформулированы таким образом, чтобы исключить любую возможность их двусмысленного толкования.</li>
      <li>Использование четких и ясных формулировок, избегание жаргона и неоднозначных терминов.</li>
    </ul>
  </li>
    <p></p>
  <li><strong>Полнота набора требований</strong>:
    <ul>
      <li>Все требования, необходимые для полной реализации системы, должны быть учтены.</li>
      <li>Необходимо учесть все функциональные и нефункциональные требования.</li>
    </ul>
  </li>
    <p></p>
  <li><strong>Непротиворечивость набора требований</strong>:
    <ul>
      <li>Все требования должны быть согласованы между собой и не должны противоречить друг другу.</li>
      <li>При выявлении противоречий необходимо их разрешать до начала разработки.</li>
    </ul>
  </li>
     <p></p>
  <li><strong>Проверяемость (тестопригодность)</strong>:
    <ul>
      <li>Каждое требование должно быть сформулировано таким образом, чтобы можно было однозначно проверить его выполнение.</li>
      <li>Требования должны быть измеримыми и наблюдаемыми.</li>
    </ul>
  </li>
     <p></p>
  <li><strong>Трассируемость</strong>:
    <ul>
      <li>Требования должны быть прослеживаемыми на всех этапах жизненного цикла разработки: от момента их определения до тестирования и внедрения.</li>
      <li>Должна существовать возможность отследить, как каждое требование было реализовано и протестировано.</li>
    </ul>
  </li>
     <p></p>
  <li><strong>Понимаемость</strong>:
    <ul>
      <li>Требования должны быть понятными для всех участников процесса разработки, включая заказчиков, разработчиков и тестировщиков.</li>
      <li>Использование четкого и понятного языка, минимизация сложных терминов и пояснений.</li>
    </ul>
  </li>
</ol>

`,
kanbanModel: `
<h3><span><strong>Kanban модель разработки</strong>:</span></h3>
<ol start="1">
  <li><strong>Основы:</strong>
    <ul>
      <li>Метод управления проектами, основанный на визуализации процессов работы.</li>
      <li>Используется для оптимизации задач и повышения эффективности.</li>
    </ul>
  </li>
  <li><strong>Принципы:</strong>
    <ul>
      <li><strong>Визуализация работы</strong>: создание доски Kanban с карточками, представляющими задачи.</li>
      <li><strong>Ограничение незавершенной работы (WIP)</strong>: ограничение количества задач, выполняемых одновременно.</li>
      <li><strong>Управление потоком</strong>: отслеживание прогресса задач и устранение узких мест.</li>
      <li><strong>Явные правила</strong>: четко определенные правила работы для всех участников команды.</li>
      <li><strong>Обратная связь</strong>: регулярные встречи для обсуждения прогресса и проблем.</li>
    </ul>
  </li>
  <li><strong>Основные этапы:</strong>
    <ul>
      <li><strong>Бэклог</strong>: список задач, которые предстоит выполнить.</li>
      <li><strong>В работе</strong>: задачи, которые в данный момент выполняются.</li>
      <li><strong>Готово</strong>: задачи, которые завершены.</li>
    </ul>
  </li>
  <li><strong>Преимущества:</strong>
    <ul>
      <li>Повышение прозрачности процессов.</li>
      <li>Увеличение гибкости и адаптивности команды.</li>
      <li>Улучшение качества работы и сокращение времени выполнения задач.</li>
      <li>Способствует постоянному совершенствованию процессов.</li>
    </ul>
  </li>
</ol>

<img src="modeli-razrabotki-po/kanban-board.jpg" height="300">

`,
agileModel: `
<h2>&laquo;Agile Model&raquo; (гибкая методология разработки)</h2>
<p><b>Когда использовать Agile?</b><br /><br /></p>
<ul>
<li>Когда потребности пользователей постоянно меняются в динамическом бизнесе.</li>
<li>Изменения на Agile реализуются за меньшую цену из-за частых инкрементов.</li>
<li>В отличие от модели водопада, в гибкой модели для старта проекта достаточно лишь небольшого планирования.</li>
</ul>
<img src="modeli-razrabotki-po/agileModel.jpg" height="500">

`,
iterativeModel: `
<h2>&laquo;Iterative Model&raquo; (итеративная или итерационная модель)</h2>
<p><b>Когда оптимально использовать итеративную модель?</b><br /><br /></p>
<ul>
<li>Требования к конечной системе заранее четко определены и понятны.</li>
<li>Проект большой или очень большой.</li>
<li>Основная задача должна быть определена, но детали реализации могут эволюционировать с течением времени.</li>
</ul>
<img src="modeli-razrabotki-po/iterativeModel.jpg" height="500">

`,
spiralModel: `
    <h2>&laquo;Spiral Model&raquo; (спиральная модель)</h2>
<p><b>Спиральная модель предполагает 4 этапа для каждого витка:</b><br /><br /></p>
<ol>
<li>планирование;</li>
<li>анализ рисков;</li>
<li>конструирование;</li>
<li>оценка результата и при удовлетворительном качестве переход к новому витку.</li>
</ol>
<img src="modeli-razrabotki-po/spiralModel.jpg" height="500">

`,
incrementalModel: `
    <h2>&laquo;Incremental Model&raquo; (инкрементная модель)</h2>
<p><b>Когда использовать инкрементную модель?</b><br /><br /></p>
<ul>
<li>Когда основные требования к системе четко определены и понятны. В то же время некоторые детали могут дорабатываться с течением времени.</li>
<li>Требуется ранний вывод продукта на рынок.</li>
<li>Есть несколько рисковых фич или целей.</li>
</ul>
<img src="modeli-razrabotki-po/Incremental.jpg" height="500">

`,
vModel: `
    <h2>&laquo;V-Model&raquo;</h2>
<p><b>Когда использовать V-модель?</b><br /><br /></p>
<ul>
<li>Если требуется тщательное тестирование продукта, то V-модель оправдает заложенную в себя идею: validation and verification.</li>
<li>Для малых и средних проектов, где требования четко определены и фиксированы.</li>
<li>В условиях доступности инженеров необходимой квалификации, особенно тестировщиков.</li>
</ul>
<img src="modeli-razrabotki-po/vModel.jpg" height="500">

`,
waterfallModel: `
<h2>&laquo;Waterfall Model&raquo; (каскадная модель или &laquo;водопад&raquo;)</h2>
<p><b>Когда использовать каскадную методологию?</b><br /><br /></p>
<ul>
<li>Только тогда, когда требования известны, понятны и зафиксированы. Противоречивых требований не имеется.</li>
<li>Нет проблем с доступностью программистов нужной квалификации.</li>
<li>В относительно небольших проектах.</li>
</ul>
<img src="modeli-razrabotki-po/waterfall.jpg" height="500">
`,
testClosure: `
    <p><span><strong>Закрытие теста</strong>:</span></p>
<ul>
<li>
<p><span>Оценка завершенности тестирования</span></p>
</li>
<li>
<p><span>Составление итогового отчета</span></p>
</li>
<li>
<p><span>Проведение ретроспективы для улучшения процессов</span></p>
</li>
</ul>
`,
testExecution: `
    <p><span><strong>Выполнение теста</strong>:</span></p>
<ul>
<li>
<p><span>Запуск тест-кейсов</span></p>
</li>
<li>
<p><span>Регистрация результатов тестирования</span></p>
</li>
<li>
<p><span>Отчет о выявленных дефектах</span></p>
</li>
</ul>
`,
testEnvironmentSetup: `
    <p><span><strong>Настройка тестовой среды</strong>:</span></p>
<ul>
<li>
<p><span>Подготовка и конфигурация тестового окружения</span></p>
</li>
<li>
<p><span>Обеспечение необходимого оборудования и ПО</span></p>
</li>
<li>
<p><span>Проверка готовности среды</span></p>
</li>
</ul>
`,
testCaseDevelopment: `
    <p><span><strong>Разработка тестового примера</strong>:</span></p>
<ul>
<li>
<p><span>Создание тест-кейсов и тестовых данных</span></p>
</li>
<li>
<p><span>Подготовка сценариев тестирования</span></p>
</li>
<li>
<p><span>Утверждение тест-кейсов</span></p>
</li>
</ul>
`,
testPlanning: `
<p><span><strong>Планирование испытаний</strong>:</span></p>
<ul>
<li>
<p><span>Определение объема и стратегии тестирования</span></p>
</li>
<li>
<p><span>Подготовка плана тестирования</span></p>
</li>
<li>
<p><span>Расчет необходимых ресурсов и сроков</span></p>
</li>
</ul>
</li>
`,
requirementAnalysisTest: `
<p><span><strong>Анализ требований</strong>:</span></p>
<ul>
<li>
<p><span>Изучение требований к системе</span></p>
</li>
<li>
<p><span>Определение тестовых объектов и приоритетов</span></p>
</li>
<li>
<p><span>Выявление критериев приема</span></p>
</li>
</ul>
`,
    requirementAnalysis: `
<p></p>
<p><span><strong>Анализ требований</strong>:</span></p>
<ul>
<li>
<p><span>Сбор, документация и валидация требований пользователей и бизнеса.</span></p>
</li>
<li>
<p><span>Обеспечение четкого понимания того, что должно быть реализовано.</span></p>
</li>
</ul>
`,
    design: `
<p></p>
<p><span><strong>Проектирование</strong>:</span></p>
<ul>
<li>
<p><span>Разработка архитектурных и технических решений для реализации требований.</span></p>
</li>
<li>
<p><span>Создание схем, макетов и технической документации для будущей разработки.</span></p>
</li>
</ul>
`,
    implementation: `
<p></p>
<p></p>
<p><span><strong>Программирование</strong>:</span></p>
<ul>
<li>
<p><span>Написание кода в соответствии с разработанными проектами и технической документацией.</span></p>
</li>
<li>
<p><span>Интеграция различных модулей и компонентов системы.</span></p>
</li>
</ul>
`,
    testingAndDebugging: `
<p><span><strong>Тестирование и отладка</strong>:</span></p>
<ul>
<li>
<p><span>Проведение различных видов тестирования (функциональное, интеграционное, системное, регрессионное) для выявления дефектов.</span></p>
</li>
<li>
<p><span>Исправление обнаруженных ошибок и улучшение качества кода.</span></p>
</li>
</ul>
`,
    maintenance: `
<p><span><strong>Эксплуатация, сопровождение и поддержка</strong>:</span></p>
<ul>
<li>
<p><span>Введение продукта в эксплуатацию и его использование конечными пользователями.</span></p>
</li>
<li>
<p><span>Обеспечение поддержки, устранение возникающих проблем и выпуск обновлений.</span></p>
</li>
</ul>
`,
    testDesign: `
<p></p>
<ul>
<li>
<p><span><strong>Эквивалентное Разделение</strong>:</span></p>
<ul>
<li>
<p><span>Разделение входных данных на эквивалентные классы.</span></p>
</li>
<li>
<p><span>Тестируются только один или несколько значений из каждого класса, что уменьшает количество тестов.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Анализ Граничных Значений</strong>:</span></p>
<ul>
<li>
<p><span>Тестирование значений на границах эквивалентных классов.</span></p>
</li>
<li>
<p><span>Граничные значения имеют более высокую вероятность обнаружения дефектов.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Причина / Следствие</strong>:</span></p>
<ul>
<li>
<p><span>Метод основан на изучении причинно-следственных связей.</span></p>
</li>
<li>
<p><span>Позволяет выявить взаимосвязи между входами и выходами системы.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Предугадывание ошибки</strong>:</span></p>
<ul>
<li>
<p><span>Опытные тестировщики используют знания и интуицию для предугадывания наиболее вероятных мест дефектов.</span></p>
</li>
<li>
<p><span>Эффективно при наличии знаний о системе и предшествующих дефектах.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Исчерпывающее тестирование</strong>:</span></p>
<ul>
<li>
<p><span>Тестирование всех возможных комбинаций входных данных.</span></p>
</li>
<li>
<p><span>Практически невозможно в реальной жизни из-за огромного числа комбинаций, но полезно для небольших и критичных частей системы.</span></p>
</li>
</ul>
</li>
<li>
<p><span><strong>Попарное тестирование</strong>:</span></p>
<ul>
<li>
<p><span>Тестируются все возможные пары значений входных параметров.</span></p>
</li>
<li>
<p><span>Позволяет значительно уменьшить количество тестов, обеспечивая высокое покрытие.</span></p>
</li>
</ul>
</li>
</ul>
<p></p>
`,
    reports: `
<h3><span><strong>Отчёты тестирования</strong>:</span></h3>
<ul>
<li>
<p><span>Это документы, обобщающие результаты тестирования, обнаруженные дефекты и статус тестирования.</span></p>
</li>
<li>
<p><span>Содержат информацию о выполненных тестах, успешных и неудачных случаях, выявленных дефектах и их статусе.</span></p>
</li>
<li>
<p><span>Используются для информирования заинтересованных сторон о состоянии качества продукта.</span></p>
</li>
</ul>
`,
    testCase: `
<h3><span><strong>Тест-кейсы</strong>:</span></h3>
<ul>
<li>
<p><span>Это подробные документы, описывающие шаги, ожидаемые результаты и условия тестирования.</span></p>
</li>
<li>
<p><span>Включают в себя предусловия, данные тестирования, шаги для выполнения и ожидаемые результаты.</span></p>
</li>
<li>
<p><span>Помогают в систематическом и воспроизводимом тестировании продукта.</span></p>
</li>
</ul>
`,
    checklist: `
<h3><span><strong>Чеклист</strong>:</span></h3>
<ul>
<li>
<p><span>Это список задач или элементов, которые необходимо проверить.</span></p>
</li>
<li>
<p><span>Используется для быстрой и простой верификации, что все важные аспекты протестированы.</span></p>
</li>
<li>
<p><span>Обычно содержит ключевые сценарии и проверки.</span></p>
</li>
</ul>
`,
    testPlan: `
<p><strong>Тестплан</strong> (Test Plan) &mdash; это документ, который описывает цели, объем, подход и фокус тестирования программного обеспечения. Тестплан содержит детализированную информацию о том, что будет тестироваться, как, кем и когда. Он также включает ресурсы, критерии принятия, риски и возможные решения.</p>
<ol>
<li>Отвечает на вопросы:
<ul>
<li>Что надо тестировать?</li>
<li>Что будете тестировать?</li>
<li>Как будете тестировать?</li>
<li>Когда будете тестировать?</li>
</ul>
</li>
<li>Основные пункты тест плана
<ul style="list-style-type: square;">
<li>Идентификатор тест плана</li>
<li>Введение</li>
<li>Объект тестирования</li>
<li>Функции, которые будут протестированы</li>
<li>Функции, которые не будут протестированы</li>
<li>Тестовые подходы</li>
<li>Критерии прохождения тестирования</li>
<li>Критерии приостановления и возобновления тестирования</li>
<li>Результаты тестирования</li>
<li>Задачи тестирования</li>
<li>Ресурсы системы</li>
<li>Обязанности</li>
<li>Роли и ответственность</li>
<li>Расписание</li>
<li>Оценка рисков</li>
<li>Согласования</li>
<li>Критерии начала тестирования.</li>
<li>Критерии окончания тестирования.</li>
</ul>
</li>
</ol>
`,
    testingStages: `
<h2>Этапы тестирования</h2>
<h4><span><strong>Анализ продукта</strong>: </span></h4>
<p><span>Изучение продукта, его функциональности и особенностей для понимания области тестирования.</span></p>
<h4><span><strong>Работа с требованиями</strong>: </span></h4>
<p><span>Определение и анализ требований к продукту, создание спецификаций для тестирования.</span></p>
<h4><span><strong>Разработка стратегии тестирования и планирование процедур контроля качества</strong>:</span></h4>
<p><span> Определение подхода к тестированию, выбор методов и инструментов, разработка плана тестирования.</span></p>
<h4><span><strong>Создание тестовой документации</strong>: </span></h4>
<p><span>Разработка тестовых сценариев, тест-кейсов и другой необходимой документации для проведения тестирования.</span></p>
<h4><span><strong>Тестирование прототипа</strong>: </span></h4>
<p><span>Проведение предварительных тестов на ранних версиях продукта для выявления и устранения критических дефектов.</span></p>
<h4><span><strong>Основное тестирование</strong>: </span></h4>
<p><span>Проведение полного цикла тестирования на готовом продукте, включающего функциональное, интеграционное, системное и регрессионное тестирование.</span></p>
<h4><span><strong>Стабилизация</strong>: </span></h4>
<p><span>Исправление выявленных дефектов, повторное тестирование и подготовка продукта к выпуску.</span></p>
<h4><span><strong>Эксплуатация</strong>: </span></h4>
<p><span>Введение продукта в эксплуатацию, мониторинг его работы, обеспечение поддержки и устранение возможных проблем.</span></p>
`,
    testingPrinciples: `
<h2>Принципы тестирования</h2>
<p></p>
<ul>
<li><span><strong>Тестирование демонстрирует наличие дефектов, а не их отсутствие</strong>: Тестирование может выявить наличие дефектов, но не может доказать их отсутствие. Тестирование уменьшает вероятность наличия незамеченных дефектов, но не гарантирует их отсутствие.</span></li>
</ul>
<p><span></span></p>
<ul>
<li><span><strong>Исчерпывающее тестирование невозможно</strong>: Полное тестирование всех возможных сценариев и комбинаций недостижимо. Вместо этого используются стратегии выборочного тестирования и оценки риска.</span></li>
</ul>
<p><span></span></p>
<ul>
<li><span><strong>Раннее тестирование экономит время и деньги</strong>: Чем раньше дефекты выявляются в процессе разработки, тем дешевле и быстрее их можно исправить. Раннее тестирование помогает избежать дорогостоящих исправлений на более поздних стадиях проекта.</span></li>
</ul>
<p><span></span></p>
<ul>
<li><span><strong>Скопление (кластеризация) дефектов</strong>: Дефекты имеют тенденцию концентрироваться в небольшом числе модулей. Это означает, что небольшое количество компонентов может содержать большинство дефектов, что позволяет сфокусировать усилия тестирования.</span></li>
</ul>
<p><span></span></p>
<ul>
<li><span><strong>Парадокс пестицида (Тесты устаревают)</strong>: Повторное выполнение одних и тех же тестов может привести к тому, что эти тесты станут неэффективными в обнаружении новых дефектов. Тестовые сценарии необходимо регулярно пересматривать и обновлять.</span></li>
</ul>
<p><span></span></p>
<ul>
<li><span><strong>Тестирование зависит от контекста</strong>: Подходы к тестированию различаются в зависимости от типа приложения, его критичности, уровня рисков и других факторов. Тестирование, подходящее для одного проекта, может быть неэффективным для другого.</span></li>
</ul>
<p><span></span></p>
<ul>
<li><span><strong>Заблуждение об отсутствии дефектов</strong>: Отсутствие найденных дефектов не означает, что программное обеспечение идеально. Небольшое количество обнаруженных дефектов может свидетельствовать о недостаточной глубине тестирования.</span></li>
</ul>
`,
    testingGoal: `
<p><strong>Тестирование</strong> - это процесс проверки программного обеспечения с целью обнаружения дефектов, оценки его качества и соответствия требованиям. Оно включает проверку кода, выявление багов, проверку функциональности, производительности, безопасности и других аспектов работы приложения.</p>
<h3></h3>
<p><strong>Баг</strong> - это ошибка или дефект в программе, который приводит к тому, что программа работает не так, как было задумано. Баги могут вызывать сбои, неправильное поведение или другие проблемы, мешающие нормальной работе программы.</p>
<h3></h3>
<p><strong>Цель тестирования</strong><span>:</span></p>
<ul>
<li><span>Проверка соответствия ПО предъявляемым требованиям</span></li>
<li><span> Обеспечение уверенности в качестве ПО</span></li>
<li><span>Поиск очевидных ошибок в программном обеспечени</span><span>&nbsp;которые должны быть выявлены до того, как их обнаружат пользователи программы.</span></li>
</ul>
<h3></h3>
<p><strong><span class="fontstyle0">Типичные цели тестирования:</span></strong></p>
<ul>
<li>
<p><span>Проверка требований и кода на соответствие.</span></p>
</li>
<li>
<p><span>Провоцирование ошибок и нахождение дефектов.</span></p>
</li>
<li>
<p><span>Убедиться, что всё проверено.</span></p>
</li>
<li>
<p><span>Снижение рисков плохого качества ПО.</span></p>
</li>
<li>
<p><span>Проверка соответствия требованиям.</span></p>
</li>
<li>
<p><span>Убедиться в соответствии контрактам и законам.</span></p>
</li>
<li>
<p><span>Предоставление информации для принятия решений.</span></p>
</li>
<li>
<p><span>Уверенность в качестве продукта.</span></p>
</li>
<li>
<p><span>Проверка завершенности и соответствия ожиданиям.</span></p>
</li>
</ul>
`,
    testingGoals: `
<h2>По целям</h3>
<h3>Функциональное</h3>
<ul>
<li>
<p><span><strong>Функциональное тестирование:</strong> Проверка работы функций и модулей системы на соответствие требованиям.</span></p>
</li>
<li>
<p><span style="color: #ff0000;"><strong>Тестирование пользовательского интерфейса:</strong> Оценка удобства и корректности работы интерфейса.</span></p></li>
<li>
<p><span><strong>Тестирование безопасности:</strong> Обнаружение уязвимостей и проверка защиты данных.</span></p>
</li>
<li>
<p><span><strong>Тестирование взаимодействия:</strong> Проверка корректности взаимодействия между компонентами и системами.</span></p>
</li>
</ul>
<h3>Не функциональное</h3>
<ul>
<li>
<p><span><strong>Пользовательский интерфейс:</strong> Оценка визуальных элементов интерфейса и их взаимодействия.</span></p>
</li>
<li>
<p><span><strong>Удобство использования:</strong> Проверка удобства использования системы пользователями.</span></p>
</li>
<li>
<p><span><strong>Защищённость:</strong> Оценка мер по защите данных и предотвращению утечек.</span></p>
</li>
<li>
<p><span><strong>Инсталяционное:</strong> Проверка процесса установки и настройки системы.</span></p>
</li>
<li>
<p><span><strong>Конфигурационное:</strong> Оценка корректности конфигурации и настройки системы.</span></p>
</li>
<li>
<p><span><strong>Совместимости:</strong> Проверка совместимости системы с различными устройствами, ОС и браузерами.</span></p>
</li>
<li>
<p><span><strong>Надёжности и восстановления после сбоев:</strong> Оценка стабильности работы системы и её способности восстанавливаться после сбоев.</span></p>
</li>
<li>
<p><span><strong>Локализации:</strong> Проверка корректности локализации системы для различных регионов и языков.</span></p>
</li>
<li>
<p><span><strong>Производительности:</strong> Оценка производительности системы.</span></p>
<ul>
<li>
<p><span><strong>Нагрузочное:</strong> Проверка системы под высокой нагрузкой.</span></p>
</li>
<li>
<p><span><strong>Стабильности:</strong> Оценка устойчивости работы системы при длительной эксплуатации.</span></p>
</li>
<li>
<p><span><strong>Стрессовое:</strong> Проверка системы в экстремальных условиях.</span></p>
</li>
<li>
<p><span><strong>Объёмное:</strong> Оценка работы системы при больших объемах данных.</span></p>
</li>
<li>
<p><span><strong>Масштабируемости:</strong> Проверка возможности увеличения нагрузки и объема данных без потери производительности.</span></p>
</li>
</ul>
</li>
</ul>
`,
    qaVsQc: `
    <p><span class="fontstyle0"><strong>Контроль качества (QC)</strong> &mdash; это корректирующий подход, ориентированный на продукт, который сосредотачивается на действиях, поддерживающих достижение надлежащего уровня качества. Тестирование является основным видом контроля качества, в то время как другие виды включают формальные методы (проверку модели и доказательство правильности), моделирование и прототипирование.</span></p>
<p><span class="fontstyle0"><strong>Обеспечение качества (QA)</strong> &mdash; это превентивный подход, ориентированный на процесс, который сосредотачивается на внедрении и улучшении процессов. Он предполагает, что если правильно следовать хорошему процессу, то будет создан хороший продукт. Обеспечение качества применяется как к процессам разработки, так и к процессам тестирования, и за него несет ответственность каждый участник проекта.</span></p>
<p><span class="fontstyle0">Результаты тестов используются как QA, так и QC. В QC они используются для исправления дефектов, а в QA они обеспечивают обратную связь, насколько хорошо выполняются процессы разработки и тестирования.</span> <br /><br /></p>
<table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
    <thead>
        <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;"><strong>QA vs QC</strong></th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;"><strong>QA (Обеспечение качества)</strong></th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;"><strong>QC (Контроль качества)</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>Контроль качества</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">Проверка качества ПО до его создания</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Проверка уже существующего ПО</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"></td>
            <td style="border: 1px solid #ddd; padding: 8px;">Изучение возможности по изменению и улучшению процесса разработки</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Проверка на соответствие требований и качества и готовность к выпуску</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>Задачи</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">Оценка рисков, подготовка документации, тестового окружения и данных, анализ результатов тестирования</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Предоставить информацию о качестве продукта на разных этапах разработки</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>Цели</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">Гарантировать качество ПО на каждом этапе разработки</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Обнаружение и исправление дефектов в уже готовом продукте</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>Методы</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">Планирование, проектирование и реализация стратегий и процессов</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Тестирование, проверка и контроль качества продукта</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>Техники</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">Автоматизированное и ручное тестирование, анализ и проверка требований</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Проверка соответствия продукта стандартам и требованиям, исправление дефектов</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>Задачи</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">Предотвращение дефектов, обеспечение соответствия требованиям, повышение качества продукта</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Выявление дефектов, исправление ошибок, контроль качества в конечном продукте</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><strong>Область</strong></td>
            <td style="border: 1px solid #ddd; padding: 8px;">Широкий спектр деятельности, охватывающий все этапы разработки и внедрения продукта</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Узкоспециализированная проверка и контроль качества конечного продукта</td>
        </tr>
    </tbody>
</table>
`,
    verificationAndValidation: `
<h2>Верификация и валидация</h2>
<h4>Верификация</h4>
<ul>
<li><span>Делаем ли мы продукт правильно?</span></li>
<li><span>Проверка на соответствие документации.</span></li>
<li><span>Статическая проверка без запуска кода.</span></li>
<li><span>Проводится до валидации.</span></li>
</ul>
<h4>Валидация</h4>
<ul>
<li><span>Динамическая проверка с запуском кода.</span></li>
<li><span>Проверка готового продукта на соответствие ожиданиям и требованиям пользователя.</span></li>
<li><span>Делаем ли мы правильный продукт?</span></li>
<li><span>Проводится после верификации.</span></li>
</ul>
`,
    testingLevel: `
<h3>1. Модульное тестирование</h3>
<ul>
<li><span><strong>Цель:</strong> Проверка отдельных модулей или компонентов системы.</span></li>
<li><span><strong>Выполняется:</strong> Разработчиками.</span></li>
<li><span><strong>Фокус:</strong> Функциональность и правильность работы каждого отдельного модуля.</span></li>
<li><span><strong>Инструменты:</strong> JUnit, NUnit, TestNG.</span></li>
</ul>
<h3>2. Интеграционное тестирование</h3>
<ul>
<li><span><strong>Цель:</strong> Тестирование взаимодействия между модулями.</span></li>
<li><span><strong>Выполняется:</strong> Командами тестирования и разработчиками.</span></li>
<li><span><strong>Фокус:</strong> Совместимость модулей и корректность их взаимодействия.</span></li>
<li><span><strong>Инструменты:</strong> JUnit, NUnit, Postman для API.</span></li>
</ul>
<h3>3. Системное тестирование</h3>
<ul>
<li><span><strong>Цель:</strong> Полное тестирование всей системы как единого целого.</span></li>
<li><span><strong>Выполняется:</strong> Командами тестирования.</span></li>
<li><span><strong>Фокус:</strong> Проверка всех функциональных и нефункциональных требований.</span></li>
<li><span><strong>Инструменты:</strong> Selenium, QTP, LoadRunner.</span></li>
</ul>
<h3>4. Приёмочное тестирование</h3>
<ul>
<li><span><strong>Цель:</strong> Подтверждение готовности системы к эксплуатации заказчиком.</span></li>
<li><span><strong>Выполняется:</strong> Конечными пользователями или командой заказчика.</span></li>
<li><span><strong>Фокус:</strong> Соответствие системы бизнес-требованиям и пользовательским ожиданиям.</span></li>
<li><span><strong>Инструменты:</strong> UAT (User Acceptance Testing), Alpha и Beta тестирования.</span></li>
</ul>
`,
    systemKnowledge: `
    <p><span><strong>Тестирование "Белый ящик"</strong>:</span></p>
<ul>
<li><span>Тестировщик имеет полное знание внутренней структуры и логики системы.</span></li>
<li><span>Проверяет внутренние процессы, алгоритмы, и код системы.</span></li>
<li><span>Использует методики, такие как анализ потока данных и покрытие кода.</span></li>
<li><span>Цель &ndash; обеспечить максимально полное тестирование всех аспектов системы.</span></li>
</ul>
<p><span><strong>Тестирование "Черный ящик"</strong>:</span></p>
<ul>
<li><span>Тестировщик не имеет информации о внутренней структуре системы.</span></li>
<li><span>Проверяет только входные и выходные данные системы, не зная о внутренней логике.</span></li>
<li><span>Фокусируется на функциональности и внешнем поведении системы.</span></li>
<li><span>Цель &ndash; убедиться, что система выполняет свои функции корректно и соответствует требованиям.</span></li>
</ul>
<p><span><strong>Тестирование "Серый ящик"</strong>:</span></p>
<ul>
<li><span>Тестировщик имеет ограниченное знание внутренней структуры системы.</span></li>
<li><span>Сочетает методы тестирования "белого ящика" и "черного ящика".</span></li>
<li><span>Использует доступную информацию о системе для более детального и целенаправленного тестирования.</span></li>
</ul>
`,
    testScenarioDevelopment: `
<p><strong>Тестирование на основе требований:</strong></p>
<ul>
<li>Тестовые сценарии разрабатываются на основе требований к системе.</li>
<li>Проверяет, соответствует ли система заявленным требованиям и спецификациям.</li>
<li>Цель &ndash; убедиться, что все требования правильно реализованы и работают без ошибок.</li>
</ul>
<p><strong>Тестирование по вариантам использования:</strong></p>
<ul>
<li>Тестовые сценарии разрабатываются на основе вариантов использования системы.</li>
<li>Проверяет, как система справляется с реальными пользовательскими задачами и сценариями.</li>
<li>Цель &ndash; убедиться, что система удовлетворяет потребности и ожидания пользователей.</li>
</ul>
<p><strong>Тестирование на основе модели:</strong></p>
<ul>
<li>Тестовые сценарии разрабатываются на основе моделей системы, таких как диаграммы потоков данных или диаграммы состояний.</li>
<li>Проверяет, как система взаимодействует и функционирует в различных состояниях и условиях.</li>
<li>Цель &ndash; выявить дефекты, связанные с переходами состояний и взаимодействиями в системе.</li>
</ul>
`,
    testers: `
<p></p>
<p><strong>Альфа тестирование:</strong></p>
<ul>
<li>Проводится внутри компании-разработчика.</li>
<li>Включает тестирование программного обеспечения сотрудниками компании.</li>
<li>Цель &ndash; выявить и исправить большинство критических и некритических ошибок до выпуска продукта для внешних пользователей.</li>
<li>Тестирование осуществляется в контролируемой среде и может включать симуляцию реальных условий эксплуатации.</li>
</ul>
<p><strong>Бета тестирование:</strong></p>
<ul>
<li>Проводится внешними пользователями или клиентами.</li>
<li>Продукт предоставляется ограниченному числу реальных пользователей для тестирования в реальных условиях.</li>
<li>Цель &ndash; собрать отзывы пользователей и выявить оставшиеся ошибки и проблемы, которые могли быть пропущены на этапе альфа тестирования.</li>
<li>Помогает компании понять, как продукт будет работать в реальной среде и соответствовать ожиданиям пользователей.</li>
</ul>
<p></p>
<p></p>
`,
    codeExecution: `
<p><strong>Статическое тестирование</strong></p>
<ul>
<li>Проводится без выполнения кода программы.</li>
<li>Включает рецензирование кода, анализ документации и использование статических анализаторов кода.</li>
<li>Цель &ndash; выявить дефекты и ошибки в коде до его выполнения.</li>
<li>Позволяет экономить время и ресурсы, так как дефекты находятся на ранних стадиях разработки.</li>
</ul>
<p><strong>Динамическое тестирование</strong>:</p>
<ul>
<li>Включает выполнение кода и наблюдение за его поведением.</li>
<li>Проводится с помощью различных типов тестирования, таких как функциональное, интеграционное и системное.</li>
<li>Цель &ndash; проверить правильность выполнения программы, выявить ошибки и дефекты во время выполнения.</li>
<li>Позволяет оценить производительность и стабильность системы в различных условиях.</li>
</ul>
`,
    executionChronology: `
<ul>
<li>
<p><span><strong>Комплексное тестирование</strong>: Охватывает все аспекты системы. Включает в себя интеграцию, функциональность, производительность и безопасность. Цель &ndash; убедиться, что система работает корректно и эффективно.</span><span></span></p>
</li>
</ul>
<p><span></span></p>
<ul>
<li>
<p><span><strong>Входной тест</strong>: Выполняется перед началом основной фазы тестирования. Проверяет готовность тестовой среды и системы к тестированию. Также включает начальную проверку основных функций.</span></p>
</li>
</ul>
<p><span></span></p>
<ul>
<li>
<p><span><strong>Основной тест</strong>: Основная фаза тестирования, где проверяются все основные функции и возможности системы. Выполняется на этапе разработки или после завершения сборки системы.</span><span></span></p>
</li>
</ul>
<p><span></span></p>
<ul>
<li>
<p><span><strong>Повторное тестирование</strong>: Тестирование тех же функций после внесения исправлений или обновлений. Цель &ndash; убедиться, что исправленные дефекты устранены и не вызвали новых проблем.</span></p>
</li>
</ul>
<p><span></span></p>
<ul>
<li>
<p><span><strong>Дымовое тестирование</strong>: Быстрое тестирование основных функций системы для проверки ее базовой работоспособности. Часто выполняется перед началом более детального тестирования.</span></p>
</li>
</ul>
<p><span></span></p>
<ul>
<li>
<p><span><strong>Регрессионное тестирование</strong>: Проверка системы после внесения изменений или обновлений, чтобы убедиться, что они не повлияли негативно на существующие функции.</span><span></span></p>
</li>
</ul>
<p><span></span></p>
<ul>
<li>
<p><span><strong>Приёмочное тестирование</strong>: Заключительная фаза тестирования, выполняется пользователями или клиентами. Проверяет, соответствует ли система их требованиям и ожиданиям перед внедрением.</span></p>
</li>
</ul>
    `,
    formality: `
<p><strong>На опыте</strong> (тестирование на основе опыта):</p>
<ul>
<li>Основано на знаниях и опыте тестировщиков.</li>
<li>Применяется, когда формальные методы тестирования не подходят или ограничены.</li>
<li>Использует интуицию и здравый смысл для нахождения дефектов.</li>
</ul>
<p><strong>Интуитивное тестирование:</strong></p>
<ul>
<li>Полагается на интуицию и инстинкты тестировщика.</li>
<li>Часто используется на ранних стадиях разработки, когда документация неполная.</li>
<li>Тестировщики предвидят возможные проблемы, исходя из своего опыта и понимания системы.</li>
</ul>
<p><strong>Исследовательское тестирование:</strong></p>
<ul>
<li>Тестирование, при котором планирование и выполнение происходят одновременно.</li>
<li>Тестировщики изучают систему в процессе тестирования, выявляя области риска и дефекты.</li>
<li>Подразумевает высокий уровень адаптивности и творчества.</li>
</ul>
    `,
    codeExecution: `
<p><span><strong>Статическое тестирование</strong>:</span></p>
<ul>
<li><span>Проводится без выполнения кода программы.</span></li>
<li><span>Включает рецензирование кода, анализ документации и использование статических анализаторов кода.</span></li>
<li><span>Цель &ndash; выявить дефекты и ошибки в коде до его выполнения.</span></li>
<li><span>Позволяет экономить время и ресурсы, так как дефекты находятся на ранних стадиях разработки.</span></li>
</ul>
<p><span><strong>Динамическое тестирование</strong>:</span></p>
<ul>
<li><span>Включает выполнение кода и наблюдение за его поведением.</span></li>
<li><span>Проводится с помощью различных типов тестирования, таких как функциональное, интеграционное и системное.</span></li>
<li><span>Цель &ndash; проверить правильность выполнения программы, выявить ошибки и дефекты во время выполнения.</span></li>
<li><span>Позволяет оценить производительность и стабильность системы в различных условиях.</span></li>
</ul>
`,

};

function showContent(section) {
    document.getElementById('content').innerHTML = content[section];
    document.getElementById('article').innerHTML = '';

}

function showArticle(article) {
    document.getElementById('article').innerHTML = articles[article];
    
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
  });
}


