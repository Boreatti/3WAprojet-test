<?php include('../toolsMenus/menuParties.php'); ?>
<!DOCTYPE HTML />  
<html>
<head>
	<meta charset="utf-8" />
	<title>Menu partie 4</title>

	<link type="text/css" rel="stylesheet" href="../toolsMenus/menuParties.css" />
	<link type="text/css" rel="stylesheet" href="partie4.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="jquery-2.1.4.min.js"></script>


</head>

<body>

<div id="oLoading"><div><!-- <p>Vous voyagez hors de la matière ...</p> --><img src="../menu/img/loading5.gif" alt="Vous voyagez hors de la matière..." /></div></div>
<audio id="audioPlayer" src="partie4-atriumCarceri-theDarkMother.mp3" controls loop autoplay></audio>
<img id="controlSon" src="../menu/img/iconSonActive.png" onclick="play('audioPlayer', this)">
</br></br>

<div class="menuChapitres">
  <div class="containChapitres">
	<h1>Les Glorieuses - Partie 4</h1>
	<p class="aPropos">A propos du lieu</p> 
	<p class="desc"><span style="font-weight:bold;">Le portail</span> 
	<br>Vous êtes sur la plate-forme de voyage. C'est par ici que vous êtes entré, et c'est par ici que vous repartirez. Ce portail est l'unique lien entre Eyjar i Eldinn et les autres civilisations. Tous les jours y transitent marchandises et citoyens.</p>

	 <nav class="navChapitres">
		<ul>
		<?php foreach($listeChpPartie4 as $key => $chapitre):?> 
			<li><a href='../toolsChp/chapitre.php?id=<?= $chapitre['ID'] ?>'><img src="<?= $chapitre['image'] ?>"></img> </br> <h2><?= $chapitre['titre'] ?></h2></a></li>
		<?php endforeach ?>
		</ul>
	</nav>
	
	

<?php include('../toolsMenus/boutons.phtml');?>


    <script src="scriptPartie4.js"></script>
    <script src="../functions.js"></script>
</body>

</html>