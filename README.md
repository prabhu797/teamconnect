# TeamConnect

TeamConnect is a project aimed at exploring and establishing a connection between Frappe and an external React app via OAuth2. The goal is to build a custom React application that operates outside the Frappe environment, while still interacting with it securely using OAuth2 for authentication.

# Features

    OAuth2 integration with Frappe for secure authentication.
    Custom React app hosted on a separate server, connected to the Frappe backend.
    Real-time data sync through sockets (currently under development).

# Current Status

    The React app is successfully hosted on a server and integrated with Frappe via OAuth2 for user authentication.
    OAuth2 authentication has been configured and is working as expected.
    Issue: The socket connection is not being established properly. We are actively working on fixing this issue to enable real-time communication.

# To Do

    Resolve socket connection issue.
    Implement additional features such as data syncing and push notifications.

# Setup Instructions

1). Clone this repository to your local machine.
2). Follow the instructions in the server setup guide to deploy the Frappe instance.
3). Set up OAuth2 by configuring the necessary keys and tokens for Frappe integration.
4). Install the required dependencies for the React app.
5). Run the React app and verify that the OAuth2 authentication works.


Note: Application has been deployed using github pages, please checkout.
