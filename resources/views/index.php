<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Warriors of Light</title>
    <link rel="shortcut icon" href="../../public/images/light.png"/>

    <!-- Bootstrap Core CSS -->
    <link href="../../public/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../../public/css/scrolling-nav.css" rel="stylesheet">
    <link href="../../public/css/glavni.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

    <![endif]-->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

   <!-- <script src="../../public/js/visualization_handiling.js"></script>

   -->

    <script type="text/javascript" src="../../public/js/grid.js"></script>
    <script type="text/javascript" src="../../public/js/version.js"></script>
    <script type="text/javascript" src="../../public/js/detector.js"></script>
    <script type="text/javascript" src="../../public/js/formatinf.js"></script>
    <script type="text/javascript" src="../../public/js/errorlevel.js"></script>
    <script type="text/javascript" src="../../public/js/bitmat.js"></script>
    <script type="text/javascript" src="../../public/js/datablock.js"></script>
    <script type="text/javascript" src="../../public/js/bmparser.js"></script>
    <script type="text/javascript" src="../../public/js/datamask.js"></script>
    <script type="text/javascript" src="../../public/js/rsdecoder.js"></script>
    <script type="text/javascript" src="../../public/js/gf256poly.js"></script>
    <script type="text/javascript" src="../../public/js/gf256.js"></script>
    <script type="text/javascript" src="../../public/js/decoder.js"></script>
    <script type="text/javascript" src="../../public/js/qrcode.js"></script>
    <script type="text/javascript" src="../../public/js/findpat.js"></script>
    <script type="text/javascript" src="../../public/js/alignpat.js"></script>
    <script type="text/javascript" src="../../public/js/databr.js"></script>

    <script type="text/javascript">

    </script>
</head>

<!-- The #page-top ID is part of the scrolling feature - the data-spy and data-target are part of the built-in Bootstrap scrollspy function -->

<body > <!-- id="page-top" data-spy="scroll" data-target=".navbar-fixed-top"> -->

    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">

        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand page-scroll main-page" href="#intro">Welcome warrior</a>
                <a class="navbar-brand logging-page" id="login_link" href="#">Login</a>
                <a class="navbar-brand logging-page" id="singup_link" href="#">Sign Up</a>
                <a class="navbar-brand" id="singout_link" href="/WarriorsOfLight/public/Logout" style="display:none;">Sign Out</a>
                <a class="navbar-brand page-scroll main-page" href="#about">Menu</a>
                <span class="main-page" id="logged-user"></span>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li class="hidden">
                        <a class="page-scroll" href="#page-top"></a>
                    </li>
                    <!--<li>

                   </li>
                  <li>
                       <a class="page-scroll" href="#about">Login</a>
                   </li>
                   <li>
                       <a class="page-scroll" href="#about">Sign Up</a>
                   </li>-->
                    <!-- <li>
                         <a class="page-scroll" href="#services">Note</a>
                     </li>
                     <li>
                         <a class="page-scroll" href="#contact">Scan</a>
                     </li>  -->
                 </ul>
             </div>
             <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
<section id="order" class="order-section main-page" style="display:none;">
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div id="menu-table-order">
            </div>
        </div>
        <div class="col-md-4"></div>
    </div>
</section>

    <!-- Intro Section -->
    <section id="intro" class="intro-section main-page">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1>Welcome warrior</h1>
                    <p>Ovde ce ici neki uvod (to kako kafic promovise green pricu itd..) </p>
                    <p>Ovde ce da pise koliko je potrosnja struje </p>
                    <p>Ovde ce ici koliki je popust </p>
                    <a class="btn btn-default page-scroll" href="#about">Proceed to menu.</a>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section main-page">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1>Menu</h1>
                    <p>Ovde ce ici meni za narucivanje. </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <div id="menu-table">
                    </div>
                </div>
                <div class="col-md-4"></div>
            </div>
                <a class="btn btn-default page-scroll" href="#services">Leave the note.</a>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section main-page">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1>Note</h1>
                    <p>Ovde ce ici tekst area gde moze da se napise napomena. </p>
                    <textarea id="note" rows="10" cols="80">
                    At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
                    </textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <a class="btn btn-default page-scroll" href="#contact">Scan code on table.</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section main-page">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1>Scan</h1>
                    <p>Ovde cemo roknuti kameru za skeniranje, posle cega automatski se salje porudzbina ili cemo da stavimo dugme.</p>
                </div>
            </div>


            <div class="row">
                <div class="col-lg-4">
                </div>
                <div class="col-lg-4">
                    <video autoplay class="videoDiv"></video>
                    <canvas id="qr-canvas" width="300" height="300"></canvas>

                    <!-- <button onclick="snapshot()">Capture</button><br> -->
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <a class="btn btn-default" id="confirm_order_button" href="#">Confirm order</a>
                </div>
            </div>
        </div>
    </section>

    <section class="login-section logging-page">
        <div class="container">
            <div class="row">
                <div class="col-lg-5"></div>
                <div class="col-lg-2">
                        <div class="login-elements">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input id="login-username" type="text" class="form-control" name="username" value="" placeholder="username or email">
                        </div>

                        <div class="login-elements">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                            <input id="login-password" type="password" class="form-control" name="password" placeholder="password">
                        </div>
                        <div class="row">
                            <div class="checkbox">
                                <label>
                                    <input id="login-remember" type="checkbox" name="remember" value="1"> Remember me
                                </label>
                            </div>
                        </div>
                        <div class="row"></div>
                        <a class="btn btn-default" id="login_button" href="#">Login</a>
                    </form>
                </div>
            </div>
        </div>
    </section>

<section class="signup-section logging-page">
    <div class="container">
        <div class="row">
            <div class="col-lg-5"></div>
            <div class="col-lg-2">
                    <div class="login-elements">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                        <input id="register-username" type="text" class="form-control" name="username" value="" placeholder="username or email">
                    </div>

                    <div class="login-elements">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                        <input id="register-password" type="password" class="form-control" name="password" placeholder="password">
                    </div>
                    <div class="login-elements">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                        <input id="register-confirm-password" type="password" class="form-control" name="confirm_password" placeholder="confirm password">
                    </div>
                    <div class="row">
                        <div class="checkbox">
                            <label>
                                <input id="login-remember" type="checkbox" name="remember" value="1"> Remember me
                            </label>
                        </div>
                    </div>
                    <div class="row"></div>
                    <a class="btn btn-default" id="register_button" href="#">Register</a>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <div class="row">
            <a href="#menu"></a>
            <a href="#logout"></a>
        </div>
    </div>
</section>



    <!-- jQuery -->
    <script src="../../public/js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../../public/js/bootstrap.min.js"></script>

    <!-- Scrolling Nav JavaScript -->
    <script src="../../public/js/jquery.easing.min.js"></script>
    <script src="../../public/js/scrolling-nav.js"></script>
    <script src="../../public/js/visualization_handiling.js"></script>
    <script src="../../public/js/wol_java_script.js"></script>



</body>

</html>
