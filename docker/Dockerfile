FROM alpine:latest

ENV SCRIPT_ROOT /usr/bin/local

COPY start.sh $SCRIPT_ROOT/start.sh

RUN apk update \
    && apk add --update nodejs nodejs-npm bash dos2unix \
    && npm install -g vue-cli \
    && dos2unix $SCRIPT_ROOT/start.sh \
    && cp $SCRIPT_ROOT/start.sh $SCRIPT_ROOT/start \
    && chmod u+x $SCRIPT_ROOT/start

CMD ["/usr/bin/local/start"]