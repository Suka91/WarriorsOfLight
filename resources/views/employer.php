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
            <a class="navbar-brand logging-page" id="login_admin" href="#">Login</a>
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

<section class="image_link intro-section">
</section>

<section id="about" class="main-page">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1>Orders</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4" id="order_list"></div>
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
                <a class="btn btn-default" id="login_button_admin" href="#">Login</a>
                </form>
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
<script src="../../public/js/admin.js"></script>

</body>

</html>
