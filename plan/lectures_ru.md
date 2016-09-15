# План лекций по веб-разработке

1. Как работает Сеть
  * Что такое Интернет
  * Как он работает: https://www.youtube.com/watch?v=oj7A2YDgIWE
  * Что такое "клиент" и "сервер": [ref](https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B8%D0%B5%D0%BD%D1%82-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80)
  * Как работает протокол HTTP: http://www.garshol.priv.no/download/text/http-tut.html
    * URL
    * Методы
    * Пути
  * Что такое DNS и зачем
  * HTML и CSS: http://htmlbook.ru/
  * Валидация HTML: http://validator.w3.org/
  * XHTML: http://www.w3schools.com/html/html_xhtml.asp
  * Статические и динамические сайты
  * Инструментарий браузера: https://habrahabr.ru/post/143767/ | [Mozilla Page Inspector](https://developer.mozilla.org/ru/docs/Tools/Page_Inspector)
2. Инструментарий разработки
  * Виртуальные машины для разработки: http://virtualbox.org/ & http://ubuntu.com/desktop
  * Командная строка: http://conqueringthecommandline.com/book/basics | [video](https://www.youtube.com/watch?v=KVH3dMWefWE)
    * Запуск: gnome-terminal (GNOME) | Teminal.app (Mac OS X) | cmd.exe (Microsoft Windows)
    * Переход в директорию: cd
    * Создание, переименование, удаление директории или файла: mkdir, mv | ren, rm | del
    * Права доступа: chmod, chown
  * Системы контроля версий
    * Клонирование репозитария: git clone
    * Добавление файла в индекс: git add, git rm
    * Фиксация изменений: git commit
    * Синхронизация изменений с удаленным репозитарием: git pull, git push
    * Откатывание коммитов: git reset --hard HEAD~2 (где 2 - два коммита; git push -f)
    * Способ командной разработки Git Flow: https://habrahabr.ru/post/106912/
  * Интегрированные среды разработки: https://www.jetbrains.com/pycharm/
3. Бэкэнд: Flask | Django
4. Верстка: Bootstrap
5. Фронтэнд: jQuery & AngularJS | ReactJS
6. Фоновая обработка задач: Celery
