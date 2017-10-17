-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Mar 17 Octobre 2017 à 09:29
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `eldinn3wa`
--

-- --------------------------------------------------------

--
-- Structure de la table `chapitre`
--

CREATE TABLE `chapitre` (
  `ID` int(11) NOT NULL,
  `partie` int(1) NOT NULL,
  `titre` varchar(50) NOT NULL,
  `image` varchar(500) NOT NULL,
  `html` text CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `css` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `chapitre`
--

INSERT INTO `chapitre` (`ID`, `partie`, `titre`, `image`, `html`, `css`) VALUES
(1, 2, 'Chapitre 1 - Le sommet du gouffre', '../toolsMenus/testCH3.jpg', '<p>ggggg</p>', 'body{\n  background-color: #C3CFDB;\n\n}\nh1{\nfont-size:70px;\ncolor: #808000;}'),
(7, 1, 'Chapitre 3 - Sur le cable', '../toolsMenus/roughDK.jpg', '', 'body{   \r\nbackground-color:#FFEFD5;   \r\n} \r\n\r\nimg{\r\nmargin-left: 40%;}\r\n\r\nh1{ \r\nfont-size:40px; \r\ncolor: #FA8072;\r\nfont-family: \'Khand\', sans-serif;\r\ntext-align:center;\r\n}'),
(2, 3, 'Chapitre 1 - Sérendipité ', '../toolsMenus/testCH1.png', '<p>La sérendipité est le fait de réaliser une découverte scientifique ou une invention technique de façon inattendue à la suite d\'un concours de circonstances fortuit et très souvent dans le cadre d\'une recherche concernant un autre sujet. La sérendipité est le fait de « trouver autre chose que ce que l\'on cherchait », comme Christophe Colomb cherchant la route de l\'Ouest vers les Indes, et découvrant un continent inconnu des Européens. Selon la définition de Sylvie Catellin, c\'est « l\'art de prêter attention à ce qui surprend et d\'en imaginer une interprétation pertinente »</p>', 'body{   \nbackground-color: #FFE4E1;   \n} \n\nimg{\nmargin-left: 40%;}\n\nh1{ \nfont-size:30px; \ncolor: #FFA500;\nfont-family: \'Bahiana\', sans-serif;\ntext-align:center;\n}\n\np{\nmargin :0 auto;\nwidth:50%;\n}'),
(3, 5, 'Chapitre 1 - La forêt', '../toolsMenus/testCH3.jpg', '', ''),
(4, 1, 'Chapitre 1 - Sur le fil', '../toolsMenus/testCH1.png', '', 'body{   \r\nbackground-color:#FFEBCD;   \r\n} \r\n\r\nimg{\r\nmargin-left: 40%;}\r\n\r\nh1{ \r\nfont-size:40px; \r\ncolor:#DEB887;\r\nfont-family: \'Khand\', sans-serif;\r\ntext-align:center;\r\n}'),
(5, 4, 'Chapitre 1 - Valse', '../toolsMenus/avatar7.jpg', '', ''),
(6, 1, 'Chapitre 2 - Sur la corde', '../toolsMenus/dominoFace.png', '', 'body{   \r\nbackground-color:#F0F8FF;   \r\n} \r\n\r\nimg{\r\nmargin-left: 40%;}\r\n\r\nh1{ \r\nfont-size:40px; \r\ncolor:#5F9EA0;\r\nfont-family: \'Khand\', sans-serif;\r\ntext-align:center;\r\n}'),
(8, 2, 'Chapitre 2 - Le fond du gouffre', '../toolsMenus/testCH4.jpg', '', ''),
(9, 4, 'Chapitre 2 - Tango', '../toolsMenus/dominoFace.png', '', ''),
(10, 4, 'Chapitre 3 - Lambada', '../toolsMenus/roughDK.jpg', '', ''),
(11, 4, 'Chapitre 4 - Macumba', '../toolsMenus/testCH1.png', '', ''),
(12, 4, 'Chapitre 5 - Java', '../toolsMenus/testCH2.png', '', ''),
(13, 4, 'Chapitre 6 - Charleston', '../toolsMenus/testCH4.jpg', '', ''),
(14, 4, 'Chapitre 7 - Country', '../toolsMenus/testCH3.jpg', '', '');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `chapitre`
--
ALTER TABLE `chapitre`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `chapitre`
--
ALTER TABLE `chapitre`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
