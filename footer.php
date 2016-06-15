<?php
/**
 * page_footer.php
 *
 * Author: John Sukie
 *
 * Footer used on all pages
 *
 */
?>
                    <!-- Footer -->
                    <!-- <div class="footer text-muted">
                        &copy; 2015. <a href="#">zTools</a> by PureAdderall
                        <span class="position-right text-right">
                            <a href="#">
                                Contact Us
                            </a>
                            <i class="icon-power3"></i>
                            <a href="#">
                                TOS
                            </a>
                            <i class="icon-power3"></i>
                            <a href="#">
                                Privacy
                            </a>
                        </span>
                    </div> -->
                    <!-- /footer -->

                    
                    <?php 

                    echo '<input type="text" value="'.$ipaddr.'" id="ip" hidden>';
                    // echo '<input type="text" value="'.$user_data['username'].'" id="username" hidden>';
                    echo '<input type="text" value="'. $userAgent.'" id="useragent" hidden>';
                    if (logged_in()){
                        echo '<input type="text" value="'.$user_data['username'].'" id="username" hidden>';
                    }

                    ?>
                    <!-- Footer -->

                    <div class="navbar navbar-default navbar-sm navbar-fixed-bottom">

                        <!-- Toggle button -->
                        <ul class="nav navbar-nav no-border visible-xs-block">
                            <li>
                                <a class="text-center collapsed" data-toggle="collapse" data-target="#navbar-second">
                                    <i class="icon-circle-up2"></i>
                                </a>
                            </li>
                        </ul>
                        <!-- /toggle button -->


                        <!-- Navbar content -->
                        <div class="navbar-collapse collapse" id="navbar-second">
                            <div class="navbar-text">
                                &copy; 2016. <a href="#"><?php echo $config['name'];?></a> by <?php echo $config['author'];?>
                            </div>

                            <div class="navbar-text navbar-right">
                                <a href="contact.php">
                                    Contact Us
                                </a>
                                <i class="icon-power3"></i>
                                <a href="tos.php">
                                    TOS
                                </a>
                                <i class="icon-power3"></i>
                                <a href="tos.php#privacy">
                                    Privacy
                                </a>
                            </div>
                        </div>
                        <!-- /navbar content -->

                    </div>
                    <!-- /footer -->

                </div>
                <!-- /content area -->
            </div>
            <!-- /main content -->
        </div>
        <!-- /page content -->
    </div>
    <!-- /page container -->
