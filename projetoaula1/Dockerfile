# Use an official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
