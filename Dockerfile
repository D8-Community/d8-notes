FROM benweet/stackedit-base

RUN mkdir -p /opt/markedit
WORKDIR /opt/markedit

COPY package*json /opt/markedit/
COPY gulpfile.js /opt/markedit/
RUN npm install --unsafe-perm \
  && npm cache clean --force
COPY . /opt/markedit
ENV NODE_ENV production
RUN npm run build

EXPOSE 8080

CMD [ "node", "." ]
