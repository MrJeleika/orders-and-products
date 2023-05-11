# Base image
FROM node:lts-alpine3.14

# Set working directory
WORKDIR /app

ENV API_HOST https://dzencodeweb.herokuapp.com/api
# Install app dependencies
COPY package*.json ./
RUN npm ci

# Copy app files
COPY . .

# Build the app
RUN npm run build

# Start the app
CMD ["npm", "start"]

# Expose port
EXPOSE 3000
