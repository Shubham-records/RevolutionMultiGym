from flask import Flask, request, jsonify
import smtplib

app = Flask(__name__)

@app.route('/send', methods=['POST'])
def send_email():
    data = request.get_json()

    sender_email = "example@gmail.com"
    sender_password = "..."
    recipient_email = "example@gmail.com"

    msg =  f"subject:Name:{data['name']}\n\nContact:{data['contact']}\n\nEmail:{data['email']}\n\nMessage:{data['message']}"

    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, recipient_email, msg)


if __name__ == '__main__':
    app.run(debug=True)
