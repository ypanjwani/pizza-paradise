# Step 1: Use the official Node.js image to build the project
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if you use Yarn)
COPY package*.json ./

# Clean npm cache and node_modules to avoid stale dependencies
RUN npm cache clean --force && rm -rf node_modules package-lock.json

# Install dependencies with legacy peer deps support
RUN npm install --legacy-peer-deps

# Copy the rest of the project files
COPY . .

# Build the project for production
RUN npm run build

# Step 2: Serve the build using a static server (e.g., serve, nginx)
FROM nginx:alpine AS production

# Copy the build files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run nginx to serve the build
CMD ["nginx", "-g", "daemon off;"]
