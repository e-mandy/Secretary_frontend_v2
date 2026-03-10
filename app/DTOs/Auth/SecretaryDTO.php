<?php

namespace App\DTOs\Auth;

readonly class RegisterSecretaryDTO{
    public function __construct(
        public string $lastname,
        public string $firstname,
        public string $email,
        public string $password
    ){}

    public static function fromRequest(){
        //
    }
}

readonly class LoginSecretaryDTO{
    public function __construct(
        public string $email,
        public string $password
    ){}

    public static function fromRequest(){
        
    }
}