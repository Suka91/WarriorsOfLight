<?php
/**
 * Created by PhpStorm.
 * User: sukab
 * Date: 1/19/2017
 * Time: 9:55 PM
 */

namespace App\Http\Controllers;


use App\Models\Order;
use App\Models\Order_List;
use Illuminate\Http\Request;

class OrderListController extends Controller
{
    public function confirm(Request $request)
    {
        $json_order_list = json_decode($request->input('json_string'));
        $order_list = new Order_List();
        $order_list->user_id = 1; //TODO
        $order_list->order_list_is_settled = false;
        $order_list->order_list_cost = 5.0;//calculate_cost($json_order_list);
        $order_list->order_list_note = $request->input('note');
        $order_list->order_list_asked_bill = false;
        $order_list->save();

        return response()->json(['data' => $order_list->get()]);
    }

    private function calculate_cost()
    {
    }

}