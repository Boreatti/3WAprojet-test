<?php include('../toolsMenus/menuParties.php'); ?>
<!DOCTYPE HTML />  
<html>
<head>
	<meta charset="utf-8" />
	<title>Menu partie 1</title>

	<link type="text/css" rel="stylesheet" href="../toolsMenus/menuParties.css" />
	<link type="text/css" rel="stylesheet" href="partie1.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="jquery-2.1.4.min.js"></script>


</head>

<body>

<div id="oLoading"><div><!-- <p>Vous voyagez hors de la matière ...</p> --><img src="../menu/img/loading5.gif" alt="Vous voyagez hors de la matière..." /></div></div>
<audio id="audioPlayer" src="partie1-shrine-disintegrationOfAnEgo.mp3" ontrols loop="-1" autoplay></audio>
<img id="controlSon" src="../menu/img/iconSonActive.png" onclick="play('audioPlayer', this)">
</br></br>


<div class="menuChapitres">
	<div class="containChapitres">
		
		<h1>Le Seuil - Partie 1</h1>
		<p class="aPropos">A propos du lieu </p> 
		<p class="desc"><span style="font-weight:bold;">Les cultures d'algues</span>
		</br>Vous vous trouvez dans l'un des lieux importants d'Eyjar i Eldinn. Ces villages permettent à la vie d'exister. En effet, toute la flore est originaire du croisement entre cette algue et un champignon. Les citoyens qui vivent ici sont chargés de les cultiver et de récolter les spores. </p>

		 <nav class="navChapitres">
		<ul>
		<?php foreach($listeChpPartie1 as $key => $chapitre):?> 
			<li><a href='../toolsChp/chapitre.php?id=<?= $chapitre['ID'] ?>'><img src="<?= $chapitre['image'] ?>"></img> </br> <h2><?= $chapitre['titre'] ?></h2></a></li>
		<?php endforeach ?>
		</ul>
	</nav>
	
		


<?php include('../toolsMenus/boutons.phtml');?>

    <script src="scriptPartie1.js"></script>
    <script src="../functions.js"></script>
</body>

</html>