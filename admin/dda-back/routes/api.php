<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Admin\ProductCartController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('/allcategory', [CategoryController::class, 'AllCategory']);
Route::get('/allproduct', [ProductListController::class, 'AllProduct']);
Route::get('/addtocart', [ProductCartController::class, 'addToCart']);
Route::get('/productlistbycategory/{category}', [ProductListController::class, 'ProductListByCategory']);
Route::get('/search/{key}', [ProductListController::class, 'ProductListBySearch']);

