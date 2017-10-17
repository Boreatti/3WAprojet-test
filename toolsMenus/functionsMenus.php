<?php 

function getAllChp(){
	global $db;

	$allChp = array();
	
    $query = 'SELECT * FROM chapitre ORDER BY `id` DESC';
    $resultat = $db->query($query);
    $allChp = $resultat->fetchAll(); 

    // var_dump($allChp);
    return $allChp;
	
}




function getChpPartie1(){
	global $db;

	$chpPartie1 = array();
	
    $query = 'SELECT * FROM chapitre WHERE partie=1 ORDER BY `id` ASC';
    $resultat = $db->query($query);
    $chpPartie1 = $resultat->fetchAll(); 

    // var_dump($chpPartie2);
    return $chpPartie1;
	
}

function getChpPartie2(){
	global $db;

	$chpPartie2 = array();
	
    $query = 'SELECT * FROM chapitre WHERE partie=2 ORDER BY `id` ASC';
    $resultat = $db->query($query);
    $chpPartie2 = $resultat->fetchAll(); 

    // var_dump($chpPartie2);
    return $chpPartie2;
	
}

function getChpPartie3(){
	global $db;

	$chpPartie3 = array();
	
    $query = 'SELECT * FROM chapitre WHERE partie=3 ORDER BY `id` ASC';
    $resultat = $db->query($query);
    $chpPartie3 = $resultat->fetchAll(); 

    // var_dump($chpPartie2);
    return $chpPartie3;
	
}

function getChpPartie4(){
	global $db;

	$chpPartie4 = array();
	
    $query = 'SELECT * FROM chapitre WHERE partie=4 ORDER BY `id` ASC';
    $resultat = $db->query($query);
    $chpPartie4 = $resultat->fetchAll(); 

    // var_dump($chpPartie2);
    return $chpPartie4;
	
}

function getChpPartie5(){
	global $db;

	$chpPartie5 = array();
	
    $query = 'SELECT * FROM chapitre WHERE partie=5 ORDER BY `id` ASC';
    $resultat = $db->query($query);
    $chpPartie5 = $resultat->fetchAll(); 

    // var_dump($chpPartie2);
    return $chpPartie5;
	
}

function getChp($id){
	global $db;

	$idChp = array();
	
    $query = 'SELECT * FROM chapitre WHERE id='.$db->quote($_GET['id']);
    $resultat = $db->query($query);
    $idChp = $resultat->fetch(); 

    // var_dump($aNews);
    return $idChp;

	echo 'id de la news à chercher en bdd : ' . $id . "<br/>";

}

function getChpTitre($id){
	global $db;

	$titreChp = array();
	
    $query = 'SELECT titre FROM chapitre WHERE id='.$db->quote($_GET['id']);
    $resultat = $db->query($query);
    $titreChp = $resultat->fetch(); 

    // var_dump($aNews);
    return $titreChp;

}
function getChpImg($id){
	global $db;

	$imgChp = array();
	
    $query = 'SELECT image FROM chapitre WHERE id='.$db->quote($_GET['id']);
    $resultat = $db->query($query);
    $imgChp = $resultat->fetch(); 

    // var_dump($aNews);
    return $imgChp;

}
function getChpHtml($id){
	global $db;

	$htmlChp = array();
	
    $query = 'SELECT html FROM chapitre WHERE id='.$db->quote($_GET['id']);
    $resultat = $db->query($query);
    $htmlChp = $resultat->fetch(); 

    // var_dump($aNews);
    return $htmlChp;

}
function getChpCss($id){
	global $db;

	$cssChp = array();
	
    $query = 'SELECT css FROM chapitre WHERE id='.$db->quote($_GET['id']);
    $resultat = $db->query($query);
    $cssChp = $resultat->fetch(); 

    // var_dump($aNews);
    return $cssChp;

}

