<?php 
	$TITLE = "First service";
	$BASEURL = "http://localhost/service/";
?>
<!DOCTYPE html>
<html>
<head>
	<title><?php echo $TITLE; ?></title>

	<script type="text/javascript" src="<?php echo $BASEURL ?>js/jquery.min.js"></script>
	
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
	<div id="control">
		<button onclick="saveLayout()">save layout</button>
	</div>
	<div id="feature">
		
	</div>
	<div id="designer" class="main" oncontextmenu="return false;">
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
				<div id="add_text_bar" class="topbar_inside" style="width:288px;display:none;">
					<div class="ico-btn-s group-text-tool-0 fleft btn-first"><span class="icon icon-font-size"></span></div>
					<div class="ico-btn-s group-text-tool-1 fleft"><span class="icon icon-bold"></span></div>
					<div class="ico-btn-s group-text-tool-1 fleft"><span class="icon icon-italic"></span></div>
					<div class="ico-btn-s group-text-tool-1 fleft"><span class="icon icon-underline"></span></div>
					<div class="ico-btn-s group-text-tool-2 fleft"><span class="icon icon-paragraph-left"></span></div>
					<div class="ico-btn-s group-text-tool-2 fleft"><span class="icon icon-paragraph-center"></span></div>
					<div class="ico-btn-s group-text-tool-2 fleft"><span class="icon icon-paragraph-right"></span></div>
					<div class="ico-btn-s group-text-tool-3 fleft"><span class="icon icon-plus"></span></div>
				</div>

				<div id="add_effect_bar" class="topbar_inside" style="width:186px;display:none;">
					<div class="ico-btn-s draw-tool fleft btn-first"><span class="icon icon-star-empty"></span></div>
					<div class="ico-btn-s draw-tool fleft"><span class="icon icon-star-empty"></span></div>
					<div class="ico-btn-s draw-tool fleft"><span class="icon icon-star-empty"></span></div>
					<div class="ico-btn-s draw-tool fleft"><span class="icon icon-star-empty"></span></div>
					<div class="ico-btn-s draw-tool fleft"><span class="icon icon-star-empty"></span></div>
				</div>
			</div>
			</div>

			<canvas id="board" width="100%" height="100%"></canvas>

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
	<div class="submenu" style="display:none;" oncontextmenu="return false;">
		<p class="func" onclick="deleteFunc(this)">Remove</p>
		<p class="func" onclick="haha(this)">Set Text</p>
		<p class="func" onclick="haha(this)">Set Icon</p>
		<p class="func exit" onclick="exit(this);">Exit</p>
	</div>
	<div class="footer row">
		<p class="pull-left">thor.dang@outlook.com.vn</p> <p class="pull-right">copyRight 2014</p>
	</div>
</div>
</body>
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/jquery-ui.js"></script>
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/bootstrap.min.js"></script>
	
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/ui/data.js"></script>
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/ui/template.js"></script>
	<script type="text/javascript" src="<?php echo $BASEURL ?>js/ui/admin.js"></script>
	<script type="text/javascript">
		
	</script>
</html>

