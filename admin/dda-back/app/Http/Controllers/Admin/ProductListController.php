<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductList;

class ProductListController extends Controller
{

    public function AllProduct(){
        $products = ProductList::all();
        $productDetails = [];

        foreach ($products as $value){
            $item = [
                'code' => $value['code'],
                'stock' => $value['stock'],
                'product' => $value['product'],
                'category' => $value['category'],
                'description' => $value['description'],
                'unitary_price' => $value['unitary_price'],
                'iva' => $value['iva'],
                'discount' => $value['discount'],
                'amount' => $value['amount']
            ];
            array_push($productDetails, $item);
        }

        return $productDetails;
    } 

    public function ProductListByCategory (Request $request){
        $Category = $request->category;
        $productlist = ProductList::where('category', $Category)->get();
        return $productlist;
    } // End Method

    public function ProductBySearch (Request $request){
        $key = $request->key;
        $productlist = ProductList::where('product', 'LIKE', "%{key}%")->orWhere('code', 'LIKE', "%{key}%")->get();
        return $productlist;
    } // End Method

}
