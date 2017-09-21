<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Todo;

class TodosController extends Controller {
    public function index() {
        return Todo::all();
    }

    public function show($id) {
        return Todo::find($id);
    }
}
