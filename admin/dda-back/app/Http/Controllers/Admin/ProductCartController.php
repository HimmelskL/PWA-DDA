<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductCart;
use App\Models\ProductList;

class ProductCartController extends Controller
{
    public function addToCart(Request $request){
        $productDetails = ProductList::where('code', $code)->get();
        $product = $productDetails[0]['product'];
        $quantity = $request -> input('quantity');
        $unitary_price = $productDetails[0]['unitary_price'];
        $iva = $productDetails[0]['iva'];
        
        $discount = $productDetails[0]['discount'];

            if($discount==0){
                $amount = $quantity*$unitary_price+$iva;
            }else{
                $amount = ($quantity*$unitary_price+$iva)-$discount;
            }

            $result = ProductCart::insert([

                'code' => $productDetails[0]['product_code'],
                'product' => $productDetails[0]['product'],
                'quantity' => $quantity,
                'unitary_price' => $productDetails[0]['unitary_price'],
                'iva' => $productDetails[0]['iva'],
                'discount' => $productDetails[0]['discount'],
                'amount' => $amount,
    
            ]);
    
            return $result;
    }
}
