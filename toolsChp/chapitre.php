<?php 
//chargement du modele
include('../script/init.php');
include('../toolsMenus/functionsMenus.php');

$listeChp = getAllChp(); 


if(isset($_GET['id']) && is_numeric($_GET['id'])){
	$chp = getChp($_GET['id']);
	$chpTitre =  getChpTitre($_GET['id']);
	$chpImage =  getChpImg($_GET['id']);
	$chpHtml =  getChpHtml($_GET['id']);
	$chpCss =  getChpCss($_GET['id']);

}
else{
	echo "<br/> Pas de chapitre...";
}




include('chapitre.phtml');


