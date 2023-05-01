# Проект Mesto на React
Адаптивная и интерактивная страница с карточками - каждая карточка содержит картинку и краткое описание.

Проект переписан с использованием библиотеки React. Инфраструктурные файлы проекта созданы через CRA.
Реализован функционал:
* Запрос к API за информацией о пользователе и массивом карточек
* Открытие/закрытие попапов
* Лайки и удаление карточек
* Редактирование профиля
* Редактирование аватара
* Добавление новой карточки


### Используемые технологии
* React
* HTML - семантическая разметка, именование классов по БЭМ
* CSS - Flexbox, Grid Layot. Адаптация для мобильных устройств реализована с использованием @media queries - страница корректно отображается на разрешениях 320px и выше
* В качестве организации файловой структуры используется Nested БЭМ
* JavaScript

### Планы по доработке
* Сделать валидацию форм и индикаторы загрузки запросов
* Добавить всплывающие подтверждения для удаления карточек

Ссылка на проект: [Mesto](https://ammosoff.github.io/mesto-react/)

## Для запуска проекта:
1. Склонировать репозиторий
2. В каталоге проекта выполнить команду `npm install react-scripts --save-dev`
3. Для запуска проекта выполнить `npm start`, проект будет доступен по адресу [http://localhost:3000](http://localhost:3000) 