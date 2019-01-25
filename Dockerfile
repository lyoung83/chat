FROM quay.io/skygeario/py-skygear:canary-onbuild
COPY . /app
WORKDIR /app
EXPOSE 5555
ENTRYPOINT [ "py-skygear", "chat" ]