if (isset($_POST['suspendDomain']) && !empty($_POST['suspendDomain'])){


        $required_fields = array('domain', 'backend', 'port', 'domainID', 'pid', 'comment', 'userUsername', 'username', 'token', 'ip', 'useragent');
        foreach ($_POST as $key=>$value) {
            if (empty($value) && in_array($key, $required_fields) === true){
                $responseArray['status'] = 'error';
                $responseArray['message'] = 'All fields need to be filled';
                break 1;
            }
        }
        if (!isset($responseArray['status'])){
            $userUsername = sanitize($_POST['userUsername'], $dbc);
            $userUID = user_id_from_username($userUsername, $dbc);
            $userCID = clientIDFromUID($userUID);
            $username   =   sanitize($_POST['username'], $dbc);
            $domain = sanitize(trim($_POST['domain']), $dbc);
            $domainID = sanitize(trim($_POST['domainID']), $dbc);
            $backend = sanitize(trim($_POST['backend']), $dbc);
            $port = sanitize(trim($_POST['port']), $dbc);
            $comment = sanitize(trim($_POST['comment']), $dbc);
            $pid = sanitize(trim($_POST['pid']), $dbc);
            $token   =   sanitize(trim($_POST['token']), $dbc);
            $ip         =   sanitize($_POST['ip'], $dbc);
            $userAgent  =   sanitize($_POST['useragent'], $dbc);
            $tmp_user_id = user_id_from_username($username, $dbc);
            $tmp_string = ($port != 80 ? $backend.":".$port : $backend);
            if (!valid_token($tmp_user_id, $token)){
                $responseArray['status'] = 'error';
                $responseArray['message'] = 'Please contact a staff member';
            }else if (!valid_pid($userUID, $pid)){
                $responseArray['status'] = 'error';
                $responseArray['message'] = 'Please contact a staff member [SPID3 Error' . $pid . ']';
            }else if (!valid_domainID($userUID, $pid, $domain, $domainID)){
                $responseArray['status'] = 'error';
                $responseArray['message'] = 'Domain has not beenadded';
            }else {
                log_service_action($userUID, $pid, "A Technician suspended the domain <span class=\"text-bold\" id=\"toolT\" data-html=\"true\" data-popup=\"tooltip\" data-original-title=\"".$tmp_string."\">".$domain."</span>", $ip, getTime());
                if(!suspendDomain($userUID, $pid, $domain, $backend, $port)){
                    $responseArray['status'] = 'error';
                    $responseArray['message'] = "There was a problem suspending the domain. Try again later.";
                }else{
                    $testVar = addDomainComment($pid, $domainID, $comment, $tmp_user_id, $userUID, $userCID);
                    if (!$testVar){
                        $responseArray['status'] = 'error';
                        $responseArray['message'] = "There was a problem adding the domain comment. Try again later [" . $testVar . "]";
                    }else{
                        $responseArray['status'] = 'success';
                        $responseArray['message'] = 'The domain has been suspended';
                    }
                    
                }
            }
        }
    }