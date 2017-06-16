#!/usr/bin/env ruby
# coding:utf-8

# author:fanyer
# mail:iofanyer@gmail.com

# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at

#     http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
$:.unshift File.dirname(__FILE__)

require "optparse"
require "pp"
require "link.parser"
# require "antibiotics.parser"

class Parser
  include Link
  include Antibiotics
end


p Parser.new.linkParse

# v=ARGV[0]
# v1=ARGV[1]
# v2=ARGV[2]

# p v
# p v1
# p v2

# p Parser::linkParse

# Parser.antibioticsParse
