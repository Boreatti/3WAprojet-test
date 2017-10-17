<?php include('script/init.php'); 
include('toolsMenus/functionsMenus.php'); 
//Recuperer la liste des chapitres par partie
$listeChp = getAllChp(); 
$listeChpPartie1 = getChpPartie1(); 
$listeChpPartie2 = getChpPartie2(); 
$listeChpPartie3 = getChpPartie3(); 
$listeChpPartie4 = getChpPartie4(); 
$listeChpPartie5 = getChpPartie5(); 

?>


<!DOCTYPE HTML />  
<html>
<head>
	<meta charset="utf-8" />
	<title>Plan du site</title>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="scritp/jquery-2.1.4.min.js"></script>

</head>

<body>

	<h1>Plan du site</h1>
	<h2>♥ Visuel à venir ♥</h2>

	<nav>
		<ul>
			<li><a href="index.php">Revoir la scène d'introduction</a></li>
			<li><a href="menu/menu.php">Vue principale : menu de séléction des différentes parties</a></li>
			<li><a href="partie1/partie1.php">Partie 1 :</a>  
				<?php foreach($listeChpPartie1 as $key => $chapitre):?> 
				<ul>
					<li><a href="toolsChp/chapitre.php?id=<?= $chapitre['ID'] ?>"><?= $chapitre['titre'] ?></a></li>
				</ul>
				<?php endforeach ?>
			</li>
			<li><a href="partie2/partie2.php">Partie 2 :</a>  
				<?php foreach($listeChpPartie2 as $key => $chapitre):?> 
				<ul>
					<li><a href="toolsChp/chapitre.php?id=<?= $chapitre['ID'] ?>"><?= $chapitre['titre'] ?></a></li>
				</ul>
				<?php endforeach ?>
			</li>
			<li><a href="partie3/partie3.php">Partie 3 :</a>  
				<?php foreach($listeChpPartie3 as $key => $chapitre):?> 
				<ul>
					<li><a href="toolsChp/chapitre.php?id=<?= $chapitre['ID'] ?>"><?= $chapitre['titre'] ?></a></li>
				</ul>
				<?php endforeach ?>
			</li>
			<li><a href="partie4/partie4.php">Partie 4 :</a>  
				<?php foreach($listeChpPartie4 as $key => $chapitre):?> 
				<ul>
					<li><a href="toolsChp/chapitre.php?id=<?= $chapitre['ID'] ?>"><?= $chapitre['titre'] ?></a></li>
				</ul>
				<?php endforeach ?>
			</li>
			<li><a href="partie5/partie5.php">Partie 5 :</a>  
				<?php foreach($listeChpPartie5 as $key => $chapitre):?> 
				<ul>
					<li><a href="toolsChp/chapitre.php?id=<?= $chapitre['ID'] ?>"><?= $chapitre['titre'] ?></a></li>
				</ul>
				<?php endforeach ?>
			</li>
		</ul>
	</nav>
		


	<a href="menu/menu.php">Retour au menu principal</a>
</body>

</html>