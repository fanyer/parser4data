#!/usr/bin/env ruby
# coding:utf-8


# While this creates a new default object each time
h = Hash.new { |hash, key| hash[key] = "antibiotics: #{key}" }
h["top"]
h["top"]
h["bottom"]
h["gap"]
