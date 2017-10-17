<?php 

function connexionBDD(){
    // appel à la variable $config
    global $config;
    $dsn = 'mysql:dbname='.$config['dbname'].';host='.$config['dbhost'].'; charset=utf8';
    $db = new PDO($dsn, $config['dbuser'], $config['dbpassword'] );
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    return $db;
}

