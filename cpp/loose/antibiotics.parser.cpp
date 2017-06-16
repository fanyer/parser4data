/*   author:fanyer
 *   mail: iofanyer@gmail.com
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

#include "iostream"
#include "string"
#include "node.h"
#include "nan"
#include <typeinfo>

using namespace std;
using namespace Nan;
using namespace v8;


int ParseJsonFromString()
int ParseJsonFromFile(const char *filename)



NAN_METHOD(Parse)
{
    if ( info.Length() > 0 )
    {
        Local<Object> input = info[0]->ToObject();

        Local<String> left_prop = Nan::New<String>("left").ToLocalChecked();

        Local<String> name_prop = Nan::New<String>("name").ToLocalChecked();
        Local<String> color_prop = Nan::New<String>("color").ToLocalChecked();

        Local<String> nodes_prop = Nan::New<String>("nodes").ToLocalChecked();
        Local<String> links_prop = Nan::New<String>("links").ToLocalChecked();

        // double a = Nan::Get(input, a_prop).ToLocalChecked()->NumberValue();
        Local<Array> b = Local<Array>::Cast(Nan::Get(input, left_prop).ToLocalChecked());

        cout << b->Length() << endl;


        Local<Object> retval = Nan::New<Object>();


        // for (unsigned int i = 0; i < b->Length(); i++ )
        // {
        //     if (Nan::Has(b, i).FromJust())
        //     {
        //         // get data from a particular index
        //         double value = Nan::Get(b, i).ToLocalChecked()->NumberValue();

        //         // set a particular index - note the array parameter
        //         // is mutable
        //         Nan::Set(b, i, Nan::New<Number>(value + a));
        //     }
        // }


        // set the properties on the return object
        // Nan::Set(retval, nodes_prop, Nan::New<Number>( + y));
        // Nan::Set(retval, links_prop, Nan::New<Number>(x * y));

        info.GetReturnValue().Set(retval);

    }
}

NAN_MODULE_INIT(Init)
{

    Nan::Set(target, New<String>("antibioticsParse").ToLocalChecked(),
             GetFunction(New<FunctionTemplate>(Parse)).ToLocalChecked());
}

NODE_MODULE(parser, Init)




int ParseJsonFromString()
{
    const char *str = "{\
    \"top\": [\
    {\
    \"x\": -7,\
    \"y\": 5,\
    \"color\": \"seagreen\",\
    \"tag\": {\
    \"cn\": \"头孢菌素类\",\
    \"en\": \"Cephalosporins\"\
    },\
    \"data\": {\
    \"rank\": 0.2807,\
    \"median\": 117.4241,\
    \"absolute\": 59.31948\
    },\
    \"direction\": \"left\"\
    },\
    {\
    \"x\": -6,\
    \"y\": 7,\
    \"color\": \"seagreen\",\
    \"tag\": {\
    \"cn\": \"青霉素\",\
    \"en\": \"Penicillins\"\
    },\
    \"data\": {\
    \"rank\": 0.2506,\
    \"median\": 128.4729,\
    \"absolute\": 61.05134\
    },\
    \"direction\": \"left\"\
    },\
    {\
    \"x\": -5,\
    \"y\": 8,\
    \"color\": \"seagreen\",\
    \"tag\": {\
    \"cn\": \"林可酰胺类\",\
    \"en\": \"Lincosamides\"\
    },\
    \"data\": {\
    \"rank\": 0.606,\
    \"median\": 383.8253,\
    \"absolute\": 441.8302\
    },\
    \"direction\": \"right\"\
    },\
    {\
    \"x\": -4,\
    \"y\": 6,\
    \"color\": \"seagreen\",\
    \"tag\": {\
    \"cn\": \"利福霉素类\",\
    \"en\": \"Rifampins\"\
    },\
    \"data\": {\
    \"rank\": 0.0012,\
    \"median\": 0,\
    \"absolute\": 0\
    },\
    \"direction\": \"right\"\
    },\
    {\
    \"x\": -3,\
    \"y\": 2,\
    \"color\": \"seagreen\",\
    \"tag\": {\
    \"cn\": \"多粘霉素类\",\
    \"en\": \"Polymyxins\"\
    },\
    \"data\": {\
    \"rank\": 0.4012,\
    \"median\": 4.5278814,\
    \"absolute\": 2.895497\
    },\
    \"direction\": \"right\"\
    },\
    {\
    \"x\": 1,\
    \"y\": 1,\
    \"color\": \"orange\",\
    \"tag\": {\
    \"cn\": \"碳青霉烯类\",\
    \"en\": \"Carbapenems\"\
    },\
    \"data\": {\
    \"rank\": 0.0012,\
    \"median\": 0,\
    \"absolute\": 0\
    },\
    \"direction\": \"left\"\
    },\
    {\
    \"x\": 2,\
    \"y\": 4,\
    \"color\": \"orange\",\
    \"tag\": {\
    \"cn\": \"糖肽类\",\
    \"en\": \"Glycopeptides\"\
    },\
    \"data\": {\
    \"rank\": 0.5807,\
    \"median\": 1.63446,\
    \"absolute\": 2.246455\
    },\
    \"direction\": \"right\"\
    },\
    {\
    \"x\": 5,\
    \"y\": 3,\
    \"color\": \"salmon\",\
    \"tag\": {\
    \"cn\": \"氨基糖苷类\",\
    \"en\": \"Aminoglycosides\"\
    },\
    \"data\": {\
    \"rank\": 0.7506,\
    \"median\": 41.34121,\
    \"absolute\": 71.78424\
    },\
    \"direction\": \"left\"\
    }\
    ],\
    \"bottom\": [\
    {\
    \"x\": -2,\
    \"y\": 1,\
    \"color\": \"seagreen\",\
    \"tag\": {\
    \"cn\": \"β-内酰胺\",\
    \"en\": \"β-lactam\"\
    },\
    \"data\": {\
    \"rank\": 0.7265,\
    \"median\": 0.08101419,\
    \"absolute\": 0.6476569\
    },\
    \"direction\": \"left\"\
    },\
    {\
    \"x\": -1,\
    \"y\": 3,\
    \"color\": \"seagreen\",\
    \"tag\": {\
    \"cn\": \"四环类素\",\
    \"en\": \"Tetracyclines\"\
    },\
    \"data\": {\
    \"rank\": 0.5771,\
    \"median\": 362.3124,\
    \"absolute\": 385.8537\
    },\
    \"direction\": \"left\"\
    },\
    {\
    \"x\": 0,\
    \"y\": 4,\
    \"color\": \"orange\",\
    \"tag\": {\
    \"cn\": \"磷霉素类\",\
    \"en\": \"Fosfomycins\"\
    },\
    \"data\": {\
    \"rank\": 0.659,\
    \"median\": 0.3104377,\
    \"absolute\": 1.35659\
    },\
    \"direction\": \"right\"\
    },\
    {\
    \"x\": 3,\
    \"y\": 5,\
    \"color\": \"orange\",\
    \"tag\": {\
    \"cn\": \"氯霉素类\",\
    \"en\": \"Chloramphenicois\"\
    },\
    \"data\": {\
    \"rank\": 0.0012,\
    \"median\": 362.3124,\
    \"absolute\": 385.8537\
    },\
    \"direction\": \"left\"\
    },\
    {\
    \"x\": 4,\
    \"y\": 6,\
    \"color\": \"orange\",\
    \"tag\": {\
    \"cn\": \"大环内酯类\",\
    \"en\": \"Macrolides\"\
    },\
    \"data\": {\
    \"rank\": 0.4843,\
    \"median\": 354.3231,\
    \"absolute\": 359.5278\
    },\
    \"direction\": \"right\"\
    },\
    {\
    \"x\": 6,\
    \"y\": 7,\
    \"color\": \"salmon\",\
    \"tag\": {\
    \"cn\": \"磺胺类\",\
    \"en\": \"Sulfonamides\"\
    },\
    \"data\": {\
    \"rank\": 0.8795,\
    \"median\": 34.39402,\
    \"absolute\": 116.4283\
    },\
    \"direction\": \"left\"\
    },\
    {\
    \"x\": 7,\
    \"y\": 2,\
    \"color\": \"salmon\",\
    \"tag\": {\
    \"cn\": \"奎诺酮类\",\
    \"en\": \"Quinolones\"\
    },\
    \"data\": {\
    \"rank\": 0.8036,\
    \"median\": 0,\
    \"absolute\": 0.8209219\
    },\
    \"direction\": \"right\"\
    }\
    ],\
    \"gap\": [\
    0,\
    4\
    ]\
    }";


    Json::Reader reader;
    Json::Value root;

    if (reader.parse(str, root))  // reader将Json字符串解析到root，root将包含Json里所有子元素
    {

        // std::string upload_id = root["uploadid"].asString();  // 访问节点，upload_id = "UP000000"
        // int code = root["code"].asInt();    // 访问节点，code = 100
        // std::cout << code << std::endl;

    }
    return 0;
}



int ParseJsonFromFile(const char *filename)
{
    Json::Reader reader;
    Json::Value root;

    std::ifstream is;
    is.open (filename, std::ios::binary );
    if (reader.parse(is, root))
    {
        std::string code;
        if (!root["files"].isNull())  // Access an object value by name, create a null member if it does not exist.
            code = root["uploadid"].asString();

        // Return the member named key if it exist, defaultValue otherwise.
        code = root.get("uploadid", "null").asString();

        int file_size = root["files"].size();

        for(int i = 0; i < file_size; ++i)
        {
            Json::Value val_image = root["files"][i]["images"];
            int image_size = val_image.size();
            for(int j = 0; j < image_size; ++j)
            {
                std::string type = val_image[j]["type"].asString();
                std::string url = val_image[j]["url"].asString();
            }
        }
    }
    is.close();
    return 0;
}