FROM node:8-alpine
LABEL maintainer="henry.mcconville@gmail.com"

WORKDIR /usr/src/app
ADD src .

CMD ["npm", "start"]

EXPOSE 80