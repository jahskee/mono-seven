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
#RUN npm install yarn --global
#RUN yarn

# add app
COPY . ./

EXPOSE 3000

# start app, using exec form, much safer
CMD ["npm", "run", "start-prod"]
