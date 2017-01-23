<?php
/**
 * Created by PhpStorm.
 * User: sukab
 * Date: 1/17/2017
 * Time: 9:34 PM
 */

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Models\Users;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function getAll(Request $request) {
        $this->validate($request, [
            'user_name'=> 'required'
        ]);

        if(empty($_SESSION['user_id'])){
            return response()->json(['status'=>false,'message'=>'user not loged']);
        }
        $user = Users::query()->where('user_id',$_SESSION['user_id'])->get(['user_timestamp']);

        $user_timestamp = $user[0]->user_timestamp;
        $current_timestamp = date("o-m-d H:i:s");

        $secs = $user_timestamp - $current_timestamp;

        if($secs/60.0 < 30){
            $menu = Menu::all();
            return response()->json(['status'=>true,'message'=>'menu results','data'=>$menu]);
        }
        else
        {

            return response()->json(['status'=>false,'message'=>'no data','data'=>array()]);
        }
    }
}