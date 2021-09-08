FROM node:14.17-alpine3.12 as builder
ARG ENVIRONMENT

COPY package.json package-lock.json ./

RUN npm install --force && mkdir /site && mv ./node_modules ./site

WORKDIR /site

COPY . .

#RUN npm run ${ENVIRONMENT}
RUN npm run main

FROM nginx:1.21.0-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY ./default.conf /etc/nginx/conf.d/

COPY --from=builder /site/dist/project /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g", "daemon off"]
