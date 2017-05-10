#include "iostream"
#include "string"
#include "node.h"
#include "nan"

using namespace std;
using namespace Nan;
using namespace v8;



namespace data2graphics
{

    using v8::Exception;
    using v8::Context;
    using v8::Function;
    using v8::FunctionCallbackInfo;
    using v8::FunctionTemplate;
    using v8::Isolate;
    using v8::Local;
    using v8::Number;
    using v8::Array;
    using v8::Object;
    using v8::String;
    using v8::Value;

    struct Antibiotics
    {
        Local<Array> arr1;
        Local<Array> arr2;
        Local<Array> arr3;
        Local<Array> arr4;
        Local<Array> arr5;
        Local<Array> arr6;
        Local<Array> arr7;
        Local<Array> arr8;
        Local<Array> arr9;
        Local<Array> arr10;
        Local<Array> arr11;
        Local<Array> arr12;
        Local<Array> arr13;
        Local<Array> arr14;
        Local<Array> arr15;
    };



    void Parse(const FunctionCallbackInfo<Value> &args)
    {
        Isolate *isolate = args.GetIsolate();
        Local<Object> obj = Object::New(isolate);

        obj->Set(String::NewFromUtf8(isolate, "top"), args[0]->ToString());
        obj->Set(String::NewFromUtf8(isolate, "bottom"), args[0]->ToString());
        obj->Set(String::NewFromUtf8(isolate, "gap"), args[0]->ToString());



        cout << args.Length();

        args.GetReturnValue().Set(obj);
    }


    NAN_METHOD(PassObject)
    {
        if ( info.Length() > 0 )
        {
            Local<Object> input = info[0]->ToObject();

            // Make property names to access the input object
            Local<String> left_prop = Nan::New<String>("left").ToLocalChecked();

            // create the return object
            Local<Object> retval = Nan::New<Object>();

            // pull x and y out of the input.  We'll get NaN if these weren't set,
            // or if x / y aren't able to be converted to numbers.
            double x = Nan::Get(input, x_prop).ToLocalChecked()->NumberValue();
            double y = Nan::Get(input, y_prop).ToLocalChecked()->NumberValue();

            // set the properties on the return object
            Nan::Set(retval, sum_prop, Nan::New<Number>(x + y));
            Nan::Set(retval, product_prop, Nan::New<Number>(x * y));

            info.GetReturnValue().Set(retval);
        }
    }

    NAN_METHOD(antibioticsParse)
    {
        if ( info.Length() > 0 )
        {
            Local<Object> input = info[0]->ToObject();

            // Make property names to access the input object
            Local<String> left_prop = Nan::New<String>("left").ToLocalChecked();

            // create the return object
            Local<Object> retval = Nan::New<Object>();

            // pull x and y out of the input.  We'll get NaN if these weren't set,
            // or if x / y aren't able to be converted to numbers.
            double x = Nan::Get(input, x_prop).ToLocalChecked()->NumberValue();
            double y = Nan::Get(input, y_prop).ToLocalChecked()->NumberValue();

            // set the properties on the return object
            Nan::Set(retval, sum_prop, Nan::New<Number>(x + y));
            Nan::Set(retval, product_prop, Nan::New<Number>(x * y));

            info.GetReturnValue().Set(retval);
        }
    }

    NAN_METHOD(linkParse)
    {
        if ( info.Length() > 0 )
        {
            Local<Object> input = info[0]->ToObject();

            // Make property names to access the input object
            Local<String> left_prop = Nan::New<String>("left").ToLocalChecked();
            Local<String> nodes_prop = Nan::New<String>("nodes").ToLocalChecked();
            Local<String> links_prop = Nan::New<String>("links").ToLocalChecked();

            // create the return object
            Local<Object> retval = Nan::New<Object>();

            // pull x and y out of the input.  We'll get NaN if these weren't set,
            // or if x / y aren't able to be converted to numbers.
            double x = Nan::Get(input, x_prop).ToLocalChecked()->NumberValue();
            double y = Nan::Get(input, y_prop).ToLocalChecked()->NumberValue();

            // set the properties on the return object
            Nan::Set(retval, nodes_prop, Nan::New<Number>(x + y));
            Nan::Set(retval, links_prop, Nan::New<Number>(x + y));

            Nan::Set(retval, sum_prop, Nan::New<Number>(x + y));
            Nan::Set(retval, product_prop, Nan::New<Number>(x * y));

            info.GetReturnValue().Set(retval);
        }
    }



    // void init(Local<Object> exports)
    // {
    //     NODE_SET_METHOD(exports, "parse", Parse);
    // }

    NAN_MODULE_INIT(Init)
    {

        Nan::Set(target, New<String>("pass_object").ToLocalChecked(),
                 GetFunction(New<FunctionTemplate>(PassObject)).ToLocalChecked());

        Nan::Set(target, New<String>("linkParse").ToLocalChecked(),
                 GetFunction(New<FunctionTemplate>(linkParse)).ToLocalChecked());

        Nan::Set(target, New<String>("antibioticsParse").ToLocalChecked(),
                 GetFunction(New<FunctionTemplate>(antibioticsParse)).ToLocalChecked());

        Nan::Set(target, New<String>("pass_array").ToLocalChecked(),
                 GetFunction(New<FunctionTemplate>(IncrementArray)).ToLocalChecked());

        Nan::Set(target, New<String>("add_array").ToLocalChecked(),
                 GetFunction(New<FunctionTemplate>(AddArray)).ToLocalChecked());
    }



    NODE_MODULE(parser, init);

}
