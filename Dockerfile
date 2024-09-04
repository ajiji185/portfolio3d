# Use the official Node.js image as the base image
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies with legacy peer deps option
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a smaller Node.js image for the final image
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Copy only the build artifacts and dependencies from the build stage
COPY --from=build /app /app

# Expose the port that the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
