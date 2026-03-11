# Typescript-School-2026 (ЧАСТЬ 1)

- [Typescript-School-2026 (ЧАСТЬ 1)](#typescript-school-2026-часть-1)
  - [Презентация](#презентация)
  - [Структура репозитория](#структура-репозитория)
  - [Старт](#старт)
    - [Установка](#установка)
    - [Инициализация тайпскрипта в проекте](#инициализация-тайпскрипта-в-проекте)
    - [Typescript playground](#typescript-playground)
  - [tsconfig.json](#tsconfigjson)
    - [Видео на русском c разбором каждого поля конфигурации](#видео-на-русском-c-разбором-каждого-поля-конфигурации)
    - [Статьи](#статьи)
  - [Рекомендуемые расширения VSCode](#рекомендуемые-расширения-vscode)
    - [Шрифт автора курса](#шрифт-автора-курса)
  - [Домашнее задание](#домашнее-задание)
  - [Контакты](#контакты)
  - [Полезные материалы](#полезные-материалы)
    - [Документация](#документация)
    - [Шпаргалки](#шпаргалки)

## Презентация

[Открыть презентацию](https://docs.google.com/presentation/d/1vK9Od5NG7H9J8HAQzb8WVbDvu87_x6dT/)

## Структура репозитория

| Папка | Описание |
| ----- | -------- |
| `types/js-primitive/` | Примитивные типы JS: number, string, bigint, boolean, symbol, void |
| `types/ts-primitive/` | Типы TypeScript: enum, undefined, null, never, any, unknown |
| `types/` | Объекты, массивы, кортежи |
| `interfaces/` | Интерфейсы, optional, readonly, объединение |
| `functions/` | Типизация функций |
| `alias/` | Type alias |
| `literals/` | Литеральные типы и template literal types |

## Старт

Если на проекте есть package.json, то нужно выполнить следующие команды для вашего пакетного менеджера

### Установка

```bash
npm install typescript -g
```

или

```bash
yarn install typescript -g
```

Для того, чтобы добавить typescript в проект нужны следующие команды

```bash
npm i -D typescript@5.7.2 --save-dev
```

или

```bash
yarn add typescript@5.7.2 --save-dev
```

### Инициализация тайпскрипта в проекте

```bash
npx tsc
```

### Typescript playground

Онлайн-редактор для экспериментов с TypeScript прямо в браузере — не нужно ничего устанавливать. Удобно для быстрой проверки типов, изучения ошибок компилятора и обмена примерами кода по ссылке.

<https://www.typescriptlang.org/play/>

## tsconfig.json

Файл конфигурации TypeScript — определяет параметры компиляции и какие файлы включать в проект. Создать можно командой:

```bash
npx tsc --init
```

- [Официальная документация по tsconfig](https://www.typescriptlang.org/tsconfig/)
- [Справочник всех опций компилятора](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

### Видео на русском c разбором каждого поля конфигурации

<https://youtu.be/7DtZtHSJ_S4?t=8814>

### Статьи

[TypeScript: Раскладываем tsconfig по полочкам. Часть 1](https://habr.com/ru/articles/542234/)

[TypeScript: Раскладываем tsconfig по полочкам. Часть 2 — Всё про строгость](https://habr.com/ru/articles/557738/)

## Рекомендуемые расширения VSCode

При открытии проекта VSCode предложит установить рекомендуемые расширения автоматически (из `.vscode/extensions.json`).

| Расширение | Описание |
| ---------- | -------- |
| [Quokka.js](https://marketplace.visualstudio.com/items?itemName=wallabyjs.quokka-vscode) | Мгновенное выполнение кода прямо в редакторе — результат виден рядом с каждой строкой |
| [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) | Превращает нечитаемые ошибки TS в понятный, форматированный вид |
| [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) | Показывает ошибки и предупреждения прямо в строке кода, а не только в панели проблем |
| [GitHub Theme](https://marketplace.visualstudio.com/items?itemName=github.github-vscode-theme) | Тема оформления в стиле GitHub (опционально — тема автора курса) |
| [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) | Расширенная работа с git: blame, история файлов, авторство строк |
| [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | Автоматическое форматирование кода при сохранении |

### Шрифт автора курса

В презентации и редакторе используется шрифт **Monaspace Neon** с включёнными лигатурами — бесплатный моноширинный шрифт от GitHub.

- [Скачать Monaspace](https://monaspace.githubnext.com/)

Настройки VSCode для этого шрифта:

```json
{
  "editor.fontFamily": "Monaspace neon",
  "editor.fontSize": 14,
  "editor.fontWeight": "300",
  "editor.fontLigatures": "'calt', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06', 'ss07', 'ss08', 'ss09', 'liga'"
}
```

## Домашнее задание

1. Добавить в проект TypeScript
2. Переписать домашние задания JS1 и JS2 от Медведева Никиты с JavaScript на TypeScript

Проект должен запускаться без ошибок компиляции.

## Контакты

Вопросы по курсу можно задать в Mattermost: **@i.gorskiy**

## Полезные материалы

### Документация

- [TypeScript Handbook (официальный)](https://www.typescriptlang.org/docs/handbook/)

### Глоссарий

- [Глоссарий TypeScript — Часть 1](glossary.md)

### Шпаргалки

- [TypeScript Cheatsheets](https://www.typescriptlang.org/cheatsheets/)
