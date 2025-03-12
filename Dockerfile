# Используем образ Node.js для сборки фронтенда
FROM node:alpine AS build

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем остальные файлы проекта
COPY . .

# Устанавливаем зависимости
RUN npm install

# Сборка проекта
RUN npm run build

# Устанавливаем serve
RUN npm install -g serve

# Запускаем статичный сервер
RUN serve -s build &

EXPOSE 3000