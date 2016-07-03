<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <title>Création Web</title>
    <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="styles/bootstrap.css">
    <link rel="stylesheet" href="styles/font-awesome.css">
    <link rel="stylesheet" href="styles/hamburgers.css">
    <link rel="stylesheet" href="styles/jquery.fullpage.css">
    <link rel="stylesheet" href="styles/style.css">
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
    <?php include('header.inc.php'); ?>
        <footer>
            <div class="scroll">
                <p>mi-molette
                    <br>vers le bas</p>
                <img src="images/mouse.png" alt="">
            </div>
        </footer>
        <main class="full">
            <div id="fullpage">
                <div class="section__projects section__1 section" id="section1">
                    <div class="container">
                        <div class="row">
                            <img class="logo_home img-responsive" src="images/logo.png" alt="logo_home">
                        </div>
                    </div>
                </div>
                <div class="section__projects section__2 section" id="section2">
                    <div class="infos_project" id="infos_2">
                        <div class="container">
                            <div class="row">
                                <div class="infos__">
                                    <p class="title_infos">peugeot</p>
                                    <p class="sub_infos">Digital</p>
                                    <a href="#" class="btn_project"><img class="arrow_btn" src="images/arrow_btn.png" alt="">voir le cas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section__projects section__3 section" id="section3">
                    <div class="infos_project" id="infos_3">
                        <div class="container">
                            <div class="row">
                                <div class="infos__">
                                    <p class="title_infos">psa peugeot citroën</p>
                                    <p class="sub_infos">mobile</p>
                                    <a href="#" class="btn_project"><img class="arrow_btn" src="images/arrow_btn.png" alt="">voir le cas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section__projects section__4 section" id="section4">
                    <div class="infos_project" id="infos_4">
                        <div class="container">
                            <div class="row">
                                <div class="infos__">
                                    <p class="title_infos">leroy merlin</p>
                                    <p class="sub_infos">Digital</p>
                                    <a href="leroy_merlin.php" class="btn_project"><img class="arrow_btn" src="images/arrow_btn.png" alt="">voir le cas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section__projects section__5 section" id="section5">
                    <div class="infos_project" id="infos_5">
                        <div class="container">
                            <div class="row">
                                <div class="infos__">
                                    <p class="title_infos">sacem</p>
                                    <p class="sub_infos">digital & mobile</p>
                                    <a href="#" class="btn_project"><img class="arrow_btn" src="images/arrow_btn.png" alt="">voir le cas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section__projects section__6 section" id="section6">
                    <div class="infos_project" id="infos_6">
                        <div class="container">
                            <div class="row">
                                <div class="infos__">
                                    <p class="title_infos">peugeot</p>
                                    <p class="sub_infos">Digital</p>
                                    <a href="#" class="btn_project"><img class="arrow_btn" src="images/arrow_btn.png" alt="">voir le cas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </main>

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://code.jquery.com/jquery-3.0.0.min.js" integrity="sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0=" crossorigin="anonymous"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="scripts/bootstrap.min.js"></script>
        <script src="scripts/jquery.fullpage.min.js"></script>
        <script src="scripts/main.js"></script>
        <script src="scripts/main_2.js"></script>
        <script src="scripts/navigation.js"></script>
</body>

</html>
