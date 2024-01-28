# Use the official Node.js image as the base image
FROM node:16-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application files
COPY . .

ENV REACT_APP_BACKEND_URL=https://arcorocr.com/upload

# Build the React app
RUN npm run build

# Expose the port that your app will run on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
