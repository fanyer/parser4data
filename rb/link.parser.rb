#!/usr/bin/env ruby
# coding:utf-8
require "rubygem"
require "json"
require "pp"

rawJson=File.open('../mocks-data/link-graph.raw.json').read
rawConfigObj=JSON.parse(rawJson)

baseJson=File.open('../default-config/link-graph.config.json').read
baseConfigObj=JSON.parse(baseJson)


# While this creates a new default object each time
h = Hash.new { |hash, key| hash[key] = "linkGraph: #{key}" }
h["nodes"]
h["links"]

output=Hash.new("default linkGraph")
