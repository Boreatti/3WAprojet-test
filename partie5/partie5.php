<?php include('../toolsMenus/menuParties.php'); ?>

<!DOCTYPE HTML />  
<html>
<head>
	<meta charset="utf-8" />
	<title>Menu partie 5</title>

	<link type="text/css" rel="stylesheet" href="../toolsMenus/menuParties.css" />
	<link type="text/css" rel="stylesheet" href="partie5.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="jquery-2.1.4.min.js"></script>


</head>

<body>

<div id="oLoading"><div><!-- <p>Vous voyagez hors de la matière ...</p> --><img src="../menu/img/loading5.gif" alt="Vous voyagez hors de la matière..." /></div></div>
<audio id="audioPlayer" src="partie5-apocryphosKammarheitAtriumCarceri-onesAtopTheUnknown.mp3" controls loop autoplay></audio>
<img id="controlSon" src="../menu/img/iconSonActive.png" onclick="play('audioPlayer', this)">
</br></br>


<div class="menuChapitres">
  <div class="containChapitres">
	<h1>La Dichotomie - Partie 5</h1>
	<p class="aPropos">A propos du lieu</p> 
	<p class="desc"><span style="font-weight:bold;">Les failles</span> 
	<br>L'archipel vu du ciel. On aperçoit en bas i Brunvatni, l'une des cinq grandes villes d'Eyjar i Eldinn. Mais n'allons pas plus haut. A partir d'une certaine altitude, il est risqué d’envoyer quoi que ce soit. Les immenses failles qui déchirent le ciel donnent directement sur la dimension énergétique du système, là où les flux s'entrecroisent pour former des passerelles entre les mondes. Peu de chance de survie... </p>


	<nav class="navChapitres">
		<ul>
		<?php foreach($listeChpPartie5 as $key => $chapitre):?> 
			<li><a href='../toolsChp/chapitre.php?id=<?= $chapitre['ID'] ?>'><img src="<?= $chapitre['image'] ?>"></img> </br> <h2><?= $chapitre['titre'] ?></h2></a></li>
		<?php endforeach ?>
		</ul>
	</nav>
	


<?php include('../toolsMenus/boutons.phtml');?>


    <script src="scriptPartie5.js"></script>
    <script src="../functions.js"></script>
</body>

</html>