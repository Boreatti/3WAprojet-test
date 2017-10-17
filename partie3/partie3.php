<?php include('../toolsMenus/menuParties.php'); ?>
<!DOCTYPE HTML />  
<html>
<head>
	<meta charset="utf-8" />
	<title>Menu partie 3</title>
	
	<link type="text/css" rel="stylesheet" href="../toolsMenus/menuParties.css" />
	<link type="text/css" rel="stylesheet" href="partie3.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="jquery-2.1.4.min.js"></script>


</head>

<body>

<div id="oLoading"><div><!-- <p>Vous voyagez hors de la matière ...</p> --><img src="../menu/img/loading5.gif" alt="Vous voyagez hors de la matière..." /></div></div>
<audio id="audioPlayer" src="partie3-ugasanie-thePhenomenon.mp3" controls loop autoplay></audio>
<img id="controlSon" src="../menu/img/iconSonActive.png" onclick="play('audioPlayer', this)">
</br></br>


<div class="menuChapitres">
  <div class="containChapitres">
	<h1>La Palingénésie - Partie 3</h1>

	<p class="aPropos">A propos du lieu</p>
	<p class="desc"><span style="font-weight:bold;">Les cristaux</span> 
	<br>Venir au pied de ces cristaux est une sorte de pèlerinage pour les eldienniens. Et pour le visiteur venu d'un autre monde, cela impressionne toujours. Bien qu'utilisés pour les voyages intersystème par portail, leur nature profonde reste encore mystérieuse. Ils font partie des éléments les plus méconnus de l'archipel, même pour ceux dont le lien au monde est le plus fort. Ils possèdent une grande puissance. </p>


	<nav class="navChapitres">
		<ul>
		<?php foreach($listeChpPartie3 as $key => $chapitre):?> 
			<li><a href='../toolsChp/chapitre.php?id=<?= $chapitre['ID'] ?>'><img src="<?= $chapitre['image'] ?>"></img> </br> <h2><?= $chapitre['titre'] ?></h2></a></li>
		<?php endforeach ?>
		</ul>
	</nav>
	
	
<?php include('../toolsMenus/boutons.phtml');?>

    <script src="scriptPartie3.js"></script>
    <script src="../functions.js"></script>
</body>

</html>