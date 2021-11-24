import { Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

export default function Logout() {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    function ShowLogout() {
        console.log(cookies["username"]);
        if (cookies["username"]) {
            console.log("logout");
            return (
                <>
                    <style type="text/css">
                        {`
                            .btn-outline-warning {
                                margin: 5px;
                            }
                            .logout-button {
                                margin-left: 20px;
                            }
                            .logout-button:hover {
                                background-color: #ffc107;
                            }
                        `}
                    </style>
                    <Button  className="logout-button" variant="outline-warning" onClick={logout}>Logout</Button>
                </>
                
            )
        }
        else {
            return (<></>)
        }
    }

    function logout() {
        removeCookie('username');
        removeCookie('rolename');
        window.location.reload(false);
    }

    return (
        <>
            <ShowLogout cookies={cookies} removeCookie={removeCookie} />
        </>
    )
}