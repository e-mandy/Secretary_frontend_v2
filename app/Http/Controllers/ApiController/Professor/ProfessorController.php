<?php

namespace App\Http\Controllers\ApiController\Professor;

use App\DTOs\Professor\ProfessorStoreDTO;
use App\DTOs\Professor\ProfessorUpdateDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\Professor\StoreProfessorRequest;
use App\Http\Requests\Professor\UpdateProfessorRequest;
use App\Models\Professor;
use App\Services\ProfessorService;

class ProfessorController extends Controller
{
    public function __construct(
        public ProfessorService $service
    )
    {}

    public function index(){
        $response = $this->service->index();

        return response()->json([
            "type" => "Get Professors",
            "data" => $response
        ], 200);
    }

    public function create(StoreProfessorRequest $request){
        $data = ProfessorStoreDTO::fromRequest($request);

        $response = $this->service->store($data);

        return response()->json([
            "type" => "Professor Storage",
            "data" => [
                "professor" => $response
            ]
        ], 201);
    }

    public function update(Professor $professor, UpdateProfessorRequest $request){
        $data = ProfessorUpdateDTO::fromRequest($request);

        $response = $this->service->update($professor, $data);

        return response()->json([
            "type" => "Professor Update",
            "data" => [
                "professor" => $response
            ]
        ], 200);
    }
}
