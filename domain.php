if (isset($_POST['addDomain']) && !empty($_POST['addDomain'])){


        $required_fields = array('domain', 'backend', 'port', 'userUsername', 'username', 'token', 'ip', 'useragent');
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
            $username   =   sanitize($_POST['username'], $dbc);
            $domain = sanitize(trim($_POST['domain']), $dbc);
            $backend = sanitize(trim($_POST['backend']), $dbc);
            $port = sanitize(trim($_POST['port']), $dbc);
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
                $responseArray['message'] = 'Please contact a staff member [SPID3 Error(' . $pid . '{' . $userUID . '}]';
            }else if (has_domain_added($userUID, $pid, $domain)){
                $responseArray['status'] = 'error';
                $responseArray['message'] = 'Domain already added';
            }else if(!validate_domain($domain)){
                $responseArray['status'] = 'error';
                $responseArray['message'] = 'Invalid domain name';
            }else if (!validate_ip($backend)){
                $responseArray['status'] = 'error';
                $responseArray['message'] = 'Invalid IPv4 Address ['.$backend.']';
            }else if (!validate_port($port)){
                $responseArray['status'] = 'error';
                $responseArray['message'] = 'Invalid Port';
            }else {
                log_service_action($userUID, $pid, "A Technician added the domain <span class=\"text-bold\" id=\"toolT\" data-html=\"true\" data-popup=\"tooltip\" data-original-title=\"".$tmp_string."\">".$domain."</span>", $ip, getTime());
                if(!addDomain($userUID, $pid, $domain, $backend, $port)){
                    $responseArray['status'] = 'error';
                    $responseArray['message'] = "There was a problem adding the domain. Try again later.";
                }else{
                    $responseArray['status'] = 'success';
                    $responseArray['message'] = 'The domain has been added ['.$port.']';
                }
            }
        }
    }