<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductList;
use App\Models\ProductDetails;
use App\Models\Category;
use Image;

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

    public function GetAllProduct(){

        $products = ProductList::latest()->paginate(10);
        return view('backend.product.product_all',compact('products'));

    } // End Method 

    public function AddProduct(){

        $category = Category::orderBy('category_name','ASC')->get();
        return view('backend.product.product_add',compact('category'));

    } // End Method 

    public function StoreProduct(Request $request){

        $product_id = ProductList::insertGetId([
            'code' => $request->code,
            'stock' => $request->stock,
            'product' => $request->product,
            'category' => $request->category,
            'description' => $request->description,
            'unitary_price' => $request->unitary_price,
            'iva' => $request->iva,
            'discount' => $request->discount,
            'amount' => $request->amount,
        ]);

        $notification = array(
            'message' => 'Producto Inserted Successfully',
            'alert-type' => 'success'
        );

        return redirect()->route('all.product')->with($notification);
  
      }// End Mehtod 
 
 
    public function EditProduct($id){
 
     $category = Category::orderBy('category_name','ASC')->get();
     $product = ProductList::findOrFail($id);
     return view('backend.product.product_edit',compact('category','product'));
 
 } // End Method 
 
 public function UpdateProduct(Request $request){
 
    $product_id = $request->id;

    ProductList::findOrFail($product_id)->update([
            'code' => $request->code,
            'stock' => $request->stock,
            'product' => $request->product,
            'category' => $request->category,
            'description' => $request->description,
            'unitary_price' => $request->unitary_price,
            'iva' => $request->iva,
            'discount' => $request->discount,
            'amount' => $request->amount,
        ]);

    $notification = array(
        'message' => 'Product Update With Image Successfully',
        'alert-type' => 'success'
    );

    return redirect()->route('all.product')->with($notification);

 } //End Method 
 
 public function DeleteProduct($id){
 
     ProductList::findOrFail($id)->delete();
 
     $notification = array(
             'message' => 'Product Deleted Successfully',
             'alert-type' => 'success'
         );
 
         return redirect()->back()->with($notification);
 
 
 
     }//End Method


}
