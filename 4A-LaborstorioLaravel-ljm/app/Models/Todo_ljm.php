<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo_ljm extends Model
{
    use HasFactory;

    public function category_ljm()
    {
        // Assuming 'category_ljm_id' is the correct foreign key
        return $this->belongsTo(Category_ljm::class, 'category_id');
    }
}
