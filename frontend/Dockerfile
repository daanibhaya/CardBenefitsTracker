# Use the official Node.js image for building frontend
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose frontend port (Vite runs on 5173 by default)
EXPOSE 5173

# Start the Vite development server
CMD ["npm", "run", "dev"]
