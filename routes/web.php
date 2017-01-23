<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use App\Models\Menu;

$app->get('/', function () use ($app) {
    return $app->version();
});
$app->get('/test', function () {
    return 'Hello World';
});

$app->post('/Register',     'AuthController@register');
$app->post('/Login',         'AuthController@login');
$app->post('/ConfirmOrder', 'OrderListController@confirm');

$app->get('/Logout',         'AuthController@logout');
$app->get('/OrderList', 'OrderListController@getAll');
$app->get('/MenuList', 'MenuController@getAll');

+$app->get('/OrderList', 'AdminController@getAll');
+$app->get('/LoadInterval', 'AdminController@interval');
