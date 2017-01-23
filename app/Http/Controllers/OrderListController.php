<?php
/**
 * Created by PhpStorm.
 * User: sukab
 * Date: 1/19/2017
 * Time: 9:55 PM
 */

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Order_List;
use App\Models\Users;
use Illuminate\Http\Request;

class OrderListController extends Controller
{
    public function confirm(Request $request)
    {
        if(empty($_SESSION['user_id'])){
            return response()->json(['status'=>false,'message'=>'user not loged']);
        }
        $menu_table_content = json_decode($request->input('json_string'));
        $current_user = Users::query()->where('user_id','=',$_SESSION['user_id'])->first();
        $order_list = new Order_List();
        $order_list->order_list_asked_bill = false;
        $order_list->order_list_is_settled = false;
        $order_list->order_list_note = $request->input('note');
        $order_list->user_id =$current_user['user_id'] ;
        $cost =  $this->calculate_cost($menu_table_content);
        $order_list->order_list_cost = $cost-($cost*$request->input('popust')/100.0);
        $order_list->order_list_table_id = $request->input('table_id');
        //$order_list->order_list_cost = 0.0;
        //$this->calculate_cost($menu_table_content);
       if($order_list->save() && $this->insert_into_order($menu_table_content,$order_list['id'])) {
           return response()->json(['status'=>true,'message'=>'order saved','data'=>$order_list['id']]);
       }else{
           return response()->json(['status'=>false,'message'=>'Error while saving order.Plase call staf','data'=>array()]);
       }


    }
    public function AskBill(Request $request){
        /*var_dump($request);
        die;*/
        $order_list = Order_List::query()->where('order_list_id',$request->input('order_list_id'));
        $order_list->update(['order_list_asked_bill' => true]);
    }
    public function getAll(Request $request) {
        $this->validate($request, [
            'orderId'=> 'required'
        ]);

        if(empty($_SESSION['user_id'])){
            return response()->json(['status'=>false,'message'=>'user not loged']);
        }
        $data = DB::select('SELECT product_name, product_amount FROM `order` LEFT JOIN `menu` ON `order`.product_id=`menu`.product_id WHERE order_list_id = ' . $request->input('orderId') . ';');
        $orderInfo = Order_List::query()->where('order_list_id','=',$request->input('orderId'))->first();
        if(!empty($data) && !empty($orderInfo)){
            return response()->json(['status'=>true,'message'=>'order results','data'=> array('orderList'=>$data,'orderinfo'=>$orderInfo)]);
        }
        else
        {

            return response()->json(['status'=>false,'message'=>'no valid data','data'=>array()]);
        }
    }

    private function calculate_cost($menu_table_content)
    {
        $cost = 0;
        foreach($menu_table_content as $table_product)
        {
            if(((int)$table_product->product_quantity) != 0)
            {
                $cost += ((float) $table_product->product_cost) * ((float)$table_product->product_quantity);
            }
        }

        return $cost;
    }

    private function  insert_into_order($menu_table_content,$orderId)
    {
        $i=0;
        foreach($menu_table_content as $table_product)
        {
            if(((int)$table_product->product_quantity) != 0)
            {

                $order = new Order();
                $order->order_id = ++$i;
                $order->order_list_id = $orderId;
                $order->product_id =  $table_product->product_id;
                $order->product_amount = $table_product->product_quantity;
               if(!$order->save()){
                   return false;
               }

            }
        }
        return true;
    }

    function pr($data)
    {
        echo "<pre>";
        print_r($data); // or var_dump($data);
        echo "</pre>";
    }

}