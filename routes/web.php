<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('front');
});

Auth::routes();

Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/{vue_capture?}', function () {
    return view('front');
})->where('vue_capture', '[\/\w\.-]*');
