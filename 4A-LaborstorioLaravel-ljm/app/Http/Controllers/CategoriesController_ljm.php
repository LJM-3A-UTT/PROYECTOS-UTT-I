<?php

namespace App\Http\Controllers;

use App\Models\Category_ljm;
use Illuminate\Http\Request;

class CategoriesController_ljm extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories_ljm = Category_ljm::all();
        return view('categories_ljm.index_ljm', ['categories_ljm' => $categories_ljm]);
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
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:category_ljms|max:255',
            'color' => 'required|max:7'
        ]);

        $category_ljm = new Category_ljm;
        $category_ljm->name = $request->name;
        $category_ljm->color = $request->color;
        $category_ljm->save();

        return redirect()->route('categories_ljm.index')->with('success', 'Nueva categoria agregada!');
    }

    /**
     * Display the specified resource.
     */
    public function show($category_ljm)
    {
        $category_ljm = Category_ljm::find($category_ljm);
        return view('categories_ljm.show_ljm', ['category_ljm' => $category_ljm]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit($category_ljm)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category_ljm $category_ljm)
{
    $request->validate([
        'name' => 'required|unique:category_ljms|max:255',
        'color' => 'required|max:7',
    ]);

    $category_ljm->update([
        'name' => $request->name,
        'color' => $request->color,
    ]);

    return redirect()->route('categories_ljm.index')->with('success', 'Categoria actualizada');
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($category_ljm)
    {
        $category_ljm = Category_ljm::find($category_ljm);
        $category_ljm->todos_ljm()->each(function ($todo_ljm) {
            $todo_ljm->delete();
        });
        $category_ljm->delete();

        return redirect()->route('categories_ljm.index_ljm')->with('success', 'Categoria eliminada!');
    }
}
