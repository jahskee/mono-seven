# pull official base image
FROM node:15.0.1-alpine

# set working directory
WORKDIR /app

ADD VERSION .
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

EXPOSE 80

# start app, using exec form, much safer
CMD ["npm", "start"]
