<?php

use App\Http\Controllers\Auth\v1\AuthenticatedSessionController;
use App\Http\Controllers\Auth\v1\GoogleSessionController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::post('/auth/login', [AuthenticatedSessionController::class, 'store'])->name('api.auth.login');
        Route::get('/auth/google', [GoogleSessionController::class, 'index'])->name('api.auth.google');
        Route::get('/auth/google/callback', [GoogleSessionController::class, 'create'])->name('api.auth.google.callback');
    });

    Route::middleware('auth')->group(function () {
        Route::post('/auth/logout', [AuthenticatedSessionController::class, 'destroy'])->name('api.auth.logout');
    });
});
