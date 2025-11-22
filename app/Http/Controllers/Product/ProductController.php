<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Product/Product');
    }
}
