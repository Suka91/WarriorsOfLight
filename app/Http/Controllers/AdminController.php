<?php
/**
 * Created by PhpStorm.
 * User: AleksandraK
 * Date: 1/22/2017
 * Time: 9:38 PM
 */

namespace app\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Users;
use App\Models\Order;
use App\Models\Order_List;
use App\Models\Menu;
use DB;


class AdminController extends Controller
{
    public function getAll()
    {
        $order = DB::table('order_list')
            ->join('order', 'order_list.order_list_id', '=', 'order.order_list_id')
            ->join('menu', 'order.product_id', '=', 'menu.product_id')
            ->select('menu.product_name','order.order_id',
                'order.product_amount', 'order_list.order_list_note',
                'order_list.order_list_asked_bill', 'order_list.order_list_is_settled')
            ->get();
        return response()->json(['data'=>$order]);
    }

    public function interval()
    {
        setInterval($this->getAll(), 1000);
    }
}
