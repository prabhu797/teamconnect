import { useEffect } from "react";

export default function Login() {

    const frappeServer = "novelhouston.com";
    const clientId = "2l9s5n1pj1";
    const redirectURL = "https://prabhu797.github.io/dashboard/loggedin";

    useEffect(() => {
        window.location.href = `https://${frappeServer}/api/method/frappe.integrations.oauth2.authorize?client_id=${clientId}&redirect_uri=${redirectURL}&response_type=code`;
    }, [])

    return (
        "Login"
    )
}
