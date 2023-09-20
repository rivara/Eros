<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
class Vehicle extends Model
{
    protected $fillable = ['name', 'price', 'autonomy', 'duration','type','use','url'];
    use HasFactory;

    public function requirements(): BelongsToMany
    {
        return $this->belongsToMany(Requirements::class);
    }
}
