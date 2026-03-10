<?php

namespace App\Http\Controllers\ApiController\Auth;

use App\DTOs\Auth\RegisterSecretaryDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterSecretaryRequest;
use App\Services\AuthService;
use Exception;

class SecretaryController extends Controller
{
    public function __construct(
        public AuthService $service
    ){}

    public function register(RegisterSecretaryRequest $request){
        $data = RegisterSecretaryDTO::fromRequest($request);

        try{
            $response = $this->service->registerAsSecretary($data);

            return response()->json([
                "type" => "Sécrétariat Login",
                "message" => "Utilisateur connecté avec succès",
                "data" => $response
            ], 200);
        }catch(Exception $e){
            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }
    }
}
