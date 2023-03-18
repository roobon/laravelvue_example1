<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function CheckUser(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $result = Auth::attempt($credentials);
        if ($result == true) {
            return response()->json(['msg' => "success"]);
        } else {
            return response()->json(['msg' => "failed"]);
        }
    }

    public function LogOutUser()
    {
        Auth::logout();
    }
}
