FROM node:18
WORKDIR /app
COPY backend/package*.json ./backend/
RUN cd backend && npm install
COPY backend ./backend
WORKDIR /app/backend
CMD ["npm", "start"]
