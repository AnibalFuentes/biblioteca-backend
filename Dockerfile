FROM node:20-alpine

WORKDIR /app

# instalar dependencias
COPY package*.json ./
RUN npm install

# copiar proyecto
COPY . .

# compilar typescript
RUN npm run build

EXPOSE 3000

CMD ["node", "--env-file=.env", "dist/server.js"]