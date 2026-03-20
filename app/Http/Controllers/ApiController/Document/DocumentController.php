<?php

namespace App\Http\Controllers\ApiController\Document;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContractRequest;
use App\Http\Resources\DocumentResource;
use App\Models\Document;
use DocumentService;

class DocumentController extends Controller
{
    public function __construct(
        public DocumentService $service
    )
    {}

    public function store(StoreContractRequest $request){
        $response = $this->service->store($request);

        $data = new DocumentResource($response);

        return response()->json([
            "message" => "Contrat crée avec succès",
            "data" => $data
        ], 201);
    }

    public function destroy(Document $document){
        $response = $this->service->delete($document);

        return response()->json([
            "message" => $response ? "Contrat supprimé avec succès" : "Erreur de suppression du contrat",
        ], $response ? 200 : 500);
    }
}
