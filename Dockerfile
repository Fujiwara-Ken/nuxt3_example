FROM node:16-alpine3.14
WORKDIR /root/
COPY . .
RUN yarn install && yarn build
EXPOSE 3000
CMD ["yarn","dev"]