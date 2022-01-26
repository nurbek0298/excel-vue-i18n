# excel-vue-i18n

Генерирует перевод из Excel в json файлы для Vue I18n

## Установка

```
npm install https://github.com/nurbek0298/excel-vue-i18n --save-dev
```

## Как это работает ?

### Создаем excel файл как на картинке:

![Пример excel файла](https://raw.githubusercontent.com/nurbek0298/excel-vue-i18n/main/docs/excel-example.jpg)

### Генерируем json файлы с помощью команды:

```
npx excel-vue-i18n -f=./translations.xlsx -o=src/locales
```

Опции:

```
      --help       Показать помощь                                 [булевый тип]
      --version    Показать номер версии                           [булевый тип]
  -f, --filePath   Путь до excel файла               [строковой тип] [необходимо]
  -o, --outputDir  Куда положить сгенерированные json файлы      [строковой тип]
```

Для удобства можно добавить скрипт в package.json. И вызывать в терминале с помощью `npm run translate`:

```json
{
  "scripts": {
    "translate": "excel-vue-i18n -f=./translations.xlsx -o=src/locales"
  }
}
```

### Так же можно использовать как отдельную функцию:

```javascript
import excelVueI18n from "@nurbek0298/excel-vue-i18n";

excelVueI18n({ filePath: "./translations.xlsx", outputDir: "src/locales" });
```

### Пример сгенерированного json файла для русского языка:

```json
{
  "auth": {
    "title": "Подтвердите свой контактный номер",
    "subtitle": "Введите ваш номер телефона, на который будет оправлен sms - код"
  },
  "upload": {
    "limit_message": "{fileName} не должен быть больше {limit} мб",
    "remove_question": "Вы действительно хотите удалить документ?"
  }
}
```
