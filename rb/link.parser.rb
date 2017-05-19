#!/usr/bin/env ruby
# coding:utf-8
require "json"
require "pp"

# rawJson=File.open("../mock-data/data.csv").read
rawLink=File.open("../mock-data/link.raw.json").read
input=JSON.parse(rawLink)["left"]


baseLink=File.open("../default-config/link.config.json").read
baseJson=JSON.parse(baseLink)
nodes=baseJson["nodes"]

input.each.with_index { |e, i| nodes[i]["color"]=e["color"]}


colorsA=[]
linkValues={
  '#00ab84'=>5,
  '#e4be6f'=>5,
  '#cb8d88'=>9
}



output=Hash.new("default")

arrN=[]
arrL=[]

input.map.with_index { |elem,index|

  linksFinded=baseJson["links"].select { |e|
    e["source"]===index
  }

  linksFinded.each.with_index { |e,i|
    if colorsA.include?(elem)
      colorsA<< elem["color"]
    end

    e["color"]=elem["color"]

    # for consistency, here no to_sym
    e["strokewidth"]=linkValues[elem["color"]]

    for i in 0...linksFinded.length
      arrL<<linksFinded[i]
    end
  }
}

output[:nodes]=arrN
output[:links]=arrL

p output.to_json
