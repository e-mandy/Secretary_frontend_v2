<?php

use App\Http\Controllers\ApiController\Auth\AdminController;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


// ---- Authentication Routes ---- //
Route::post('/admin_login', [AdminController::class, 'login']);