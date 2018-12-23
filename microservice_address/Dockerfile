from node:8
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
expose 8002
CMD ["npm", "start"]
