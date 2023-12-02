<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductStoreRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $products = Product::all();

        return response()->json([
            'products' => $products
        ], 200);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductStoreRequest $request)
    {
        try {

            $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();


            Product::create([
                'name' => $request->name,
                'image' => $imageName,
                'description' => $request->description,
            ]);


            Storage::disk('public')->put($imageName, file_get_contents($request->image));


            return response()->json([
                'message' => 'Product successfully created'
            ], 200);
        } catch (\Exception $e) {

            return response()->json([
                'message' => 'Something went wrong'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        
        $product = Product::find($id);
        if(!$product) {
            return response()->json([
                'message' => 'Product not found'
            ], 404);
        }

        return response()->json([
            'product' => $product
        ], 200);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductStoreRequest $request, $id)
    {
        try {
            $product = Product::find($id);
            if(!$product) {
                return response()->json([
                    'message' => 'Product not found'
                ], 404);
            }

            // echo "request : $request->name";
            // echo "description : $request->description";
            $product->name = $request->name;
            $product->description = $request->description;

            if($request->image) {
                $storage = Storage::disk('public');


                if($storage->exists($product->image))
                    $storage->delete($product->image);

                $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
                $product->image = $imageName;


                $storage->put($imageName, file_get_contents($request->image));

            }

            $product->save();


            return response()->json([
                'message' => 'Product successfully updated'
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Something went wrong'
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        
        $product = Product::find($id);

        if(!$product){
            return response()->json([
                'message' => 'Product not found.'
            ], 404);
        }

        $storage = Storage::disk('public');

        if($storage->exists($product->image))
            $storage->delete($product->image);



        $product->delete();


        return response()->json([
            'message' => 'Product deleted'
        ], 200);

    }
}