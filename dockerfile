# Use an official Node.js runtime as a parent image
FROM node:14

# Create a directory for your application in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code into a subdirectory
COPY index.js ./
COPY design1 ./design1
COPY posts.json ./

# Expose the port your Node.js application listens on
EXPOSE 3000

# Define the default executable for the container
CMD [ "node", "index.js" ]
