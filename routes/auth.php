<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::middleware('guest')->group(function () {
        Route::get('/auth/login',   [AuthenticatedSessionController::class, 'create'])->name('api.auth.login');
        Route::post('/auth/login',  [AuthenticatedSessionController::class, 'store']);
    });

    Route::middleware('auth')->group(function () {
        Route::post('/auth/logout', [AuthenticatedSessionController::class, 'destroy'])->name('api.auth.logout');
    });
});
