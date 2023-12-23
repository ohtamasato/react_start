FROM node:20.9.0-alpine3.18
WORKDIR /usr/src/app

# 古いnpmが入っているようなのでバージョンアップ
RUN npm install -g npm@10.2.4
