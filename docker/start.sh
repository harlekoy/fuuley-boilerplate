#!/bin/bash
set -e

echo "Running npm install..." \
    && npm install --unsafe-perm \
    && echo "Running the application..." \
    && npm run serve