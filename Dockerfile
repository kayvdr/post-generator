FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.20-alpine

ENV NGINX_PROTOCOL http2

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx-config /etc/nginx
