FROM node:latest

# Set arguments accessible during the build
ARG MONGO_URI
ARG BASE_PATH

# Set working directory of the container
WORKDIR /app

# Copy package.json to working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining files
COPY . .

# Build website
RUN npm run build

# Run
CMD ["npm", "start"]
