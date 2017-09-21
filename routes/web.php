<?php

Route::get('/', function () {
    return view('index');
});

Route::resource('todos', TodosController::class);
