#first line delcares the image the build will use;
FROM node:alpine 

# second Line declares the working directory for the build;
WORKDIR /app/client

# Third Line copies all files over to the working directory
COPY . .

# Fourth line installs necessary packages in the docker image
RUN npm install

# Fifth line tells the database what PORT this should be accessible at
EXPOSE 3000

# Sixth line starts the application with the corresponding command in the package.json
CMD ["npm", "start"]