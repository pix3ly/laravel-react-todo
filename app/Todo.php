<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model {
    public $timestamps = false;

    protected $casts = [
        'completed' => 'boolean'
    ];

    protected $fillable = [
        'description', 'completed'
    ];
}
