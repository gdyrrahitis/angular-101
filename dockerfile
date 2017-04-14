# Insatll node
FROM node:7.9.0

# Create app directory
RUN mkdir -p /usr/src/angular101
WORKDIR /usr/src/angular101

# Install app dependencies
COPY package.json /usr/src/angular101
RUN npm install

# Bundle application inside docker image
COPY . /usr/src/angular101

# Run application on 8000 port
EXPOSE 8000

# Run node commands
CMD ["npm", "run", "start-container"]
