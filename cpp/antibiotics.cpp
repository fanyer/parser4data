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

using namespace std;
using namespace Nan;
using namespace v8;




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