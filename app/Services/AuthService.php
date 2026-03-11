<?php

namespace App\Services;

use App\DTOs\Auth\AdminDTO;
use App\DTOs\Auth\LoginSecretaryDTO;
use App\DTOs\Auth\RegisterSecretaryDTO;
use App\Mail\Auth\VerifyUserEmail;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;

class AuthService{

    public function loginAsAdmin(AdminDTO $data){
        // Check if the email exists in the database
        $user = User::where('email', $data->email)->first();
        
        if(!$user) throw new \Exception("Données invalides");

        $isMatch = Hash::check($data->password, $user->password);
        if(!$isMatch) throw new \Exception("Données invalides");

        $token = $user->createToken(
            "Token Connexion User: " . $user->email,
            ["*"]
        );

        return [
            "user" => [
                "email" => $user->email,
                "lastname" => $user->lastname,
                "firstname" => $user->firstname,
                "role" => $user->role
            ],
            "access_token" => $token
        ];
    }

    public function registerAsSecretary(RegisterSecretaryDTO  $data){
        // Check if there is already a user with the same email
        $existingUser = User::where('email', $data->email)->first();

        if($existingUser !== null) throw new \Exception("Utilisateur déjà existant");

        $newUser = User::create([
            "lastname" => $data->lastname,
            "firstname" => $data->firstname,
            "email" => $data->email,
            "password" => Hash::make($data->password),
            "role" => "secretariat"
        ]);

        $emailHash = URL::temporarySignedRoute(
            'verification.verify',
            now()->addMinute(20),
            ['id' => $newUser->id, "hash" => sha1($newUser->email)]
        );

        $url = "http://localhost:8000/secretary/email/verify" . $emailHash;
        
        // Asynchronous send of mail
        Mail::to($newUser)->send(new VerifyUserEmail($newUser, $url));
    }

    public function loginAsSecretary(LoginSecretaryDTO $data){
        // Check if the email exists in the database
        $user = User::where('email', $data->email)->first();

        if(!$user) throw new \Exception("Données invalides");

        $isMatch = Hash::check($data->password, $user->password);
        if(!$isMatch) throw new \Exception("Données invalides");

        $token = $user->createToken("Token Connexion User: " . $user->email);

        return [
            "user" => [
                "email" => $user->email,
                "lastname" => $user->lastname,
                "firstname" => $user->firstname,
                "role" => $user->role
            ],
            "access_token" => $token
        ];
    }
}