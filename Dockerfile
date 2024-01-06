# Use a Node.js base image
FROM node:20-alpine as build

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy pnpm-lock.yaml and package.json
COPY pnpm-lock.yaml package.json ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of your app's source code
COPY . .

# Build the app
RUN pnpm run build

# Use a Nginx base image
FROM nginx:stable-alpine as runtime

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]