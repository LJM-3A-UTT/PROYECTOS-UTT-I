<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Todo_ljm;
class Category_ljm extends Model
{
    use HasFactory;

    public function todos_ljm()
    {
        // Assuming 'category_ljm_id' is the correct foreign key
        return $this->hasMany(Todo_ljm::class, 'category_id');
    }
}
