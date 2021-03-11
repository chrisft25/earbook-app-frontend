# pull official base image
FROM node:14.16.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
ADD package.json ./
ADD package-lock.json ./
RUN npm install --silent

# add app
ADD . .

# start app
CMD ["npm", "start"]