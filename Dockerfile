# Use official Node.js base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy application source code
COPY . .

# Build the app (compile TypeScript)
RUN npm run build

# Expose default NestJS port
EXPOSE 3000

# Run the app in production mode
CMD ["npm", "run", "start:prod"]
