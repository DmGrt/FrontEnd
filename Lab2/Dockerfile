# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add /app/node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

EXPOSE 1234

# start app
CMD ["npm", "start"]

#build docker build -t test-image .

#run winpty docker run -it --rm -v /${PWD}:/app -p 3000:1234 -e CHOKIDAR_USEPOLLING=true test-image