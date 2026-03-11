<?php

namespace App\DTOs\Auth;

readonly class RegisterEmailDTO{
    public function __construct(
        public int $id,
        public string $hash
    ){}
}