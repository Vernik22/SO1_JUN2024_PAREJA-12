FROM node:16-alpine as builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./
RUN npm run build


# EXPOSE 5173

# CMD ["npm", "run", "dev"]

FROM nginx:alpine as final

COPY ./nginx/nginx.conf etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]