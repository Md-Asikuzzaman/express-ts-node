# Use the official Node.js image.
FROM node:18

# Set the working directory in the container.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available).
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the TypeScript code.
RUN npm run build

# Expose the port on which the app will run.
EXPOSE 8080

# Start the application.
CMD ["node", "dist/app.js"]
