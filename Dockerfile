# Node.js base image kullan
FROM node:alpine

# Uygulama dizinini oluştur
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulamayı çalıştır
EXPOSE 3000
CMD ["node", "index.js"]