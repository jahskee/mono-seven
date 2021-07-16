#!/bin/bash

awk 'NR==3' package.json > VERSION_TMP && grep -Eo '[0-9]\.[0-9]\.[0-9]+' VERSION_TMP > VERSION && rm VERSION_TMP