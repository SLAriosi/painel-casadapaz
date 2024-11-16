<?php
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\PersonalAccessTokenResult;

Route::post('login', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required|min:6',
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Credenciais inválidas'], 401);
    }

    // Criação do token com Sanctum
    $token = $user->createToken('YourAppName')->plainTextToken;

    return response()->json(['token' => $token]);
});

