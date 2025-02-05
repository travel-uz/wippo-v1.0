# Use Node.js official image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /projects

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Install `serve` to serve static files
RUN npm install -g serve

# Expose the port your React app runs on
EXPOSE 3000

# Start the React app using `serve`
CMD ["serve", "-s", "build", "-l", "3000"]
