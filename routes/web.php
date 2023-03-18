<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('front');
});

Auth::routes();

Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::post('/checkuser', [AuthController::class, 'CheckUser']);
Route::post('/logout', [AuthController::class, 'LogOutUser']);

Route::get('/{vue_capture?}', function () {
    return view('front');
})->where('vue_capture', '[\/\w\.-]*');
