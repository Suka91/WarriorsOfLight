<?php
/**
 * Created by PhpStorm.
 * User: sukab
 * Date: 1/17/2017
 * Time: 10:21 PM
 */

namespace app\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Users;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $this->validate($request, [
            'user_name'=> 'required',
            'user_password' => 'required',
        ]);

        $user = new Users;

        $user->user_name =  $request->input('user_name');
        $user->user_password =  $request->input('user_password');
        $user->user_employed =  false;
        $user->save();
        return view('index');
    }
    public function login(Request $request)
    {
        $this->validate($request, [
            'user_name'=> 'required',
            'user_password' => 'required',
        ]);

        $user = Users::query()->where('user_name',$request->input('user_name'))->where('user_password',$request->input('user_password'));

        if(sizeof($user) > 0 ) {
            $user_token = rand();
            date_default_timezone_set('Europe/Sarajevo');
            $user_timestamp = date("o-m-d H:i:s");

            //->update(['delayed' => 1]);
            $user->update(['user_token' => $user_token]);
            $user->update(['user_timestamp' => $user_timestamp]);
            return response()->json(['data'=>$user->get()]);
        }
        else {
            //TODO
            $user = "Suka";
            $user = $user->get();

            return response()->json(['data'=>$user]);
        }
    }
}