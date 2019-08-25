FROM python:3.6.8-alpine
RUN apk update && apk add postgresql-dev \
gcc \
libffi-dev \
musl-dev \
openssl-dev \
python3-dev \
alpine-sdk
RUN pip3 install psycopg2 skygear[zmq]
COPY . /app
WORKDIR /app
EXPOSE 5555
CMD [ "py-skygear", "chat" ]