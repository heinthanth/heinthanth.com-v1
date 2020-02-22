<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function home()
    {
        return view('pages.home.index')->with([
            'pagetitle' => "Home"
        ]);
    }

    public function skills()
    {
        return view('pages.home.skills')->with([
            'pagetitle' => "Skills"
        ]);
    }
}
