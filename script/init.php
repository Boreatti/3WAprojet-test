<?php 
session_start();
include('functions.php');
include('config.php'); 


try{
    $db = connexionBDD();
	// chargement des models
	// $oChapitre = new chapitre();
	// $oAnnexe = new annexe();
} 
catch(PDOException $e){
    // include('views/header.php');
    echo '<h1>Erreur</h1>';
    echo '<p> Erreur de connexion à la bdd: '.$e->getMessage().'</p>';
    // include('views/footer.php');
    die();
}




