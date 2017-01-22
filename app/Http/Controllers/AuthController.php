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
        $existUser = $user->query()->where('user_name',$request->input('user_name'))->get();
        if(sizeof($existUser) > 0 ) {
            return response()->json(['status'=>false,'message'=>'user exist']);
        }
        $user->user_name =  $request->input('user_name');
        $user->user_password =  $request->input('user_password');
        $user->user_employed =  false;
        $user->save();
        if($user->save()){
            return response()->json(['status'=>true,'message'=>'user saved']);
        }else{
            return response()->json(['status'=>false,'message'=>'error user not saved']);
        }
    }
    public function login(Request $request)
    {
        $this->validate($request, [
            'user_name'=> 'required',
            'user_password' => 'required',
        ]);
        $user = Users::query()->where('user_name',$request->input('user_name'))->where('user_password',$request->input('user_password'));
        $userIddb = $user->first();
        if($userIddb['user_id'] != null ) {
            $user_token = rand();

            $_SESSION['user_id'] = $userIddb['user_id'];
            date_default_timezone_set('Europe/Sarajevo');
            $user_timestamp = date("o-m-d H:i:s");

            //->update(['delayed' => 1]);
            $user->update(['user_token' => $user_token]);
            $user->update(['user_timestamp' => $user_timestamp]);
            return response()->json(['status'=>true,'message'=>'user loged','data'=>$userIddb['user_name']]);
        }
        else {
            return response()->json(['status'=>false,'message'=>'user not loged']);
        }
    }
    public function logout(Request $request)
    {
        session_unset();
        header("Location: http://example.com/myOtherPage.php");
        die();
    }
}