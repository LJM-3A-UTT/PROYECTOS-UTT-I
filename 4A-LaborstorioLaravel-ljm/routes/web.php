<?php

use App\Http\Controllers\TodosController_ljm;
use App\Http\Controllers\CategoriesController_ljm;
use App\Models\Todo_ljm;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/todos_ljm', [TodosController_ljm::class, 'index_ljm'])->name('todos_ljm');

Route::post('/todos_ljm', [TodosController_ljm::class, 'store_ljm'])->name('todos-store_ljm');


Route::get('/todos_ljm/{id}', [TodosController_ljm::class, 'show_ljm'])->name('todos-edit_ljm');


Route::patch('/todos_ljm/{id}', [TodosController_ljm::class, 'update_ljm'])->name('todos-update_ljm');

Route::delete('/todos_ljm/{id}', [TodosController_ljm::class, 'destroy_ljm'])->name('todos-destroy_ljm');

Route::resource('categories_ljm', CategoriesController_ljm::class);

