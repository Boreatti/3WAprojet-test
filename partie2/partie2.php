<?php include('../toolsMenus/menuParties.php'); ?>
<!DOCTYPE HTML />  
<html>
<head>
	<meta charset="utf-8" />
	<title>Menu partie 2</title>

	<link type="text/css" rel="stylesheet" href="../toolsMenus/menuParties.css" />
	<link type="text/css" rel="stylesheet" href="partie2.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="../jquery-2.1.4.min.js"></script>


</head>

<body>

<div id="oLoading"><div><!-- <p>Vous voyagez hors de la matière ...</p> --><img src="../menu/img/loading5.gif" alt="Vous voyagez hors de la matière..." /></div></div>
<audio id="audioPlayer" src="partie2-keosz-insecure.mp3" controls loop autoplay></audio>
<img id="controlSon" src="../menu/img/iconSonActive.png" onclick="play('audioPlayer', this)">
</br></br>


<div class="menuChapitres">
  <div class="containChapitres">
	<h1>L'Antagonisme - Partie 2</h1>

	<p class="aPropos">A propos du lieu</p>
	<p class="desc"><span style="font-weight:bold;">i Fjollum</span> 
	<br> Ici se terre le cœur administratif d'Eyjar i Eldinn. Appelée humoristiquement "La Forteresse" par les eldinniens, cette ville troglodyte est l'endroit le plus peuplé de l'archipel. Beaucoup de citoyens y vivent et y travaillent. </p>

 <!-- 
 <?php include('../toolsMenus/listeChp.php');?>
	 -->


	 <nav class="navChapitres">
		<ul>
		<?php foreach($listeChpPartie2 as $key => $chapitre):?> 
			<li><a href='../toolsChp/chapitre.php?id=<?= $chapitre['ID'] ?>'><img src="<?= $chapitre['image'] ?>"></img> </br> <h2><?= $chapitre['titre'] ?></h2></a></li>
		<?php endforeach ?>
		</ul>
	</nav>
	
	
<?php include('../toolsMenus/boutons.phtml');?>
    <script src="scriptPartie2.js"></script>
    <script src="../functions.js"></script>
</body>

</html>