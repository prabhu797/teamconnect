import { useEffect } from "react";

export default function AuthLogin() {

    const frappeServer = "localhost:8000";
    const clientId = "cu2d1ep5jj";
    const redirectURL = "http://localhost:8080/loggedin";

    useEffect(() => {
        window.location.href = `http://${frappeServer}/api/method/frappe.integrations.oauth2.authorize?client_id=${clientId}&redirect_uri=${redirectURL}&response_type=code`;
    }, [])

    return (
        ""
    )
}
