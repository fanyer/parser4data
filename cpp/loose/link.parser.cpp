#include "iostream"
#include "string"
#include "node.h"
#include "nan"

using namespace std;
using namespace Nan;
using namespace v8;

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

    Nan::Set(target, New<String>("parse").ToLocalChecked(),
             GetFunction(New<FunctionTemplate>(Parse)).ToLocalChecked());
}

NODE_MODULE(link, Init)




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