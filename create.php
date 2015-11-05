<?php 
	$TITLE = "First service";
	$BASEURL = "http://localhost/service/";
?>
<!DOCTYPE html>
<html>
<head>
	<title><?php echo $TITLE; ?></title>
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/fabric.js"></script>
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/jquery.min.js"></script>
	<link href='http://fonts.googleapis.com/css?family=Lobster|Inconsolata|Cuprum|Pacifico|Orbitron|Exo|Chewy|Playball|Tangerine|Audiowide|Niconne|Frijole' rel='stylesheet' type='text/css'>
	
	<link rel="stylesheet" href="<?php echo $BASEURL ?>css/bootstrap.css" type="text/css"/>
	<link rel="stylesheet" href="<?php echo $BASEURL ?>css/styles.css" type="text/css"/>
	<link rel="stylesheet" href="<?php echo $BASEURL ?>css/font.css" type="text/css"/>
	<link href="<?php echo $BASEURL ?>css/metro-icons.css" rel="stylesheet">
	<link href="<?php echo $BASEURL ?>fonts/thirsty_script_regularregular/stylesheet.css" rel="stylesheet">
    <link href="<?php echo $BASEURL ?>fonts/droidsans/stylesheet.css" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo $BASEURL ?>css/ui.css" type="text/css"/>
    <link rel="stylesheet" href="<?php echo $BASEURL ?>css/admin.css" type="text/css"/>
    <script type="text/javascript">
    	var layout = <?php echo file_get_contents( "layout.txt") ?>;
    </script>
</head>
<body>
<div class="wrapper">
	<div id="tool" class="main">
		<div class="leftcol">
			<div class="holder"></div>
			<div class="holder"></div>
			<div class="holder"></div>
			<div class="holder"></div>
			<div class="holder"></div>
			<div class="holder"></div>
		</div>

		<div class="maincol">
			<div class="topbar">
			<div class="topbar_bg" style="display:none;">
			</div>
			</div>

			<div id="board"></div>
			

			<div class="bottombar">
				<div id="add_text_bbar" class="botbar_inside" style="display:block;">

				</div>
			</div>
			
		</div>

		<div class="rightcol">
			<div class="holder"></div>
			<div class="holder"></div>
			<div class="holder"></div>
			<div class="holder"></div>
			<div class="holder"></div>
			<div class="holder"></div>
		</div>
	</div>
</div>
<div id="dropdown" style="display:none;">

</div>
</body>
	<link href='http://fonts.googleapis.com/css?family=Lobster|Inconsolata|Cuprum|Pacifico|Orbitron|Exo|Chewy|Playball|Tangerine|Audiowide|Niconne|Frijole' rel='stylesheet' type='text/css'>

	<script type="text/javascript" src="<?php echo $BASEURL ?>js/ui/data.js"></script>

	<script type="text/javascript" src="<?php echo $BASEURL ?>js/jquery-ui.js"></script>
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/bootstrap.min.js"></script>
	
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/ui/ui.js"></script>
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/app/app.js"></script>
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/app/canvas.js"></script>
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/app/model.js"></script>
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/model/objects.js"></script>
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/model/events.js"></script>
	<script type="text/javascript">
		var canvas;
		jQuery(document).ready(function(){
			jQuery(window).resize();
			loadLayout();
			loadOption();
			InitialEvent();
		})
		
	</script>
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/initial.js"></script>
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/events/all.js"></script>
</html>

