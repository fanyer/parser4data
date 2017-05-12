#include "iostream"
#include "string"
#include "node.h"
#include "nan"

using namespace std;
using namespace Nan;
using namespace v8;


/**
 * miloyip
 * https://github.com/miloyip/rapidjson
 */

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

NODE_MODULE(my_addon, Init)