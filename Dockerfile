FROM node:latest


WORKDIR /usr/src/app

COPY /api/package*.json ./

RUN npm install \ 
&& npm install -g typescript \
&& npm i --save-dev @types/node 

COPY api/ .

EXPOSE 3000

CMD ["npm", "run", "dev"]
