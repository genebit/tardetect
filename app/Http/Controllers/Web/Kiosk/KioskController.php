<?php

namespace App\Http\Controllers\Web\Kiosk;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class KioskController extends Controller
{
    public function index()
    {
        return Inertia::render("Kiosk/Kiosk");
    }
}
